const pFunction = () => {
  const p = document.querySelectorAll('p');
  p.forEach(blueFunction);
}

const blueFunction = (p) => {
  p.addEventListener('click', () => {
    p.classList.toggle('highlighted');
  });
  
  p.addEventListener('mouseenter', () => {
    p.classList.add('blue');
  });
  
  p.addEventListener('mouseleave', () => {
    p.classList.remove('blue');
  });
}

pFunction();