import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 24
  },
  searchBar: {
    marginBottom: 5
  },
  icons: {
    position: "absolute",
    right: 10
  }
});

export default styles;
