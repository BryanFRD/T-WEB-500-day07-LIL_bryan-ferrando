const eventFunction = () => {
  const firstButton = document.querySelector('button:first-of-type');
  const pList = document.querySelectorAll('p');

  firstButton.addEventListener('click', () => {
    for(let p of pList) {
      if(p.style.display === 'none')
        p.style.display = 'block';
      else
        p.style.display = 'none';
    }
  });
}

eventFunction();