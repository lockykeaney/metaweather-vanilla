import buttonModule from './buttonModule';
import getLocation, { Coords } from './getLocation';
import { fetchWeatherCoordinates } from './openWeatherMap';
import { CurrentWeather } from './components';

const positionWeather = async (): Promise<any> => {
  try {
    const coordsRes =  await getLocation();
    const coords = {
      lat: coordsRes.latitude,
      lon: coordsRes.longitude
    }
    const weather = await fetchWeatherCoordinates(coords)
    return weather
  } catch (err) {
    throw err
  }
}

const app: any = () => {
  const weather = positionWeather()
  CurrentWeather(weather)
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  app();
} else {
  document.addEventListener("DOMContentLoaded", app);
}
