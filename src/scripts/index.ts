import buttonModule from './buttonModule';
import getLocation, { Coords } from './getLocation';
import {fetchWoeid, fetchWeatherWithId, fetchWeatherBySearch } from './metaweather';

const positionWeather = async (): Promise<any> => {
  try {
    const x = await fetchWeatherBySearch('melbourne')
    console.log(x);
    const res =  await getLocation();
    const woeid = await fetchWoeid(res)
    const weather = await fetchWeatherWithId(woeid);
    
    
    return weather
  } catch (err) {
    throw err
  }
}

const app: any = () => {
  positionWeather()
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  app();
} else {
  document.addEventListener("DOMContentLoaded", app);
}
