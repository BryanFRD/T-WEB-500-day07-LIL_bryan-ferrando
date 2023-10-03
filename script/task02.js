button = document.querySelector('footer > div');
button.addEventListener('click', () => {
  let name = prompt('What\'s your name ?');
  let confirmedName = prompt(`Are you sure that ${name} is your name ?`);
  if(name === confirmedName) {
    button.innerText = `Hello ${name} !`;
    alert(`Hello ${name} !`);
  }
});