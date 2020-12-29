import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getCongestion, getWelcomeData } from "../../../api/api";
import { styles, welcomeMessage } from "../styles";

const CongestionTextView = () => {
  const congestion = getCongestion();
  return congestion.map((warning) => (
    <View
      key={warning.id}
      style={[welcomeMessage.congestionView, welcomeMessage.textPadding]}
    >
      <FontAwesome name="circle" size={20} color={warning.colour} />
      <Text style={[welcomeMessage.textPadding, welcomeMessage.congestionText]}>
        {warning.text}
      </Text>
    </View>
  ));
};

const WelcomeDetailView = () => {
  const welcomeData = getWelcomeData();
  return (
    <View style={styles.innerSlide}>
      <View style={styles.titleView}>
        <Text style={welcomeMessage.slideTitle}>{welcomeData[0]}</Text>
      </View>
      <View style={styles.sliders}>
        <Text style={welcomeMessage.slideDesc}>{welcomeData[1]}</Text>
      </View>
      <View style={welcomeMessage.warning}>
        <Text style={welcomeMessage.signal}>{welcomeData[2]}</Text>
      </View>
      <CongestionTextView />
    </View>
  );
};

export default WelcomeDetailView;
