import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import { getNoticeText, Tester } from "../../api/api.js";
import styles from "./styles";

const NoticeTextView = () => {
  const notice = getNoticeText();
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dbh = firebase
    .firestore()
    .collection("locations")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        console.log("Location: ", documentSnapshot.data());
      });
      // console.log("querySnapshot", querySnapshot.data());
    });

  // console.log("locCollection", dbh);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>text</Text>
    </View>
  );
};

// const GetData = () => {
//   const locations = getHelpText();
//   let output = [];
//   for (var index in locations) {
//     // console.log("data", locations[index].city);
//     fetch(
//       `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${locations[index].city}&structure={"date":"2020-01-25","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`
//       // `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=Leeds&structure={"date":"2020-01-25","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`
//     )
//       .then(results => results.json())
//       .then(data => {
//         // console.log("data", data.data[0].areaName);
//         for (var i = 0; i < locations.length; i++) {
//           if (locations[i].city == data.data[0].areaName) {
//             // console.log(locations[i]);
//             output.push({
//               city: locations[i].city,
//               lat: locations[i].lat,
//               lng: locations[i].lng
//             });
//             console.log("out", JSON.stringify(output));

//             break;
//           }
//         }
//       });
//   }
//   // console.log("out", JSON.stringify());

//   return <View style={{ flex: 1, padding: 0 }}></View>;
//   // return cases.map((data, i) => (
//   //   <View key={i}>
//   //     <Text style={styles.textPadding}>{data.city}</Text>
//   //   </View>
//   // ));
// };

const FaqView = () => {
  // const faqs = getApiData();
  const test = Tester();
  // console.log("test", faqs);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>text</Text>
    </View>
  );
  // return faqs.map((data, i) => (
  //   <View key={i}>
  //     <Text style={styles.textPadding}>{data.city}</Text>
  //   </View>
  // ));
};

const InformationView = () => {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <NoticeTextView />
      <View style={[styles.textContainer, styles.helpFlex]}>
        <Text style={styles.textFaq}>FAQ's</Text>
        {/* <GetData /> */}
        <SafeAreaView>
          <ScrollView>{/* <FaqView /> */}</ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default InformationView;
