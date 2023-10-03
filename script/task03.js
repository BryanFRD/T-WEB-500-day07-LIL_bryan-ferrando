whiteDiv = document.querySelector("footer > div");
let str = "";
document.addEventListener("keypress", (event) => {
  str = str.slice(-41) + event.key;
  whiteDiv.innerText = str;
});