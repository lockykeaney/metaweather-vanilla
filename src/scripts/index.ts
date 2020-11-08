import store from "./store";
import { fetchWeatherCoordinates, getLocation } from "./services";

/* 
  main() is an entry function the sets up and creates the application, then get is mounted
  to the DOM. If it can't run, then the app will not run.
*/

const template = (props: any) => {
  console.log(props);

  return `
      <div>
        <h2>The Current temp in ${props.name}</h2>
        <p>${props.main.temp}</p>
      </div>
    `;
};

const main: any = async () => {
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

  const app = document.getElementById("app");
  if (app) {
    positionWeather();
    store.events.subscribe("stateChange", () => {
      if (store.state.isLoading) {
        app.innerHTML = `<h1>Loading...</h1>`;
      } else {
        app.innerHTML = template(store.state.weatherData);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", main);
