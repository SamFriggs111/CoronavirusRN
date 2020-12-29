import { StyleSheet, Dimensions } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  slide: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent: "center"
  },
  innerSlide: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 20
  },
  warning: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderTopColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  features: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
    width: 225,
    marginBottom: 8
  },
  featureIcon: {
    width: 20,
    textAlign: "center"
  },
  featureView: {
    marginTop: 10
  },
  featureText: {
    marginLeft: 5,
    fontSize: 10
  },
  slideImage: {
    width: windowWidth * 0.55,
    height: windowHeight * 0.125,
    borderRadius: 5
  },
  slideTitle: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  titleView: {
    justifyContent: "center"
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5
  },
  slideSubtitle: {
    fontSize: 12,
    marginHorizontal: 10
  },
  pagination: {
    position: "absolute",
    bottom: 150,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row"
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2
  },
  paginationDotActive: {
    backgroundColor: "white"
  },
  paginationDotInactive: {
    backgroundColor: "gray"
  },
  carousel: {
    position: "absolute",
    bottom: 160
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  sliders: {
    flexDirection: "row",
    alignItems: "center"
  },
  sliderArrow: {
    margin: 15
  }
});

export const welcomeMessage = StyleSheet.create({
  slideTitle: {
    marginTop: 10,
    fontSize: 20,
    margin: 5,
    textDecorationLine: "underline",
    fontSize: 16
  },
  slideDesc: {
    paddingVertical: 10,
    width: 200,
    textAlign: "center",
    fontSize: 13
  },
  warning: {
    flexDirection: "row",
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderTopColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 30,
    alignItems: "center",
    textAlign: "left",
    marginBottom: 10
  },
  congestionView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
    width: 225,
    marginBottom: 8
  },
  signal: {
    fontSize: 13
  },
  congestionText: {
    marginLeft: 10,
    fontSize: 12
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5
  }
});
