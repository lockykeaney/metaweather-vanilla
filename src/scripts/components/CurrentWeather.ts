import getLocation from "../getLocation";
import { fetchWeatherCoordinates } from "../openWeatherMap";

// const setData =  (obj: any) => {
// 	for (var key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			data[key] = obj[key];
// 		}
// 	}
// };

const CurrentWeather = (): HTMLElement | null => {
  let data = {
    isLoading: true,
    weather: {},
  };
  const positionWeather = async (): Promise<any> => {
    try {
      const coordsRes = await getLocation();
      const coords = {
        lat: coordsRes.latitude,
        lon: coordsRes.longitude,
      };
      const res = await fetchWeatherCoordinates(coords);
      console.log(res);
      data.weather = res;
    } catch (err) {
      throw err;
    }
  };
  positionWeather();

  const component = (weather: any) => {
    const { main, name } = weather;
    const element = document.createElement("div");
    const heading = document.createElement("h2");
    heading.innerHTML = `Current temp in ${name}`;
    element.appendChild(heading);
    const temp = document.createTextNode(main.temp);
    element.appendChild(temp);
    return element;
  };

  //   return component(data);

  if (data.isLoading) {
    const p = document.createElement("p");
    p.innerText = "Loading";
    return p;
  } else {
    return component(data);
  }
};

export default CurrentWeather;
