import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import { getNoticeText, getHelpText, Tester } from "../../api/api.js";
import styles from "./styles";

const NoticeTextView = () => {
  const notice = getNoticeText();
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    // <View style={[styles.textContainer, styles.noticeFlex]}>
    //   <Text style={styles.textNotice}>{notice.Title}</Text>
    //   <Text style={styles.textPadding}>{notice.Intro}</Text>
    //   <Text style={styles.textPadding}>{notice.Desc}</Text>
    // </View>
    <View style={styles.container}>
      <Text style={styles.paragraph}>text</Text>
    </View>
  );
};

function User() {
  const [cases, setCases] = useState(null);
  
  useEffect(() => {
    fetch('https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=Coventry&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}')
      .then(results => results.json())
      .then(data => {
        // console.log('data', data.data)
        setCases(data.data);
      });
  }, []);

  // console.log('cases', cases);
  return (
    <View style={{ flex: 1, padding: 0 }}></View>
  );
  // return cases.map((data, i) => (
  //   <View key={i}>
  //     <Text style={styles.textPadding}>{data.city}</Text>
  //   </View>
  // ));
}

const FaqView = () => {
  const faqs = getHelpText();
  const test = Tester();
  console.log('test', test)

  return faqs.map((data, i) => (
    <View key={i}>
      <Text style={styles.textPadding}>{data.city}</Text>
    </View>
  ));
};

const InformationView = () => {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <NoticeTextView />
      <View style={[styles.textContainer, styles.helpFlex]}>
        <Text style={styles.textFaq}>FAQ's</Text>
        {/* <User/> */}
        <SafeAreaView>
          <ScrollView>
            <FaqView />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default InformationView;
