const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const locations = require("./data-clean/firebase/locations.json");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAnI9_haRP2wGS_0GjtLk27zkhMz0HhqnA",
  authDomain: "coronavirusrn-65e9c.firebaseapp.com",
  projectId: "coronavirusrn-65e9c"
});

var db = firebase.firestore();
let counter = 1;

locations.forEach(function(obj) {
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
