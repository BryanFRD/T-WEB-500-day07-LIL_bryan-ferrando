const form = document.querySelector('form:first-of-type');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const li = document.createElement('li');
  li.innerText = data.get('text');
  li.classList.add(data.get('selector'));
  li.dataset.data = data.get('selector');
  ul.appendChild(li);
  form.reset();
});

const form2 = document.querySelector('form:last-of-type');
const buttonSearch = form2.querySelector('button:first-of-type');
const buttonReset = form2.querySelector('button:last-of-type');

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const data = new FormData(form2);
  for(li of ul.children) {
    if(li.dataset.data !== data.get('selector')) {
      li.style.display = 'none';
    }
  }
});

buttonReset.addEventListener('click', (event) => {
  event.preventDefault();
  for(li of ul.children) {
    li.style.display = 'list-item';
  }
});