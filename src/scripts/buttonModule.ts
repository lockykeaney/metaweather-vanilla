const buttonModule = () => {
  let clickMeActive: boolean = false; // create a value for the state of the button. We start it as inactive
  // let means we can reassign the variable on line 10

  const clickMeElem: HTMLElement = document.getElementById("click-me")!; // Search the DOM and find the button. It has an id of "click-min" (note the ! at the end of the line, the value could be null)
  // const cannot be changed once it is set

  clickMeElem.classList.add(clickMeActive ? "_primary" : "_secondary"); // add the class to the button depending on the state at load

  clickMeElem.addEventListener("click", () => {
    clickMeActive = !clickMeActive; // set the state of the button. Adding the ! before a boolean represnts the opposite value. In this case, it sets it to true
    if (clickMeActive) {
      // if the button status is TRUE
      clickMeElem.classList.remove("_primary");
      clickMeElem.classList.add("_secondary");
    } else {
      // if the button status is FALSE
      clickMeElem.classList.remove("_secondary");
      clickMeElem.classList.add("_primary");
    }
  });
};

export default buttonModule;
