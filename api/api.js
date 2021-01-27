import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = require("./../config");
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const getDefaultRegion = () => {
  return {
    latitude: 50.72,
    longitude: -1.88,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017
  };
};

export const getLocationsData = async () => {
  let output = [];
  await firebase
    .firestore()
    .collection("locations")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        output.push(documentSnapshot.data());
      });
    });
  console.log(output);
  return output;
};

export const Tester = () => {
  const test = getApiData();
  return test;
};

async function getApiData() {
  let response = await fetch("http://samfriggens.me.uk/getCityLocations");
  let data = await response.json();
  console.log("js data", data);
  return data;
}

export const getNoticeText = () => {
  if (typeof noticeText !== "undefined") return noticeText;
  else
    return {
      Intro: "No notices at this time",
      Desc: "All updates will be displayed here"
    };
};
