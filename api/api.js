const noticeText = {
  Title: "Notice:",
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021",
};

const helpText = [
  {
    Q: "1. How often is the App updated?",
    Answer:
      "As a minimum, the congestion status of each beach is updated three times per day at approximately 9am, 1pm and 5pm. The Seafront Ranger Team will update the congestion statuses throughout the day, with more frequent updates when required. The ‘Last update’ and ‘Next update’ times can be found at the top of the home page under the ‘Notice’ section.",
  },
  {
    Q: "2. Will the App be extended to cover other beaches in the UK?",
    Answer:
      "Not at present, but it could be. Contact your Local Authority and tell them about our BCP Beach Check App. We would be happy to help them.",
  },
  {
    Q: "3. Will the App be extended to cover other beaches in the UK?",
    Answer:
      "Not at present, but it could be. Contact your Local Authority and tell them about our BCP Beach Check App. We would be happy to help them.",
  },
  {
    Q: "4. What does the congestion status tell me?",
    Answer:
      "The congestion status reflects how busy each of our 24 sections of beach are. It considers the busyness of the zig zags, footpaths, promenades and the beach itself. We are working to include car park availability also.",
  },
  {
    Q: "5. Does the App collect my personal details?",
    Answer:
      "No, it does not. The App does not ask for any personal details at any time. It does not track your location and does not require any contact details when using the feedback function.",
  },
  {
    Q: "6. Why does the App show crowded beaches in the evening and at night?",
    Answer:
      "The last daily update of the App takes place at approximately 5pm every day. This reflects the congestion at the time of the last update. The App will be next updated the following morning at approximately 9am.",
  },
];

const warnings = [
  { id: 1, colour: "#c21010", text: "Avoid at all costs" },
  { id: 2, colour: "#fff429", text: "Congested, stay alert" },
  { id: 3, colour: "#0fd118", text: "Low congestion" },
];

const beachData = [
  {
    id: 1,
    title: "Sandbanks Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.684458, longitude: -1.943336 },
      { name: "bottomLeft", latitude: 50.684172, longitude: -1.942885 },
      { name: "middleBottom", latitude: 50.686721, longitude: -1.938336 },
      { name: "bottomRight", latitude: 50.691848, longitude: -1.932911 },
      { name: "topRight", latitude: 50.692025, longitude: -1.933362 },
      { name: "middleTop", latitude: 50.687437, longitude: -1.939664 },
    ],
    latitude: 50.684374,
    longitude: -1.93533,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 2,
    title: "Shore Road Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.692025, longitude: -1.933362 },
      { name: "bottomLeft", latitude: 50.691848, longitude: -1.932911 },
      { name: "bottomRight", latitude: 50.698219, longitude: -1.923943 },
      { name: "topRight", latitude: 50.698389, longitude: -1.924319 },
    ],
    latitude: 50.691949,
    longitude: -1.926466,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only",
  },
  {
    id: 3,
    title: "Canford Cliffs Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.698389, longitude: -1.924319 },
      { name: "bottomLeft", latitude: 50.698219, longitude: -1.923943 },
      { name: "bottomRight", latitude: 50.704329, longitude: -1.913027 },
      { name: "topRight", latitude: 50.704519, longitude: -1.913375 },
      { name: "middleTop", latitude: 50.701721, longitude: -1.91912 },
    ],
    latitude: 50.699198,
    longitude: -1.916598,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 4,
    title: "Branksome Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.704519, longitude: -1.913375 },
      { name: "bottomLeft", latitude: 50.704329, longitude: -1.913027 },
      { name: "bottomRight", latitude: 50.707354, longitude: -1.906306 },
      { name: "topRight", latitude: 50.70766, longitude: -1.906429 },
    ],
    latitude: 50.703257,
    longitude: -1.908429,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 5,
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70766, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899438 },
    ],
    latitude: 50.7061,
    longitude: -1.902826,

    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only",
  },
  {
    id: 6,
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709999, longitude: -1.899438 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 },
    ],
    latitude: 50.708538,
    longitude: -1.895851,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 7,
    title: "Middle Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.711806, longitude: -1.893869 },
      { name: "bottomLeft", latitude: 50.711558, longitude: -1.893613 },
      { name: "bottomRight", latitude: 50.712605, longitude: -1.890202 },
      { name: "topRight", latitude: 50.71289, longitude: -1.890403 },
    ],
    latitude: 50.710574,
    longitude: -1.890481,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only",
  },
  {
    id: 8,
    title: "Durley Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.71289, longitude: -1.890403 },
      { name: "bottomLeft", latitude: 50.712605, longitude: -1.890202 },
      { name: "bottomRight", latitude: 50.713961, longitude: -1.883971 },
      { name: "topRight", latitude: 50.714348, longitude: -1.88425 },
    ],
    latitude: 50.712379,
    longitude: -1.88556,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted",
  },
  {
    id: 9,
    title: "Bournemouth Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.714348, longitude: -1.88425 },
      { name: "bottomLeft", latitude: 50.713961, longitude: -1.883971 },
      { name: "bottomRight", latitude: 50.715626, longitude: -1.875517 },
      { name: "topRight", latitude: 50.715949, longitude: -1.875681 },
    ],
    latitude: 50.712309,
    longitude: -1.879122,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only",
  },
  {
    id: 10,
    title: "Bournemouth Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.715949, longitude: -1.875681 },
      { name: "bottomLeft", latitude: 50.715626, longitude: -1.875517 },
      { name: "bottomRight", latitude: 50.716917, longitude: -1.868381 },
      { name: "topRight", latitude: 50.717216, longitude: -1.868456 },
    ],
    latitude: 50.71391,
    longitude: -1.87043,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 11,
    title: "East Cliff",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717216, longitude: -1.868456 },
      { name: "bottomLeft", latitude: 50.716917, longitude: -1.868381 },
      { name: "bottomRight", latitude: 50.717542, longitude: -1.863511 },
      { name: "topRight", latitude: 50.717844, longitude: -1.863618 },
    ],
    latitude: 50.716129,
    longitude: -1.864576,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 12,
    title: "Boscombe Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717844, longitude: -1.863618 },
      { name: "bottomLeft", latitude: 50.717542, longitude: -1.863511 },
      { name: "bottomRight", latitude: 50.718916, longitude: -1.851067 },
      { name: "topRight", latitude: 50.719235, longitude: -1.851099 },
    ],
    latitude: 50.716195,
    longitude: -1.85691,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only",
  },
  {
    id: 13,
    title: "Boscombe Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.719235, longitude: -1.851099 },
      { name: "bottomLeft", latitude: 50.718916, longitude: -1.851067 },
      { name: "bottomRight", latitude: 50.720073, longitude: -1.83492 },
      { name: "topRight", latitude: 50.720468, longitude: -1.834999 },
    ],
    latitude: 50.715191,
    longitude: -1.842264,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only",
  },
];

const welcomeCard = [
  "Welcome to the south coast",
  "Simply interact with a beach of your choice to view congestion",
  "Congestion signals",
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.711602,
    longitude: -1.874435,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017,
  };
};

export const getBeachData = () => {
  return beachData;
};

export const getWelcomeData = () => {
  return welcomeCard;
};

export const getNoticeText = () => {
  if (typeof noticeText !== "undefined") return noticeText;
  else
    return {
      Intro: "No notices at this time",
      Desc: "All updates will be displayed here",
    };
};

export const getHelpText = () => {
  if (typeof helpText !== "undefined") return helpText;
  else return "No advice at this time";
};

export const getCongestion = () => {
  if (typeof warnings !== "undefined") return warnings;
};
