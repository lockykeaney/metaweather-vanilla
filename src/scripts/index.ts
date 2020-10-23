import getLocation from "./getLocation";
import { fetchWeatherCoordinates } from "./openWeatherMap";
import { CurrentWeather, ContentWrapper } from "./components";

const positionWeather = async (): Promise<any> => {
  try {
    const coordsRes = await getLocation();
    const coords = {
      lat: coordsRes.latitude,
      lon: coordsRes.longitude,
    };
    const weather = await fetchWeatherCoordinates(coords);

    return weather;
  } catch (err) {
    throw err;
  }
};

const currentTempAtLocation = async () => {
  try {
    return await positionWeather();
  } catch (err) {
    console.log(err);
  }
};

/* 
  The entry function the sets up and creates the application, then get is mounted
  to the DOM
*/

const main: any = async () => {
  ContentWrapper();
  const x = await currentTempAtLocation();
  const current = await CurrentWeather(x);
  const content = document.getElementById("content-wrapper");
  content?.appendChild(current);
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
