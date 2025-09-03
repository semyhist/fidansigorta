const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  body.classList.toggle('nav-open');
});