import { StyleSheet } from "react-native";

// Necessary styles for information tab
const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 32,
    paddingVertical: 15
  },
  textContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1
  },
  textPadding: {
    paddingTop: 5,
    paddingBottom: 5
  },
  textFaq: {
    marginTop: 50,
    color: "black",
    fontSize: 24
  },
  noticeFlex: {
    flex: 2
  },
  helpFlex: {
    flex: 3
  }
});

export default styles;
