import { ContentWrapper, CurrentWeather } from "./components";
import store from "./store";

/* 
  main() is an entry function the sets up and creates the application, then get is mounted
  to the DOM. If it can't run, then the app will not run.
*/

const main: any = async () => {
  ContentWrapper();
  const content = document.getElementById("content-wrapper");
  const count = document.createElement("div");

  if (content) {
    count.innerHTML = CurrentWeather();
    content.appendChild(count);

    store.events.subscribe("stateChange", () => {
      // count.innerHTML = CurrentWeather();
      content.appendChild(count);
    });
  }
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
