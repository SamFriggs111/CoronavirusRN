import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

// Renders a detail pulled from the API
const LocationFeature = props => {
  return (
    <View style={styles.features}>
      <Text style={styles.featureText}>
        {props.text}
        {props.detail ? props.detail : 0}
      </Text>
    </View>
  );
};

// Renders the location detail overlay - It is passed props from MapView
const LocationDetailView = props => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.slideTitle}>{props.location.city}</Text>
      </View>
      <View style={styles.featureView}>
        <LocationFeature
          text="Total cases in last 28 days: "
          detail={props.location.cumCasesByPublishDate} // Passes data as a prop
        />
        <LocationFeature
          text="Total deaths in last 28 days: "
          detail={props.location.cumDeaths28DaysByDeathDate} // Passes data as a prop
        />
        <LocationFeature
          text="New cases: "
          detail={props.location.newCasesByPublishDate} // Passes data as a prop
        />
        <LocationFeature
          text="New deaths: "
          detail={props.location.newDeaths28DaysByDeathDate} // Passes data as a prop
        />
      </View>
    </View>
  );
};

export default LocationDetailView;
