import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, MaterialIcons, Feather } from "@expo/vector-icons";

import InfoView from "../info/InformationView";
import SearchView from "../search/SearchView";
import MapView from "../map/MapView";

const Tab = createMaterialBottomTabNavigator();

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
        component={SearchView}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapView}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <Feather name="map" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoView}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <Entypo name="info-with-circle" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
