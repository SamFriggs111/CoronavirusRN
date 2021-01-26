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
