const audio = new Audio('../audio/audio.mp3');

const footer = document.querySelector('footer');
const canvas = footer.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const divButtons = footer.querySelector('div:last-of-type');
const buttonPause = divButtons.querySelector('button:nth-of-type(1)');
const buttonStop = divButtons.querySelector('button:nth-of-type(2)');
const buttonMute = divButtons.querySelector('button:nth-of-type(3)');

canvasContext.beginPath();
canvasContext.moveTo(6, 6);
canvasContext.lineTo(14, 10);
canvasContext.lineTo(6, 14);
canvasContext.closePath();
canvasContext.lineWidth = 1;
canvasContext.strokeStyle = 'white';
canvasContext.stroke();
canvasContext.fillStyle = 'white';
canvasContext.fill();

canvas.addEventListener('click', () => {
  audio.play();
});

buttonPause.addEventListener('click', () => {
  audio.pause();
});

buttonStop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

buttonMute.addEventListener('click', () => {
  audio.muted = !audio.muted;
});