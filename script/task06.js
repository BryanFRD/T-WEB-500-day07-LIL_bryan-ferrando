const footer = document.querySelector("footer");
const div = footer.querySelector("div:first-of-type");
const canvas = footer.querySelector("canvas");
const coords = footer.querySelector("div:last-of-type");
let isDragging = false;

const limitCoords = (x, y) => {
  let divRect = div.getBoundingClientRect();
  let { left, right, top, bottom } = divRect;
  
  // add for x and y the half of div size
  
  return {
    x: parseInt((x < left ? left : x > right ? right : x) - (left/2 + right/2)),
    y: parseInt((y < top ? top : y > bottom ? bottom : y) - (top/2 + bottom/2))
  };
}

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
});
document.addEventListener("mousemove", (event) => {
  if(!isDragging)
    return;
  
  let { x, y } = limitCoords(event.clientX, event.clientY);
    
  coords.innerText = `New coordinates => {x: ${x}, y: ${y}}`;
});