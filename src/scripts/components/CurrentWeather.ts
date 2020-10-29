import store from "../store";
import getLocation from "../getLocation";
import { fetchWeatherCoordinates } from "../openWeatherMap";

const CurrentWeather = (): HTMLElement | null => {
  console.log(store);
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
  positionWeather();

  const componentRender = (state: any) => {
    if (state.isLoading) {
      const p = document.createElement("p");
      p.innerText = "Loading";
      return p;
    }

    const { main, name } = store.state.weather;
    const element = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerHTML = `Current temp in ${name}`;
    element.appendChild(heading);
    const temp = document.createTextNode(main.temp);
    element.appendChild(temp);
    return element;
  };
  let component: any = componentRender(store.state);
  store.events.subscribe("stateChange", () => {
    component = componentRender(store.state);
  });
  return component;
};

export default CurrentWeather;
