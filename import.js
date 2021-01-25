// Imports
const firestoreService = require("firestore-export-import");
const firestoreServices = require("firebase-admin");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./serviceAccount.json");

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    firestoreServices.initializeApp();
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore("./data-clean/firebase/locations.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
