const button = document.querySelector('footer > div');
let count = 0;
button.addEventListener('click', () => {
  button.innerText = `You clicked ${++count} times`;
});
