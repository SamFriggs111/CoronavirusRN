import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, MaterialIcons, Feather } from "@expo/vector-icons";

// Imports the correct components
import InfoView from "../info/InformationView";
import SearchView from "../search/SearchView";
import MapView from "../map/MapView";

const Tab = createMaterialBottomTabNavigator();

// This is where I can make the tabs. You can see I have 3: Search, Map and Information
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      activeColor="aliceblue"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "aliceblue" }}
    >
      <Tab.Screen
        name="Search"
        component={SearchView} // Assigns the component to the tab
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} /> // Sets the icon
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapView} // Assigns the component to the tab
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <Feather name="map" color={color} size={24} /> // Sets the icon
          )
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoView} // Assigns the component to the tab
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <Entypo name="info-with-circle" color={color} size={22} /> // Sets the icon
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
