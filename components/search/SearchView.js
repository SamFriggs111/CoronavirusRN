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
import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = require("./../../config");
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const getLocationsData = async () => {
  let output = [];
  await firebase
    .firestore()
    .collection("locations")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        output.push(documentSnapshot.data());
      });
    });
  // console.log(output);
  return output;
};

const Item = ({ title, congestionColour }) => (
  console.log(title),
  (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <FontAwesome
        style={styles.icons}
        name="circle"
        size={20}
        color={congestionColour}
      />
    </View>
  )
);

const SearchView = ({ navigation }) => {
  const [value, onChangeText] = useState("");
  const [data, setBeachData] = useState({ title: "title" });
  console.log(data);
  const refreshing = false;

  const searchFilterFunction = text => {
    onChangeText(text);
    items = getLocationsData();
    let newData = items;

    if (text) {
      newData = items.filter(item => {
        const itemData = item.title.toLowerCase();
        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    }

    setBeachData(newData);
  };

  const renderItem = ({ item }) => (
    console.log(item),
    (
      <TouchableOpacity
        onPress={() => navigation.navigate("Map", { region: item })}
      >
        <Item title={item.title} congestionColour={item.iconColour} />
      </TouchableOpacity>
    )
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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => "item" + item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setBeachData(getLocationsData());
        }}
      />
    </SafeAreaView>
  );
};

export default SearchView;
