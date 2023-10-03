button = document.querySelector('footer > div');
button.addEventListener('click', () => {
  let name = prompt('What\'s your name ?');
  let confirmation = confirm(`Are you sure that ${name} is your name ?`);
  if(confirmation) {
    button.innerText = `Hello ${name} !`;
    alert(`Hello ${name} !`);
  }
});