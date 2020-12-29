import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles";

const BeachFeature = (props) => {
  return (
    <View style={styles.features}>
      <FontAwesome5
        style={styles.featureIcon}
        name={props.icon}
        size={15}
        color="black"
      />
      <Text style={styles.featureText}>{props.text}</Text>
    </View>
  );
};

const BeachDetailView = (props) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.slideTitle}>{props.region.title}</Text>
      </View>
      <View style={styles.sliders}></View>
      <View style={styles.warning}>
        <FontAwesome name="circle" size={20} color={props.region.iconColour} />
        <Text style={styles.slideSubtitle}>{props.region.congestion}</Text>
      </View>
      <View style={styles.featureView}>
        <BeachFeature icon="life-ring" text={props.region.lifeguarded} />
        <BeachFeature icon="toilet" text={props.region.toilets} />
        <BeachFeature icon="dog" text={props.region.dogs} />
        <BeachFeature icon="bicycle" text={props.region.cycling} />
        <BeachFeature icon="hotjar" text={props.region.bbq} />
      </View>
    </View>
  );
};

export default BeachDetailView;
