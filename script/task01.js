const display = document.querySelector('section > p');
const button = document.querySelector('footer > div');
let count = 0;
button.addEventListener('click', () => {
  display.innerText = `You clicked ${++count} times`;
});
