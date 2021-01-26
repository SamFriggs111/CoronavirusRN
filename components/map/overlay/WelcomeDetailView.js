import React from "react";
import { View, Text, Image } from "react-native";
import { styles, welcomeMessage } from "../styles";

const WelcomeDetailView = () => {
  return (
    <View style={styles.innerSlide}>
      <View style={styles.sliders}>
        <Text style={welcomeMessage.slideDesc}>Getting Location</Text>
        <Image
          source={require("./../../../assets/loading.gif")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View style={styles.sliders}>
        <Text style={welcomeMessage.slideDesc}>Retrieving data</Text>
        <Image
          source={require("./../../../assets/loading.gif")}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </View>
  );
};

export default WelcomeDetailView;
