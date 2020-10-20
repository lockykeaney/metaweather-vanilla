console.log("hello world!");

import buttonModule from './buttonModule';
import getLocation from './getLocation';



const app: any = () => {
  const coords = getLocation()
  console.log(coords);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  app();
} else {
  document.addEventListener("DOMContentLoaded", app);
}
