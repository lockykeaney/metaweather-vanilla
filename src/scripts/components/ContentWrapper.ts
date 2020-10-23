const ContentWrapper = () => {
  const appElement: HTMLElement | null = document.getElementById("app");
  const element = document.createElement("div");
  element.setAttribute("id", "content-wrapper");
  appElement?.appendChild(element);
};

export default ContentWrapper;
