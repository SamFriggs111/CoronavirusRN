import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
  },
  textPadding: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  textNotice: {
    color: "red",
    fontSize: 24,
  },
  textFaq: {
    marginTop: 50,
    color: "black",
    fontSize: 24,
  },
  congestionView: {
    flexDirection: "row",
    paddingRight: 75,
    paddingLeft: 75,
  },
  congestionText: {
    marginLeft: 15,
  },
  congestionColour: {
    backgroundColor: "white",
  },
  noticeFlex: {
    flex: 2,
  },
  helpFlex: {
    flex: 3,
  },
});

export default styles;
