const countTemplate = (count: any) => {
  return `
      <div class="content-wrapper">${count}</div>
    `;
};

// app.innerHTML = countTemplate(counter.state.count);
// setInterval(() => {
//   counter.dispatch("incrementCount", null);
//   app.innerHTML = countTemplate(counter.state.count);
// }, 1500);
