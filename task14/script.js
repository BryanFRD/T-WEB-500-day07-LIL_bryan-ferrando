const form = document.querySelector('form:first-of-type');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const li = document.createElement('li');
  li.innerText = data.get('text');
  li.classList.add(data.get('selector'));
  li.dataset.data = data.get('selector');
  elementList.appendChild(li);
  form.reset();
});

const form2 = document.querySelector('form:last-of-type');
const buttonSearch = form2.querySelector('button:first-of-type');
const buttonReset = form2.querySelector('button:last-of-type');

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const optionsLi = document.querySelectorAll('.dropdown-check-list:first-of-type ul li');
  const whitelistOptions = [];
  const blacklistOptions = [];
  
  for(let li of optionsLi){
    if(li.dataset.wob == 'whitelist'){
      whitelistOptions.push(li.dataset.options);
    } else if(li.dataset.wob == 'blacklist'){
      blacklistOptions.push(li.dataset.options);
    }
  }
  
  const data = new FormData(form2);
  for(li of elementList.children) {
    console.log(li.dataset)
    if((whitelistOptions.length > 0 && !whitelistOptions.includes(li.dataset.data)) || (blacklistOptions.length > 0 && blacklistOptions.includes(li.dataset.data)) || !li.innerText.includes(data.get('search'))) {
      li.style.display = 'none';
    } else {
      li.style.display = 'list-item';
    }
  }
});

buttonReset.addEventListener('click', (event) => {
  event.preventDefault();
  for(li of elementList.children) {
    li.style.display = 'list-item';
  }
});

const checkList = document.querySelectorAll('.dropdown-check-list');
for(let elt of checkList){
  elt.querySelector('.anchor').addEventListener('click', () => elt.classList.toggle('visible'));
}

const wob = (event) => {
  let li = event.currentTarget;
  li.classList.remove('whitelist', 'blacklist');
  if(li.dataset.wob == 'whitelist'){
    li.dataset.wob = 'blacklist';
  } else if(li.dataset.wob == 'blacklist'){
    li.dataset.wob = '';
  } else {
    li.dataset.wob = 'whitelist';
  }
  li.classList.add(li.dataset.wob);
}

const uls = document.querySelectorAll('.dropdown-check-list:first-of-type ul li');
for(let child of uls){
  child.addEventListener('click', wob);
}