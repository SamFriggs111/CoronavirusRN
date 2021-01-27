import React, { useRef, useState, useEffect } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
require("./../../fix-timer-bug");

var firebaseConfig = {
  apiKey: "AIzaSyAnI9_haRP2wGS_0GjtLk27zkhMz0HhqnA",
  authDomain: "coronavirusrn-65e9c.firebaseapp.com",
  databaseURL:
    "https://coronavirusrn-65e9c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coronavirusrn-65e9c",
  storageBucket: "coronavirusrn-65e9c.appspot.com",
  messagingSenderId: "29036383264",
  appId: "1:29036383264:web:db2caefb78fde7a9898045",
  measurementId: "G-GGEEDZZPSN"
};

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
import { getBeachData, getDefaultRegion, getCongestion } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles, welcomeMessage } from "./styles";
import BeachDetailView from "./overlay/BeachDetailView";
import WelcomeDetailView from "./overlay/WelcomeDetailView";
import * as Location from "expo-location";

const MapsView = ({ route }) => {
  const [region, setRegion] = useState(getDefaultRegion());
  const [navIndex, setNavIndex] = useState(null);
  const [welcomeMesIsDisplayed, setWelcomeMessageOverlay] = useState(true);
  const [beachIsDisplayed, setBeachOverlay] = useState(false);
  const [locationResults, setLocationResults] = useState(false);
  const [locationCovidInformation, setLocationCovidInformation] = useState(
    null
  );

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const mapRef = useRef(null);
  const beachRef = useRef(null);
  const welcomeRef = useRef(null);
  const paginationRef = useRef(null);
  const polyRef = useRef(null);

  const beachData = getBeachData();

  const switchToBeach = key => {
    setRegion(beachData[key - 1]);
    setNavIndex(beachData[key - 1].id - 1);
    setWelcomeMessageOverlay(false);
    updatePolygonStrokeColour(key - 1);
  };

  const updatePolygonStrokeColour = key => {
    beachData.forEach(index =>
      setBeachOverlay((beachData[index.id - 1].strokeColour = null))
    );
    if (key || key == 0) {
      let strokeColour = "black";
      setBeachOverlay((beachData[key].strokeColour = strokeColour));
    }
  };

  const PolygonViews = () => {
    return beachData.map(data => (
      <Polygon
        ref={polyRef}
        key={data.id}
        onPress={() => switchToBeach(data.id)}
        tappable={true}
        fillColor={data.polygonColour}
        strokeColor={data.strokeColour ? data.strokeColour : data.polygonColour}
        coordinates={data.polygonCoordinates}
      />
    ));
  };

  const Pagination = ({ navIndex }) => {
    return (
      <View>
        {beachIsDisplayed ? (
          <Animatable.View ref={paginationRef} style={styles.pagination}>
            {beachData.map((_, key) => {
              return (
                <View
                  key={key}
                  style={[
                    styles.paginationDot,
                    navIndex === key
                      ? styles.paginationDotActive
                      : styles.paginationDotInactive
                  ]}
                />
              );
            })}
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  const AnimatedCard = () => {
    return (
      <View>
        {beachIsDisplayed ? (
          <Animatable.View
            ref={beachRef}
            animation="flipInY"
            iterationCount={1}
            direction="alternate"
            style={[styles.slide, styles.carousel]}
          >
            <View style={styles.innerSlide}>
              {/* <TouchableNativeFeedback
                underlayColor="white"
                onPress={closeWindow}
              >
                <AntDesign
                  style={styles.close}
                  name="close"
                  size={30}
                  color="red"
                />
              </TouchableNativeFeedback> */}
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
            // animation="flipInY"
            // iterationCount={1}
            // direction="alternate"
            style={[styles.slide, styles.carousel]}
          >
            {/* <WelcomeDetailView /> */}
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
    setLocationResults(false);
    let url = location.areaCode
      ? `https://api.coronavirus.data.gov.uk/v1/data?filters=areaCode=${location.areaCode}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`
      : `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location.city}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        let caseInformation = locationCovidInformation.findIndex(
          obj => obj.city == location.city
        );

        locationCovidInformation[caseInformation].newCases =
          data.data[0].newCasesByPublishDate;
        setLocationCovidInformation(locationCovidInformation);
        // setRegion({
        //   latitude: location.lat,
        //   longitude: location.lng,
        //   latitudeDelta: 0.017,
        //   longitudeDelta: 0.017
        // });
        setLocationResults(data.data[0]);
        setBeachOverlay(true);
      });
  };

  const MarkerLocations = () => {
    getLocationData();
    if (locationCovidInformation) {
      console.log("locationCovidInformation", locationCovidInformation);
      return locationCovidInformation.map(data => (
        <View key={data.id}>
          <Marker
            // key={data.id}
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
                    <Text>New Cases: {data.newCases}</Text>
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
            // key={data.id}
            onPress={() => requestData(data)}
            center={{
              latitude: parseFloat(data.lat),
              longitude: parseFloat(data.lng)
            }}
            radius={5000}
            fillColor="rgba(168, 50, 50, 0.5)"
          />
        </View>
      ));
    } else return null;
  };

  const closeWindow = () => {
    updatePolygonStrokeColour(null);
    if (beachIsDisplayed) {
      beachRef.current.flipOutY();
      paginationRef.current.flipOutY();
    }
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
        setLocation(location);
        setRegion(location.coords);
        welcomeRef.current.flipOutY();
        // setWelcomeMessageOverlay(false);
      })();
    }
  };

  // const [beachIsDisplayed, setBeachOverlay] = useState(false);
  const getLocationData = () => {
    if (!locationCovidInformation) {
      (async () => {
        let output = [];
        firebase
          .firestore()
          .collection("locations")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              // output.push(documentSnapshot.data());
              let url = documentSnapshot.data().areaCode
                ? `https://api.coronavirus.data.gov.uk/v1/data?filters=areaCode=${
                    documentSnapshot.data().areaCode
                  }&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`
                : `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${
                    documentSnapshot.data().city
                  }&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}`;

              fetch(url)
                .then(results => results.json())
                .then(data => {
                  let locationData = documentSnapshot.data();
                  locationData.newCasesByPublishDate =
                    data.data[0].newCasesByPublishDate;
                  output.push(locationData);
                  setLocationCovidInformation(output);
                });
            });
            // setLocationCovidInformation(output);
          });
      })();
    }
  };

  useFocusEffect(() => {
    if (locationResults) {
      // console.log("tesfaesfw");
      // welcomeRef.current.flipOutY();
      setWelcomeMessageOverlay(false);
    }
    console.log("useFocusEffect");
    getMyLocation();

    if (route.params) {
      updatePolygonStrokeColour(route.params.region.id - 1);
      setRegion(route.params.region);
      setWelcomeMessageOverlay(false);
      setBeachOverlay(true);
    }
    if (mapRef.current) {
      route.params = null;
      // mapRef.current.animateToRegion(
      //   {
      //     latitude: region.latitude,
      //     longitude: region.longitude,
      //     latitudeDelta: 0.017,
      //     longitudeDelta: 0.017
      //   },
      //   2000
      // );
      setNavIndex(region.id - 1);
    }
  }, []);

  return (
    <SafeAreaView>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.017,
          longitudeDelta: 0.017
        }}
        ref={mapRef}
      >
        {/* <PolygonViews></PolygonViews> */}
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
          pinColor="black"
        >
          <Callout style={{ flex: 1, position: "relative" }}>
            <View>
              <Text>Your Location</Text>
            </View>
          </Callout>
        </Marker>
        <MarkerLocations />
      </MapView>

      <AnimatedCard />
      <WelcomeViewCard />
      {/* <Pagination navIndex={navIndex}></Pagination> */}
    </SafeAreaView>
  );
};

export default MapsView;
