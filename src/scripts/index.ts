import buttonModule from "./buttonModule";
import { CurrentWeather, ContentWrapper } from "./components";
import store from "./store";
/* 
  main() is an entry function the sets up and creates the application, then get is mounted
  to the DOM. If it can't run, then the app will not run.
*/
const main: any = async () => {
  ContentWrapper();
  // const current = CurrentWeather();
  const content = document.getElementById("content-wrapper");

  // if (current) {
  //   content?.appendChild(current); if
  if (content) {
    const btn = document.createElement("button");
    btn.innerText = "increment";
    btn.addEventListener("click", () => {
      store.dispatch("incrementCount", null);
    });
    content.appendChild(btn);

    const count = document.createElement("div");
    count.innerText = store.state.count;
    content.appendChild(count);
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
