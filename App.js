// Imports the correct components
import * as React from "react";
import { Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/navigation/Tabs";
import styles from "./components/navigation/styles";

// This is the launch file that builds the application
export default function App() {
  return (
    // Navigation container which makes the tabs and header
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor="dodgerblue" />
      <View style={styles.menu}>
        <Text style={styles.title}>Coronavirus Statistics</Text>
      </View>
      <Tabs />
    </NavigationContainer>
  );
}
