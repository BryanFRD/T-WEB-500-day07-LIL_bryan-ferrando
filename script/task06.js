const footer = document.querySelector("footer");
const div = footer.querySelector("div:first-of-type");
const canvas = footer.querySelector("canvas");
const coords = footer.querySelector("div:last-of-type");
let isDragging = false;

coords.innerText = `New coordinates => {x: 0, y: 0}`;

const limitCoords = (x, y) => {
  const divRect = div.getBoundingClientRect();
  const canvasRect = canvas.getBoundingClientRect();
  const { left, right, top, bottom } = divRect;
  
  return {
    x: (x < left + canvasRect.width ? left + canvasRect.width/2 : x > right - canvasRect.width ? right - canvasRect.width/2 : x) - (left/2 + right/2),
    y: (y < top + canvasRect.height/2 + 2 ? top  + canvasRect.height/2 + 2 : y > bottom - canvasRect.height/2 + 3 ? bottom - canvasRect.height/2 + 3 : y) - (top/2 + bottom/2)
  };
};

canvas.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("mousemove", (event) => {
  if(!isDragging)
    return;
  
  const canvasRect = canvas.getBoundingClientRect();
  
  const offsetX = event.clientX - canvasRect.left + canvasRect.x;
  const offsetY = event.clientY - canvasRect.top + canvasRect.y;
  
  let { x, y } = limitCoords(offsetX, offsetY);
  
  canvas.style.transform = `translate(${x}px, ${y}px)`;
  coords.innerText = `New coordinates => {x: ${parseInt(x)}, y: ${parseInt(y)}}`;
});