import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = require("./../../config");
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const Item = ({ title, congestionColour }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <FontAwesome
      style={styles.icons}
      name="circle"
      size={20}
      color={congestionColour}
    />
  </View>
);

const SearchView = ({ navigation }) => {
  const [value, onChangeText] = useState("");
  const [locations, setLocations] = useState(null);
  const [filteredLocationData, filterLocationData] = useState(null);
  const refreshing = false;

  const getLocationData = () => {
    if (!locations) {
      (async () => {
        let output = [];
        await firebase
          .firestore()
          .collection("locations")
          .orderBy("city", "asc")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              output.push(documentSnapshot.data());
            });
            filterLocationData(output);
            setLocations(output);
          });
      })();
    }
  };

  getLocationData();

  const searchFilterFunction = text => {
    onChangeText(text);
    let items = locations;
    let newData = items;

    if (text) {
      newData = items.filter(item => {
        const itemData = item.city.toLowerCase();
        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    }

    filterLocationData(newData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Map", { region: item })}
    >
      <Item title={item.city} congestionColour={item.iconColour} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={text => searchFilterFunction(text)}
        value={value}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredLocationData}
        renderItem={renderItem}
        keyExtractor={item => "item" + item.id}
        refreshing={refreshing}
        onRefresh={() => {
          filterLocationData(filteredLocationData);
        }}
      />
    </SafeAreaView>
  );
};

export default SearchView;
