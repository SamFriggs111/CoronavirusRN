import * as React from "react";
import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Tabs from "./components/navigation/Tabs";
import styles from "./components/navigation/styles";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor="dodgerblue" />
      <View style={styles.menu}>
        <Text style={styles.title}>Coronavirus Statistics</Text>
      </View>
      <Tabs />
    </NavigationContainer>
  );
}
