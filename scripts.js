const hamburger = document.querySelector('.icons');
function display() {
  const menue = document.querySelector('.nav-menues');
  menue.classList.add('nav-menues-c');
}

hamburger.addEventListener('click', display);
