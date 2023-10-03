const selector = () => {
  const nonBlanks = document.querySelectorAll("a:not([target='_blank'])");
  for(let nonBlank of nonBlanks) {
    nonBlank.style.opacity = "50%";
  }
}

selector();