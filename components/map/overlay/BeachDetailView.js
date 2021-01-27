import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles";

const BeachFeature = props => {
  return (
    <View style={styles.features}>
      {/* <FontAwesome5
        style={styles.featureIcon}
        name={props.icon}
        size={15}
        color="black"
      /> */}
      <Text style={styles.featureText}>
        {props.text}
        {props.detail ? props.detail : "No data"}
      </Text>
    </View>
  );
};

const BeachDetailView = props => {
  console.log(props.location);
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.slideTitle}>{props.location.areaName}</Text>
      </View>
      <View style={styles.sliders}></View>
      {/* <View style={styles.warning}>
        <FontAwesome
          name="circle"
          size={20}
          color={props.location.iconColour}
        />
        <Text style={styles.slideSubtitle}>{props.location.congestion}</Text>
      </View> */}
      <View style={styles.featureView}>
        <BeachFeature
          icon="toilet"
          text="Total cases in last 28 days: "
          detail={props.location.cumCasesByPublishDate}
          colour="green"
        />
        <BeachFeature
          icon="skull"
          text="Total deaths in last 28 days: "
          detail={props.location.cumDeaths28DaysByDeathDate}
        />
        <BeachFeature
          icon="dog"
          text="New cases: "
          detail={props.location.newCasesByPublishDate}
        />
        <BeachFeature
          icon="skull"
          text="New deaths: "
          detail={props.location.newDeaths28DaysByDeathDate}
        />
      </View>
    </View>
  );
};

export default BeachDetailView;
