const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const li = document.createElement('li');
  li.innerText = data.get('text');
  li.classList.add(data.get('selector'));
  ul.appendChild(li);
  form.reset();
});