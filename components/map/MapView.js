import React, { useRef, useState, useEffect } from "react";

import * as firebase from "firebase";
import "firebase/firestore";

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

// if (!firebase)
firebase.initializeApp(firebaseConfig);

import {
  View,
  TouchableNativeFeedback,
  SafeAreaView,
  ActivityIndicator,
  Text
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MapView, { Polygon, Marker, Callout } from "react-native-maps";
import { getBeachData, getDefaultRegion, getCongestion } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import BeachDetailView from "./overlay/BeachDetailView";
import WelcomeDetailView from "./overlay/WelcomeDetailView";
import * as Location from "expo-location";

const MapsView = ({ route }) => {
  const [region, setRegion] = useState(getDefaultRegion());
  const [navIndex, setNavIndex] = useState(null);
  const [welcomeMesIsDisplayed, setWelcomeMessageOverlay] = useState(true);
  const [beachIsDisplayed, setBeachOverlay] = useState(false);
  const [beachResults, setResults] = useState(false);

  // const locations = getCongestion();
  const [locationCovidInformation, setLocationCovidInformation] = useState(
    null
  );
  // console.log("tester", locations);
  // locations.forEach(documentSnapshot => {
  //   console.log("Location: ", documentSnapshot.data());
  //   // output.push(documentSnapshot.data());
  // });

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
            {navIndex !== 0 ? (
              <TouchableNativeFeedback
                underlayColor="white"
                onPress={() => changeBeachDirection("left")}
              >
                <Ionicons
                  style={styles.sliderArrow}
                  name="ios-arrow-back"
                  size={54}
                  color="white"
                />
              </TouchableNativeFeedback>
            ) : (
              <TouchableNativeFeedback underlayColor="white">
                <Ionicons
                  style={styles.sliderArrow}
                  name="ios-arrow-back"
                  size={54}
                  color="red"
                />
              </TouchableNativeFeedback>
            )}
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
              <BeachDetailView region={region} />
            </View>
            {navIndex !== beachData.length - 1 ? (
              <TouchableNativeFeedback
                underlayColor="white"
                onPress={() => changeBeachDirection("right")}
              >
                <Ionicons
                  style={styles.sliderArrow}
                  name="ios-arrow-forward"
                  size={54}
                  color="white"
                />
              </TouchableNativeFeedback>
            ) : (
              <TouchableNativeFeedback underlayColor="white">
                <Ionicons
                  style={styles.sliderArrow}
                  name="ios-arrow-forward"
                  size={54}
                  color="red"
                />
              </TouchableNativeFeedback>
            )}
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
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection(null, 9)}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-back"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
            <WelcomeDetailView />
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection(null, 10)}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-forward"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  const Tester = location => {
    // console.log("loc", location);
    setResults(false);
    // console.log("on press");
    fetch(
      `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=" +
        ${location}
        &structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`
    )
      .then(results => results.json())
      .then(data => {
        // console.log("data", data.data[0].newCasesByPublishDate);
        // console.log("data", data.data);
        let caseInformation = locationCovidInformation.findIndex(
          obj => obj.city == location
        );
        locations[caseInformation].newCases =
          data.data[0].newCasesByPublishDate;
        console.log("info", locations[caseInformation]);
        setLocationCovidInformation(locations);
        setResults(true);
      });
  };

  const MarkerLocations = () => {
    getLocationData();
    let test = false;
    // console.log("locationCovidInformation", locationCovidInformation);
    if (locationCovidInformation)
      return locationCovidInformation.map(data => (
        // console.log("data", [
        //   data.city,
        //   parseFloat(data.lat),
        //   parseFloat(data.lng)
        // ])
        <Marker
          onPress={() => Tester(data.city)}
          coordinate={{
            latitude: 53.3833,
            longitude: -1.4667
          }}
        >
          <Callout style={{ flex: 1, position: "relative" }}>
            <View>
              {beachResults ? (
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
      ));
    else return null;
  };

  const closeWindow = () => {
    updatePolygonStrokeColour(null);
    if (beachIsDisplayed) {
      beachRef.current.flipOutY();
      paginationRef.current.flipOutY();
    }
  };

  const changeBeachDirection = (direction, jumpTo) => {
    if (!jumpTo) {
      let navIndex = region.id - 1;
      if (direction == "left") {
        updatePolygonStrokeColour(navIndex - 1);
        setRegion(beachData[navIndex - 1]);
        setNavIndex(beachData[navIndex - 1].id - 1);
      } else if (direction == "right") {
        updatePolygonStrokeColour(navIndex + 1);
        setRegion(beachData[navIndex + 1]);
        setNavIndex(beachData[navIndex + 1].id - 1);
      }
    } else {
      updatePolygonStrokeColour(jumpTo - 1);
      setRegion(beachData[jumpTo - 1]);
      setNavIndex(beachData[jumpTo - 1].id - 1);
      setWelcomeMessageOverlay(false);
      setBeachOverlay(true);
    }
  };

  const getLocation = () => {
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
      })();
    }
  };

  const getLocationData = () => {
    if (!locationCovidInformation) {
      (async () => {
        console.log("testerx", locationCovidInformation);
        let output = [];
        const dbh = firebase
          .firestore()
          .collection("locations")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              output.push(documentSnapshot.data());
            });
            setLocationCovidInformation(output);
          });
      })();
    }
  };

  useFocusEffect(() => {
    getLocationData();
    getLocation();

    if (route.params) {
      updatePolygonStrokeColour(route.params.region.id - 1);
      setRegion(route.params.region);
      setWelcomeMessageOverlay(false);
      setBeachOverlay(true);
    }
    if (mapRef.current) {
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.017,
          longitudeDelta: 0.017
        },
        2000
      );
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
        >
          <Callout style={{ flex: 1, position: "relative" }}>
            <View>
              <Text>My Location</Text>
            </View>
          </Callout>
        </Marker>
        <MarkerLocations />
      </MapView>

      {/* <AnimatedCard /> */}
      {/* <WelcomeViewCard /> */}
      <Pagination navIndex={navIndex}></Pagination>
    </SafeAreaView>
  );
};

export default MapsView;
