const firebase = require("firebase");
require("firebase/firestore");
const locations = require("./data-clean/firebase/locations.json");
// Initialize Cloud Firestore through Firebase
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

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let counter = 1;

locations.forEach(function(obj) {
  console.log(obj);
  // console.log("test");
  db.collection("locations")
    .add({
      id: counter,
      city: obj.city,
      lat: obj.lat,
      lng: obj.lng
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  counter++;
});
