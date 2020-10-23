const CurrentWeather = (weather: any) => {
  const { main } = weather;
  const element = document.createElement("div");
  const heading = document.createElement("h2");
  heading.innerHTML = "Current Temp";
  element.appendChild(heading);
  const temp = document.createTextNode(main.temp);
  element.appendChild(temp);
  return element;
};

export default CurrentWeather;
