const form = document.querySelector('form:first-of-type');
const addTagButton = form.querySelector('button:first-of-type');
const addTagInput = form.querySelector('input:last-of-type');
let tempTags = [];
let diffTags = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const li = document.createElement('li');
  const liContainer = document.createElement('div');
  liContainer.classList.add('li-container');
  const nameSpan = document.createElement('span');
  nameSpan.innerText = data.get('text');
  liContainer.appendChild(nameSpan);
  li.classList.add(data.get('selector'));
  li.dataset.data = data.get('selector');
  
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags')
  for(let tag of tempTags){
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('tag');
    const tagSpan = document.createElement('span');
    tagSpan.innerText = tag;
    const tagButton = document.createElement('button');
    tagButton.innerText = 'x';
    tagButton.addEventListener('click', () => {
      tagSpan.remove();
      tempTags = tempTags.filter((tag) => tag !== tagSpan.innerText);
    });
    tagDiv.appendChild(tagSpan);
    tagDiv.appendChild(tagButton);
    tagsDiv.appendChild(tagDiv);
  }
  
  li.dataset.tags = tempTags;
  liContainer.appendChild(tagsDiv);
  li.appendChild(liContainer);
  elementList.appendChild(li);
  form.reset();
  tempTagsDiv.innerHTML = '';
  tempTags = [];
  refreshDiffTags();
});

addTagButton.addEventListener('click', () => {
  if(form.querySelector('input:last-of-type').value !== '') {
    tempTags.push(addTagInput.value);
    const tempTagDiv = document.createElement('div');
    tempTagDiv.classList.add('tag');
    const tempTagSpan = document.createElement('span');
    tempTagSpan.innerText = addTagInput.value;
    const tempTagButton = document.createElement('button');
    tempTagButton.innerText = 'x';
    tempTagButton.addEventListener('click', () => {
      tempTagSpan.remove();
      tempTags = tempTags.filter((tag) => tag !== tempTagSpan.innerText);
      refreshDiffTags();
    });
    tempTagDiv.appendChild(tempTagSpan);
    tempTagDiv.appendChild(tempTagButton);
    tempTagsDiv.appendChild(tempTagDiv);
    addTagInput.value = '';
  }
});

const form2 = document.querySelector('form:last-of-type');
const buttonSearch = form2.querySelector('button:first-of-type');
const buttonReset = form2.querySelector('button:last-of-type');

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  
  const optionsLi = document.querySelectorAll('.dropdown-check-list:first-of-type ul li');
  const tagsLi = document.querySelectorAll('.dropdown-check-list:last-of-type ul li');
  const whitelistOptions = [];
  const blacklistOptions = [];
  const whitelistTags = [];
  const blacklistTags = [];
  
  for(let li of optionsLi){
    console.log(li.dataset)
    if(li.dataset.wob == 'whitelist'){
      whitelistOptions.push(li.dataset.options);
    } else if(li.dataset.wob == 'blacklist'){
      blacklistOptions.push(li.dataset.options);
    }
  }
  
  for(let li of tagsLi){
    if(li.dataset.wob == 'whitelist'){
      whitelistTags.push(li.dataset.tags);
    } else if(li.dataset.wob == 'blacklist'){
      blacklistTags.push(li.dataset.tags);
    }
  }
  
  console.log(whitelistTags, blacklistTags);
  
  const data = new FormData(form2);
  for(li of elementList.children) {
    if((whitelistOptions.length > 0 && !whitelistOptions.includes(li.dataset.data)) || (blacklistOptions.length > 0 && blacklistOptions.includes(li.dataset.data)) || (whitelistTags.length > 0 && !whitelistTags.includes(li.dataset.tags)) || (blacklistTags.length > 0 && blacklistTags.includes(li.dataset.tags)) || !li.querySelector('span').innerText.includes(data.get('search'))) {
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

const refreshDiffTags = () => {
  const ul = document.querySelector('.dropdown-check-list:last-of-type ul');
  ul.innerHTML = '';
  tagsList = document.querySelectorAll('div:last-of-type ul li');
  diffTags = [];
  for(let tag of tagsList){
    diffTags.push(...tag.dataset.tags.split(',').filter((t) => !diffTags.includes(t)));
  }
  for(let tag of diffTags){
    const li = document.createElement('li');
    li.innerText = tag;
    li.dataset.tags = tag;
    li.addEventListener('click', wob);
    ul.appendChild(li);
  }
}

const ul = document.querySelectorAll('.dropdown-check-list:first-of-type ul li');
for(let child of ul){
  child.addEventListener('click', wob);
}