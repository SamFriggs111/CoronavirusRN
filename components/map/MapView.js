import React, { useRef, useState, useEffect } from "react";
require("./../../fix-timer-bug");

import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = require("./../../config");
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

import {
  View,
  TouchableNativeFeedback,
  SafeAreaView,
  Text,
  Image
} from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import MapView, { Polygon, Marker, Callout, Circle } from "react-native-maps";
import {
  getLocationsData,
  getDefaultRegion,
  getCongestion
} from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles, welcomeMessage } from "./styles";
import BeachDetailView from "./overlay/BeachDetailView";
import WelcomeDetailView from "./overlay/WelcomeDetailView";
import * as Location from "expo-location";

const MapsView = ({ route }) => {
  const [region, setRegion] = useState(getDefaultRegion());
  const [welcomeMesIsDisplayed, setWelcomeMessageOverlay] = useState(true);
  const [locationIsDisplayed, setLocationOverlay] = useState(false);
  const [locationResults, setLocationResults] = useState(false);
  const [locationCovidInformation, setLocationCovidInformation] = useState(
    null
  );

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [focusIsDisabled, setFocusDisabled] = useState(false);

  const mapRef = useRef(null);
  const beachRef = useRef(null);
  const welcomeRef = useRef(null);
  const paginationRef = useRef(null);

  const AnimatedCard = () => {
    return (
      <View>
        {locationIsDisplayed ? (
          <Animatable.View
            ref={beachRef}
            animation="flipInY"
            iterationCount={1}
            direction="alternate"
            style={[styles.slide, styles.carousel]}
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
              <BeachDetailView location={locationResults} />
            </View>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  const WelcomeViewCard = () => {
    return (
      <View>
        {welcomeMesIsDisplayed ? (
          <Animatable.View
            ref={welcomeRef}
            style={[styles.slide, styles.carousel]}
          >
            <View style={styles.innerSlide}>
              <View style={styles.sliders}>
                <Text style={welcomeMessage.slideDesc}>Getting Location</Text>
                {!location ? (
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

  const requestData = location => {
    setWelcomeMessageOverlay(false);
    setLocationResults(false);
    setFocusDisabled(false);
    setRegion({
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2
    });
    let url = location.areaCode
      ? `https://api.coronavirus.data.gov.uk/v1/data?filters=areaCode=${location.areaCode}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`
      : `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location.city}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        let caseInformation = locationCovidInformation.findIndex(
          obj => obj.city == location.city
        );
        let todaysData = data.data[0];
        let prevData = data.data[1];

        if (todaysData.newCasesByPublishDate < 50) {
          locationCovidInformation[caseInformation].colour =
            "rgba(50, 168, 98, 0.5)";
        } else if (
          todaysData.newCasesByPublishDate >= 50 &&
          todaysData.newCasesByPublishDate <= 150
        ) {
          locationCovidInformation[caseInformation].colour =
            "rgba(229, 232, 51, 0.5)";
        } else {
          locationCovidInformation[caseInformation].colour =
            "rgba(168, 50, 50, 0.5)";
        }

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
    //   beachRef.current.flipOutY();
    //   paginationRef.current.flipOutY();
    // }
  };

  const getMyLocation = () => {
    if (!location) {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setRegion(location.coords);
        welcomeRef.current.flipOutY();
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
      setWelcomeMessageOverlay(false);
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
        {location ? (
          <View>
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
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

      <AnimatedCard />
      <WelcomeViewCard />
      {/* <Pagination navIndex={navIndex}></Pagination> */}
    </SafeAreaView>
  );
};

export default MapsView;
