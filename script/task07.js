const footer = document.querySelector('footer');
const divLink = footer.querySelector('div:first-of-type');
const link = footer.querySelector('a');

const button = document.createElement('div');
button.innerText = 'Delete the cookie';
button.addEventListener('click', () => {
  document.cookie.split(';').forEach((c) => {
    if(c.includes('acceptCookies')) {
      document.cookie = `${c.split('=')[0]}=;expires=${new Date().toUTCString()};path=/`;
    }
  });
  
  footer.removeChild(button);
  footer.appendChild(divLink);
});

if(document.cookie.includes('acceptCookies=true')) {
  footer.appendChild(button);
  footer.removeChild(divLink);
}

link.addEventListener('click', () => {
  event.preventDefault();
  
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  document.cookie = `acceptCookies=true;expires=${date.toUTCString()};path=/`;
  
  if(document.cookie.includes('acceptCookies=true')) {
    footer.appendChild(button);
    footer.removeChild(divLink)
  }
});
