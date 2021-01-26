const noticeText = {
  Title: "Notice:",
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
};

const warnings = [
  { id: 1, colour: "#c21010", text: "Avoid at all costs" },
  { id: 2, colour: "#fff429", text: "Congested, stay alert" },
  { id: 3, colour: "#0fd118", text: "Low congestion" }
];

const welcomeCard = [
  "Welcome to the south coast",
  "Simply interact with a beach of your choice to view congestion",
  "Congestion signals"
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.711602,
    longitude: -1.874435,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017
  };
};

export const getBeachData = () => {
  return null;
};

export const getWelcomeData = () => {
  return welcomeCard;
};

export const Tester = () => {
  const test = getApiData();
  return test;
};

async function getApiData() {
  let response = await fetch("http://samfriggens.me.uk/getCityLocations");
  let data = await response.json();
  console.log("js data", data);
  return data;
}

export const getNoticeText = () => {
  if (typeof noticeText !== "undefined") return noticeText;
  else
    return {
      Intro: "No notices at this time",
      Desc: "All updates will be displayed here"
    };
};
