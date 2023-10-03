const whiteDiv = document.querySelector("footer > div");
const plusButton = whiteDiv.querySelector("button:first-of-type");
const minusButton = whiteDiv.querySelector("button:last-of-type");
const backgroundSelector = whiteDiv.querySelector("select");

plusButton.addEventListener("click", () => {
  let fontSize = parseInt(getComputedStyle(whiteDiv).fontSize);
  document.body.style.fontSize = `${++fontSize}px`;
});

minusButton.addEventListener("click", () => {
  let fontSize = parseInt(getComputedStyle(whiteDiv).fontSize);
  document.body.style.fontSize = `${--fontSize}px`;
});

backgroundSelector.addEventListener("change", () => {
  document.body.style.backgroundColor = backgroundSelector.value;
});