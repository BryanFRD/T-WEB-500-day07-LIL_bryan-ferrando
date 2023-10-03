const button = document.querySelector('footer > div');
let count = 0;
button.innerText = `You clicked 0 times`;
button.addEventListener('click', () => {
  button.innerText = `You clicked ${++count} times`;
});
