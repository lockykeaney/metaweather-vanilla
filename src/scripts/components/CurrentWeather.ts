import store from "../store";
import { fetchWeatherCoordinates, getLocation } from "../services";

const CurrentWeather = (): any => {
  const positionWeather = async (): Promise<any> => {
    try {
      const coordsRes = await getLocation();
      const coords = {
        lat: coordsRes.latitude,
        lon: coordsRes.longitude,
      };
      const res = await fetchWeatherCoordinates(coords);
      store.dispatch("setWeatherData", res);
      store.dispatch("setIsLoading", false);
    } catch (err) {
      throw err;
    }
  };

  // const { isLoading, weatherData } = store.state;

  // const render = () => {
  //   if (isLoading) {
  //     positionWeather();
  //     return `<h1>Loading...</h1>`;
  //   }
  //   return `
  //     <div>
  //       <h2>The Current temp in ${weatherData.name}</h2>
  //       <p>${weatherData.main.temp}</p>
  //     </div>
  //   `;
  // };
  // render();
};

export const template = (props: any) => {
  return `
      <div>
        <h2>The Current temp in ${props.name}</h2>
        <p>${props.main.temp}</p>
      </div>
    `;
};
export default CurrentWeather;
