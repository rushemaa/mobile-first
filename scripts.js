const clicked = document.querySelector('#clicked');
const toolbar = document.querySelector('header');
const clickedP = document.querySelector('.clicked-p');
const navLinks = document.querySelectorAll('.clicked-ul li');
function mobileMenu() {
  clicked.classList = 'clicked';
}
function hideMobileMenu() {
  clicked.classList = 'not-cliked';
}

toolbar.addEventListener('click', mobileMenu);
clickedP.addEventListener('click', hideMobileMenu);
navLinks.forEach((element) => {
  element.addEventListener('click', hideMobileMenu);
});
// Opening and closing project popup
const seeProject = document.querySelectorAll('.project-details');
const main = document.querySelector('#main');
function projectPopup() {
  document.querySelector('#popup').classList.remove('hidden-popup');
  document.querySelector('#popup').classList.add('popup');
  main.classList = 'main';
}
function closePopup() {
  document.querySelector('#main').classList.remove('main');
  document.querySelector('#popup').classList.remove('popup');
  document.querySelector('#popup').classList.add('hidden-popup');
}
seeProject.forEach((element) => {
  element.addEventListener('click', projectPopup);
});
document.querySelector('#btn-close').addEventListener('click', closePopup);

// Creating dynamic projec section

let projects = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    mimage: 'images/projects/project-1.png',
    image: 'images/projects/d-project-1.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: [
      { text: 'See live', icon: 'images/socials/live.png' },
      { text: 'See Source', icon: 'images/socials/github.png' },
    ],
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    mimage: 'images/projects/project-2.png',
    image: 'images/projects/d-project-2.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: [
      { text: 'See live', icon: 'images/socials/live.png' },
      { text: 'See Source', icon: 'images/socials/github.png' },
    ],
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    mimage: 'images/projects/project-3.png',
    image: 'images/projects/d-project-3.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: [
      { text: 'See live', icon: 'images/socials/live.png' },
      { text: 'See Source', icon: 'images/socials/github.png' },
    ],
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    mimage: 'images/projects/project-4.png',
    image: 'images/projects/d-project-4.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: [
      { text: 'See live', icon: 'images/socials/live.png' },
      { text: 'See Source', icon: 'images/socials/github.png' },
    ],
  },
];
// passing data into the works section
const works = document.querySelector('.works');
for (let index = 0; index < projects.length; index++) {
  const pSection = document.createElement('section');
  const pClasses = document.createAttribute('class');
  pClasses.value = 'grid-items project-1 fonts';
  pSection.setAttributeNode(pClasses);
  // creating image
  const img = document.createElement('img');
  const imgClasses = document.createAttribute('class');
  imgClasses.value = 'project-img';
  img.setAttributeNode(imgClasses);
  const imgId = document.createAttribute('id');
  imgId.value = 'project-1';
  img.setAttributeNode(imgId);
  const imgSrc = document.createAttribute('src');
  imgSrc.value = 'images/projects/project-1.png';
  img.setAttributeNode(imgSrc);
  const imgAlt = document.createAttribute('alt');
  imgAlt.value = `Project-${index}`;
  img.setAttributeNode(imgAlt);
  pSection.appendChild(img);
  works.appendChild(pSection);
}
