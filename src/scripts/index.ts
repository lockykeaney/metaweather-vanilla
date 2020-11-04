import { ContentWrapper } from "./components";
import counter from "./state/counter";

/* 
  main() is an entry function the sets up and creates the application, then get is mounted
  to the DOM. If it can't run, then the app will not run.
*/

const renderCount = (count: number) => {
  console.log(count);

  return `<div>${count}</div>`;
};
const main: any = async () => {
  ContentWrapper();
  const content = document.getElementById("content-wrapper");
  const count = document.createElement("div");

  count.innerText = renderCount(counter.state.count);

  if (content) {
    const btn = document.createElement("button");
    btn.innerText = "increment";
    btn.addEventListener("click", () => {
      console.log("click");
      counter.dispatch("incrementCount", null);

      count.innerText = renderCount(counter.state.count);
    });
    content.appendChild(btn);
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
