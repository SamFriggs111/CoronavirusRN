import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

import { getNoticeText, Tester } from "../../api/api.js";
import styles from "./styles";

const InformationView = () => {
  const [covidInformation, setCovidInformation] = useState(null);
  let url =
    "https://api.nhs.uk/conditions/coronavirus-covid-19?url=whatsapp&modules=true";

  const getInformation = () => {
    if (!covidInformation)
      fetch(url)
        .then(results => results.json())
        .then(data => {
          if (data.modules.text !== "") setCovidInformation(data.modules);
        });
  };

  const NoticeTextView = () => {
    getInformation();
    console.log("1");
    return (
      <View style={{ flex: 1 }}>
        {covidInformation ? (
          <View style={{ flex: 1 }}>
            <Text style={[styles.textContainer, styles.title]}>
              Latest Information
            </Text>
            <WebView
              scalesPageToFit={false}
              source={{ html: covidInformation[0].text }}
            />
            <Text style={[styles.textContainer, styles.title]}>Treatment</Text>
            <WebView
              scalesPageToFit={false}
              source={{ html: covidInformation[4].text }}
            />
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <View style={[styles.textContainer, styles.helpFlex]}>
        <NoticeTextView />
      </View>
    </View>
  );
};

export default InformationView;
