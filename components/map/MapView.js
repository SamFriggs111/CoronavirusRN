import React, { useRef, useState } from "react";
// Fixing known bug in RN
require("./../../fix-timer-bug");

// Initialising firebase
import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = require("./../../config");
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

// Imports the necessary react components
import {
  View,
  TouchableNativeFeedback,
  SafeAreaView,
  Text,
  Image
} from "react-native";

// Imports icons
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
// Imports RN maps
import MapView, { Marker, Callout, Circle } from "react-native-maps";
// Imports created files from components
import {
  getDefaultRegion,
  getCoronavirusUrl,
  determineLocationColour
} from "../../api/api";
import LocationDetailView from "./overlay/LocationDetailView";

// Remaining imports
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles, welcomeMessage } from "./styles";
import * as Location from "expo-location";

const MapsView = ({ route }) => {
  const [region, setRegion] = useState(getDefaultRegion()); // Region state
  const [sensorsMessageIsDisplayed, setSensorsMessageOverlay] = useState(true); // Used to toggle the sensors overlay
  const [locationIsDisplayed, setLocationOverlay] = useState(false); // Used to toggle the information overlay

  const [locationResults, setLocationResults] = useState(false); // Stores the location data from the API call
  const [locationCovidInformation, setLocationCovidInformation] = useState(
    null
  ); // Stores the location data from the database

  const [myLocation, setMyLocation] = useState(null); // Handles state for GPS location
  const [focusIsDisabled, setFocusDisabled] = useState(false);

  // References
  const mapRef = useRef(null); // For maps
  const locationRef = useRef(null); // For location overlay
  const sensorsRef = useRef(null); // For sensor overlay

  // Component that renders the location overlay - only renders if there's a location set
  const LocationOverlay = () => {
    return (
      <View>
        {locationIsDisplayed ? (
          <Animatable.View
            ref={locationRef}
            animation="flipInY"
            iterationCount={1}
            direction="alternate"
            style={[styles.slide, styles.overlay]}
          >
            <View style={styles.innerSlide}>
              <TouchableNativeFeedback
                underlayColor="white"
                onPress={closeWindow}
              >
                <AntDesign
                  style={styles.close}
                  name="close"
                  size={30}
                  color="red"
                />
              </TouchableNativeFeedback>
              <LocationDetailView location={locationResults} />
            </View>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  // Component that renders when the sensors aren't ready - will appear until GPS and database data from be stored
  const SensorOverlay = () => {
    console.log(sensorsMessageIsDisplayed);
    return (
      <View>
        {sensorsMessageIsDisplayed ? (
          <Animatable.View
            ref={sensorsRef}
            style={[styles.slide, styles.overlay]}
          >
            <View style={styles.innerSlide}>
              <View style={styles.sliders}>
                <Text style={welcomeMessage.slideDesc}>Getting location</Text>
                {!myLocation ? (
                  <Image
                    source={require("./../../assets/loading.gif")}
                    style={{ width: 20, height: 20 }}
                  />
                ) : (
                  <MaterialIcons name="done" size={20} color="green" />
                )}
              </View>
              <View style={styles.sliders}>
                <Text style={welcomeMessage.slideDesc}>Retrieving data</Text>
                {!locationCovidInformation ? (
                  <Image
                    source={require("./../../assets/loading.gif")}
                    style={{ width: 20, height: 20 }}
                  />
                ) : (
                  <MaterialIcons name="done" size={20} color="green" />
                )}
              </View>
            </View>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  // This function updates the information on the InformationView
  // It also updates the necessary state
  const requestData = location => {
    setSensorsMessageOverlay(false);
    setLocationResults(false);
    setFocusDisabled(false);

    // Change of region
    setRegion({
      latitude: location.lat,
      longitude: location.lng
    });

    // Gets url from API file
    const url = getCoronavirusUrl(location);

    // Uses the NHS api to get the required data
    fetch(url)
      .then(results => results.json())
      .then(data => {
        let caseInformation = locationCovidInformation.findIndex(
          obj => obj.city == location.city
        );
        let todaysData = data.data[0];
        let prevData = data.data[1];

        locationCovidInformation[
          caseInformation
        ].colour = determineLocationColour(todaysData);

        todaysData.city = location.city;
        todaysData.cumDeaths28DaysByDeathDate =
          prevData.cumDeaths28DaysByDeathDate;

        todaysData.newDeaths28DaysByDeathDate =
          prevData.newDeaths28DaysByDeathDate;

        setLocationCovidInformation(locationCovidInformation);
        setLocationResults(todaysData);
        setLocationOverlay(true);
      });
  };

  const MarkerLocations = () => {
    getLocationData();
    if (locationCovidInformation) {
      return locationCovidInformation.map(data => (
        <View key={data.id}>
          <Marker
            onPress={() => requestData(data)}
            coordinate={{
              latitude: parseFloat(data.lat),
              longitude: parseFloat(data.lng)
            }}
          >
            <Callout style={{ flex: 1, position: "relative" }}>
              <View>
                {locationResults ? (
                  <View>
                    <Text>{data.city}</Text>
                  </View>
                ) : (
                  <View>
                    <Text>Loading Latest Data</Text>
                  </View>
                )}
              </View>
            </Callout>
          </Marker>
          <Circle
            onPress={() => requestData(data)}
            center={{
              latitude: parseFloat(data.lat),
              longitude: parseFloat(data.lng)
            }}
            radius={5000}
            fillColor={data.colour ? data.colour : "rgba(225, 230, 223, 0.5)"}
          />
        </View>
      ));
    } else return null;
  };

  const closeWindow = () => {
    console.log("touched");
    // updatePolygonStrokeColour(null);
    // if (locationIsDisplayed) {
    //   locationRef.current.flipOutY();
    //   paginationRef.current.flipOutY();
    // }
  };

  const getMyLocation = () => {
    if (!myLocation) {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") return;

        let location = await Location.getCurrentPositionAsync({});
        setMyLocation(location.coords);
        setRegion(location.coords);
        sensorsRef.current.flipOutY();
      })();
    }
  };

  const getLocationData = () => {
    if (!locationCovidInformation) {
      (async () => {
        let locationsArr = [];
        firebase
          .firestore()
          .collection("locations")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(location => {
              locationsArr.push(location.data());
            });
            setLocationCovidInformation(locationsArr);
          });
      })();
    }
  };

  useFocusEffect(() => {
    // console.log("useFocusEffect");
    // if (!focusIsDisabled || route.params) {
    // console.log("run");
    getMyLocation();

    if (route.params) {
      setRegion({
        latitude: route.params.region.lat,
        longitude: route.params.region.lng,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2
      });
      requestData(route.params.region);
      setSensorsMessageOverlay(false);
      setLocationOverlay(true);
    }
    if (mapRef.current) {
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: region.latitude - 0.05,
          longitude: region.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2
          // latitudeDelta: region.latitudeDelta,
          // longitudeDelta: region.longitudeDelta
        },
        2000
      );
    }
    setFocusDisabled(true);
    // }
  });

  return (
    <SafeAreaView>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3
        }}
        ref={mapRef}
      >
        {myLocation ? (
          <View>
            <Marker
              coordinate={{
                latitude: myLocation.latitude,
                longitude: myLocation.longitude
              }}
              pinColor={"blue"}
            >
              <Callout style={{ flex: 1, position: "relative" }}>
                <View>
                  <Text>Your Location</Text>
                </View>
              </Callout>
            </Marker>
          </View>
        ) : null}
        <MarkerLocations />
      </MapView>
      <LocationOverlay />
      <SensorOverlay />
    </SafeAreaView>
  );
};

export default MapsView;
