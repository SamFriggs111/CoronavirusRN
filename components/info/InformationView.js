import * as React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import { getNoticeText, getHelpText } from "../../api/api.js";
import styles from "./styles";

const NoticeTextView = () => {
  const notice = getNoticeText();
  return (
    <View style={[styles.textContainer, styles.noticeFlex]}>
      <Text style={styles.textNotice}>{notice.Title}</Text>
      <Text style={styles.textPadding}>{notice.Intro}</Text>
      <Text style={styles.textPadding}>{notice.Desc}</Text>
    </View>
  );
};

const FaqView = () => {
  const faqs = getHelpText();
  return faqs.map((data, i) => (
    <View key={i}>
      <Text style={styles.textPadding}>{data.Q}</Text>
      <Text style={styles.textPadding}>{data.Answer}</Text>
    </View>
  ));
};

const InformationView = () => {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <NoticeTextView />
      <View style={[styles.textContainer, styles.helpFlex]}>
        <Text style={styles.textFaq}>FAQ's</Text>
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
