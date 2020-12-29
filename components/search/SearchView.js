import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { getBeachData } from "../../api/api";
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
  let items = getBeachData(true);
  const [value, onChangeText] = useState("");
  const [data, setBeachData] = useState(items);
  const refreshing = false;

  const searchFilterFunction = (text) => {
    onChangeText(text);
    items = getBeachData();
    let newData = items;

    if (text) {
      newData = items.filter((item) => {
        const itemData = item.title.toLowerCase();
        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    }

    setBeachData(newData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Map", { region: item })}
    >
      <Item title={item.title} congestionColour={item.iconColour} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => searchFilterFunction(text)}
        value={value}
        style={styles.searchBar}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => "item" + item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setBeachData(getBeachData());
        }}
      />
    </SafeAreaView>
  );
};

export default SearchView;
