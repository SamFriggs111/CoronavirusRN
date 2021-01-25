const noticeText = {
  Title: "Notice:",
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
};

const helpText = [
  {
    Q: "1. How often is the App updated?",
    Answer:
      "As a minimum, the congestion status of each beach is updated three times per day at approximately 9am, 1pm and 5pm. The Seafront Ranger Team will update the congestion statuses throughout the day, with more frequent updates when required. The ‘Last update’ and ‘Next update’ times can be found at the top of the home page under the ‘Notice’ section."
  },
  {
    Q: "2. Will the App be extended to cover other beaches in the UK?",
    Answer:
      "Not at present, but it could be. Contact your Local Authority and tell them about our BCP Beach Check App. We would be happy to help them."
  },
  {
    Q: "3. Will the App be extended to cover other beaches in the UK?",
    Answer:
      "Not at present, but it could be. Contact your Local Authority and tell them about our BCP Beach Check App. We would be happy to help them."
  },
  {
    Q: "4. What does the congestion status tell me?",
    Answer:
      "The congestion status reflects how busy each of our 24 sections of beach are. It considers the busyness of the zig zags, footpaths, promenades and the beach itself. We are working to include car park availability also."
  },
  {
    Q: "5. Does the App collect my personal details?",
    Answer:
      "No, it does not. The App does not ask for any personal details at any time. It does not track your location and does not require any contact details when using the feedback function."
  },
  {
    Q: "6. Why does the App show crowded beaches in the evening and at night?",
    Answer:
      "The last daily update of the App takes place at approximately 5pm every day. This reflects the congestion at the time of the last update. The App will be next updated the following morning at approximately 9am."
  }
];

const warnings = [
  { id: 1, colour: "#c21010", text: "Avoid at all costs" },
  { id: 2, colour: "#fff429", text: "Congested, stay alert" },
  { id: 3, colour: "#0fd118", text: "Low congestion" }
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
      { name: "middleTop", latitude: 50.687437, longitude: -1.939664 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 2,
    title: "Shore Road Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.692025, longitude: -1.933362 },
      { name: "bottomLeft", latitude: 50.691848, longitude: -1.932911 },
      { name: "bottomRight", latitude: 50.698219, longitude: -1.923943 },
      { name: "topRight", latitude: 50.698389, longitude: -1.924319 }
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
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 3,
    title: "Canford Cliffs Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.698389, longitude: -1.924319 },
      { name: "bottomLeft", latitude: 50.698219, longitude: -1.923943 },
      { name: "bottomRight", latitude: 50.704329, longitude: -1.913027 },
      { name: "topRight", latitude: 50.704519, longitude: -1.913375 },
      { name: "middleTop", latitude: 50.701721, longitude: -1.91912 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 4,
    title: "Branksome Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.704519, longitude: -1.913375 },
      { name: "bottomLeft", latitude: 50.704329, longitude: -1.913027 },
      { name: "bottomRight", latitude: 50.707354, longitude: -1.906306 },
      { name: "topRight", latitude: 50.70766, longitude: -1.906429 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 5,
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70766, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899438 }
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
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 6,
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709999, longitude: -1.899438 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 7,
    title: "Middle Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.711806, longitude: -1.893869 },
      { name: "bottomLeft", latitude: 50.711558, longitude: -1.893613 },
      { name: "bottomRight", latitude: 50.712605, longitude: -1.890202 },
      { name: "topRight", latitude: 50.71289, longitude: -1.890403 }
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
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 8,
    title: "Durley Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.71289, longitude: -1.890403 },
      { name: "bottomLeft", latitude: 50.712605, longitude: -1.890202 },
      { name: "bottomRight", latitude: 50.713961, longitude: -1.883971 },
      { name: "topRight", latitude: 50.714348, longitude: -1.88425 }
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
    bbq: "BBQs: Permitted"
  },
  {
    id: 9,
    title: "Bournemouth Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.714348, longitude: -1.88425 },
      { name: "bottomLeft", latitude: 50.713961, longitude: -1.883971 },
      { name: "bottomRight", latitude: 50.715626, longitude: -1.875517 },
      { name: "topRight", latitude: 50.715949, longitude: -1.875681 }
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
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 10,
    title: "Bournemouth Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.715949, longitude: -1.875681 },
      { name: "bottomLeft", latitude: 50.715626, longitude: -1.875517 },
      { name: "bottomRight", latitude: 50.716917, longitude: -1.868381 },
      { name: "topRight", latitude: 50.717216, longitude: -1.868456 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 11,
    title: "East Cliff",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717216, longitude: -1.868456 },
      { name: "bottomLeft", latitude: 50.716917, longitude: -1.868381 },
      { name: "bottomRight", latitude: 50.717542, longitude: -1.863511 },
      { name: "topRight", latitude: 50.717844, longitude: -1.863618 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 12,
    title: "Boscombe Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717844, longitude: -1.863618 },
      { name: "bottomLeft", latitude: 50.717542, longitude: -1.863511 },
      { name: "bottomRight", latitude: 50.718916, longitude: -1.851067 },
      { name: "topRight", latitude: 50.719235, longitude: -1.851099 }
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
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 13,
    title: "Boscombe Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.719235, longitude: -1.851099 },
      { name: "bottomLeft", latitude: 50.718916, longitude: -1.851067 },
      { name: "bottomRight", latitude: 50.720073, longitude: -1.83492 },
      { name: "topRight", latitude: 50.720468, longitude: -1.834999 }
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
    bbq: "BBQs: After 6PM only"
  }
];

const gbData = [
  { city: "London", lat: "51.5072", lng: "-0.1275" },
  { city: "Birmingham", lat: "52.4800", lng: "-1.9025" },
  { city: "Manchester", lat: "53.4794", lng: "-2.2453" },
  { city: "Leeds", lat: "53.7997", lng: "-1.5492" },
  { city: "Portsmouth", lat: "50.8058", lng: "-1.0872" },
  { city: "Liverpool", lat: "53.4000", lng: "-2.9833" },
  { city: "Nottingham", lat: "52.9500", lng: "-1.1500" },
  { city: "Southampton", lat: "50.9000", lng: "-1.4000" },
  { city: "Sheffield", lat: "53.3833", lng: "-1.4667" },
  { city: "Leicester", lat: "52.6333", lng: "-1.1333" },
  { city: "Coventry", lat: "52.4081", lng: "-1.5106" },
  { city: "Stoke-on-Trent", lat: "53.0000", lng: "-2.1833" },
  { city: "Derby", lat: "52.9167", lng: "-1.4667" },
  { city: "Belfast", lat: "54.5964", lng: "-5.9300" },
  { city: "Reading", lat: "51.4542", lng: "-0.9731" },
  { city: "Plymouth", lat: "50.3714", lng: "-4.1422" },
  { city: "Wolverhampton", lat: "52.5833", lng: "-2.1333" },
  { city: "Milton Keynes", lat: "52.0400", lng: "-0.7600" },
  { city: "Luton", lat: "51.8783", lng: "-0.4147" },
  { city: "Norwich", lat: "52.6300", lng: "1.2970" },
  { city: "Islington", lat: "51.5440", lng: "-0.1027" },
  { city: "Croydon", lat: "51.3727", lng: "-0.1099" },
  { city: "Basildon", lat: "51.5761", lng: "0.4886" },
  { city: "Swindon", lat: "51.5600", lng: "-1.7800" },
  { city: "Ipswich", lat: "52.0594", lng: "1.1556" },
  { city: "Worthing", lat: "50.8147", lng: "-0.3714" },
  { city: "Sunderland", lat: "54.9061", lng: "-1.3811" },
  { city: "Middlesbrough", lat: "54.5767", lng: "-1.2355" },
  { city: "Warrington", lat: "53.3917", lng: "-2.5972" },
  { city: "Slough", lat: "51.5100", lng: "-0.5900" },
  { city: "Oxford", lat: "51.7519", lng: "-1.2578" },
  { city: "York", lat: "53.9583", lng: "-1.0803" },
  { city: "Harrow", lat: "51.5836", lng: "-0.3464" },
  { city: "Blackpool", lat: "53.8142", lng: "-3.0503" },
  { city: "Enfield", lat: "51.6522", lng: "-0.0808" },
  { city: "Bolton", lat: "53.5780", lng: "-2.4290" },
  { city: "Newport", lat: "51.5833", lng: "-3.0000" },
  { city: "Exeter", lat: "50.7167", lng: "-3.5333" },
  { city: "Solihull", lat: "52.4130", lng: "-1.7780" },
  { city: "Gateshead", lat: "54.9500", lng: "-1.6000" },
  { city: "Preston", lat: "53.7590", lng: "-2.6990" },
  { city: "Cheltenham", lat: "51.9000", lng: "-2.0667" },
  { city: "Colchester", lat: "51.8917", lng: "0.9030" },
  { city: "Chelmsford", lat: "51.7361", lng: "0.4798" },
  { city: "Maidstone", lat: "51.2720", lng: "0.5290" },
  { city: "Doncaster", lat: "53.5150", lng: "-1.1330" },
  { city: "Rotherham", lat: "53.4300", lng: "-1.3570" },
  { city: "Crawley", lat: "51.1092", lng: "-0.1872" },
  { city: "Bedford", lat: "52.1350", lng: "-0.4700" },
  { city: "Rochdale", lat: "53.6136", lng: "-2.1610" },
  { city: "Mansfield", lat: "53.1500", lng: "-1.2000" },
  { city: "Stockport", lat: "53.4083", lng: "-2.1494" },
  { city: "Darlington", lat: "54.5270", lng: "-1.5526" },
  { city: "Salford", lat: "53.4830", lng: "-2.2931" },
  { city: "Eastbourne", lat: "50.7700", lng: "0.2800" },
  { city: "Wigan", lat: "53.5448", lng: "-2.6318" },
  { city: "Worcester", lat: "52.1920", lng: "-2.2200" },
  { city: "Wakefield", lat: "53.6800", lng: "-1.4900" },
  { city: "Hounslow", lat: "51.4668", lng: "-0.3750" },
  { city: "Lincoln", lat: "53.2344", lng: "-0.5386" },
  { city: "Oldham", lat: "53.5444", lng: "-2.1169" },
  { city: "Watford", lat: "51.6550", lng: "-0.3957" },
  { city: "Kettering", lat: "52.3931", lng: "-0.7229" },
  { city: "Hastings", lat: "50.8500", lng: "0.5700" },
  { city: "Hartlepool", lat: "54.6900", lng: "-1.2100" },
  { city: "Barnsley", lat: "53.5537", lng: "-1.4791" },
  { city: "Bromley", lat: "51.4070", lng: "0.0210" },
  { city: "Stockton-on-Tees", lat: "54.5700", lng: "-1.3200" },
  { city: "Ealing", lat: "51.5175", lng: "-0.2988" },
  { city: "Redditch", lat: "52.3069", lng: "-1.9492" },
  { city: "Dudley", lat: "52.5080", lng: "-2.0890" },
  { city: "Bury", lat: "53.5930", lng: "-2.2980" },
  { city: "Guildford", lat: "51.2365", lng: "-0.5703" },
  { city: "Carlisle", lat: "54.8910", lng: "-2.9440" },
  { city: "Ashford", lat: "51.1465", lng: "0.8676" },
  { city: "Burnley", lat: "53.7890", lng: "-2.2480" },
  { city: "Harrogate", lat: "53.9919", lng: "-1.5378" },
  { city: "Gosport", lat: "50.7948", lng: "-1.1243" },
  { city: "Rugby", lat: "52.3700", lng: "-1.2600" },
  { city: "Stafford", lat: "52.8066", lng: "-2.1171" },
  { city: "Walsall", lat: "52.5800", lng: "-1.9800" },
  { city: "Woking", lat: "51.3162", lng: "-0.5610" },
  { city: "Scarborough", lat: "54.2773", lng: "-0.4017" },
  { city: "Wandsworth", lat: "51.4550", lng: "-0.1920" },
  { city: "Corby", lat: "52.4914", lng: "-0.6965" },
  { city: "Canterbury", lat: "51.2800", lng: "1.0800" },
  { city: "Brentwood", lat: "51.6204", lng: "0.3050" },
  { city: "Braintree", lat: "51.8780", lng: "0.5500" },
  { city: "Lancaster", lat: "54.0470", lng: "-2.8010" },
  { city: "Horsham", lat: "51.0620", lng: "-0.3250" },
  { city: "Wellingborough", lat: "52.2939", lng: "-0.6964" },
  { city: "Barnet", lat: "51.6444", lng: "-0.1997" },
  { city: "Wokingham", lat: "51.4100", lng: "-0.8400" }
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
  return beachData;
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

export const getHelpText = () => {
  return gbData;
};

export const getCongestion = () => {
  if (typeof warnings !== "undefined") return warnings;
};
