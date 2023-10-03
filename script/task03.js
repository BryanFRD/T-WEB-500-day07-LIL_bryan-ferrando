whiteDiv = document.querySelector("footer > div");
let str = "";
document.addEventListener("keydown", (event) => {
  str += event.key;
  whiteDiv.innerText = str.slice(-42);
});