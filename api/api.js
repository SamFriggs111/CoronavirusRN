// This is for when users don't have location enabled so it defaults to a region
export const getDefaultRegion = () => {
  return {
    latitude: 50.72,
    longitude: -1.88,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017
  };
};

// Returns the correct URL for the API call
export const getCoronavirusUrl = location => {
  const site = "https://api.coronavirus.data.gov.uk/v1/data?filters=";
  const params =
    '&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate"}';

  const url = location.areaCode
    ? site + "areaCode=" + location.areaCode + params
    : site + "areaName=" + location.city + params;

  return url;
};

// Returns correct colour for map circles
export const determineLocationColour = todaysData => {
  if (todaysData.newCasesByPublishDate < 50) {
    return "rgba(50, 168, 98, 0.5)";
  } else if (
    todaysData.newCasesByPublishDate >= 50 &&
    todaysData.newCasesByPublishDate <= 150
  ) {
    return "rgba(229, 232, 51, 0.5)";
  } else {
    return "rgba(168, 50, 50, 0.5)";
  }
};
