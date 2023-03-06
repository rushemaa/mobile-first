const clicked = document.querySelector('#clicked');
const toolbar = document.querySelector('header');
const clickedP = document.querySelector('.clicked-p');
const navLinks = document.querySelectorAll('.clicked-ul li');
function mobileMenu() {
  toolbar.classList = 'hidden-toolbar';
  clicked.classList = 'clicked';
}
function hideMobileMenu() {
  toolbar.classList = 'toolbar';
  clicked.classList = 'not-cliked';
}

toolbar.addEventListener('click', mobileMenu);
clickedP.addEventListener('click', hideMobileMenu);
navLinks.forEach((element) => {
  element.addEventListener('click', hideMobileMenu);
});
