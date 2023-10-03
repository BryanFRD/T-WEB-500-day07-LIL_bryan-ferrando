const appendFunction = () => {
  const button = document.querySelector('button');

  button.addEventListener('click', () => handleClick(listItem.value));
}

const handleClick = (text) => {
  if(text.length === 0)
      return;
    
  const div = document.querySelector('div:first-of-type');
  const d = document.createElement('div');
  d.innerText = text;
  div.appendChild(d);
  listItem.value = "";
}

appendFunction();