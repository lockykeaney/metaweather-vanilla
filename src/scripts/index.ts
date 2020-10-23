import { CurrentWeather, ContentWrapper } from "./components";

/* 
  main() is an entry function the sets up and creates the application, then get is mounted
  to the DOM. If it can't run, then the app will not run.
*/
const main: any = async () => {
  ContentWrapper();
  const current = CurrentWeather();
  const content = document.getElementById("content-wrapper");
  if (current) {
    content?.appendChild(current);
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
