const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div:first-of-type');

button.addEventListener('click', () => {
  if(input.value.length === 0)
    return;
  
  const d = document.createElement('div');
  d.innerText = input.value;
  div.appendChild(d);
  input.value = "";
});