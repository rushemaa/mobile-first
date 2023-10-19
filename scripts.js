/* eslint-disable no-plusplus */
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
// Creating dynamic projec section

const projects = [
  {
    name: 'KIVU BELT TOURS ',
    description:
      'A web application CMS for a transport company called Kivu Belt Tours LTD',
    descriptions:
      "A web application CMS for a transport company called Kivu Belt Tours LTD. Built with React, JavaScript, Express, and MySQL. It manages all the company's internal processes such as Buses time tables, driver's shifts, parcels, fuels, garages, workers, and expenses and generates different reports.",
    image: 'images/projects/project-1.png',
    technologies: [
      'React',
      'Redux',
      'NodeJs',
      'Express',
      'javaScript',
      'Bootstraps',
      'CSS',
    ],
    links: {
      live: 'https://kivubelttours.com',
      source: 'https://github.com/rushemaa/kivu-belt',
    },
  },
  {
    name: 'Premier events',
    description:
      'Event management wep application to facilitate registration and accreditation',
    descriptions: `Premier events is an event management wep application to facilitate registration and accreditation.
It is composed with two portal: client portal and admin portal.
Cleint portal handles registration, while admin portal handles accreditation`,
    image: 'images/projects/project-2.png',
    technologies: ['html', 'css', 'javaScript', 'PHP', 'Foundation'],
    links: { live: 'https://premierevents.rw', source: '#' },
  },
  {
    name: 'RMsoft.rw',
    description:
      'It is the website for the company called RMsoft .It shows information about the company, services, team, and contact details',
    descriptions:
      'It is the website for the company called RMsoft .It shows information about the company, services, team, and contact details.It is built in HTML, CSS, and JavaScript',
    image: 'images/projects/project-3.png',
    technologies: ['html', 'css', 'javaScript', 'webpack'],
    links: {
      live: 'https://rushemaa.github.io/capstone',
      source: 'https://github.com/rushemaa/capstone',
    },
  },
  {
    name: 'Book Store',
    description:
      'The bookStore is a book CMS that allows a user to add, remove, and rent a book.',
    descriptions:
      'The bookStore is a book CMS that allows a user to add, remove,rent a book, and view the list of all books. It is built in React and Redux',
    image: 'images/projects/project-4.png',
    technologies: ['React', 'Redux', 'html', 'css', 'javaScript'],
    links: {
      live: 'https://bookstore-k8ri.onrender.com',
      source: 'https://github.com/rushemaa/book-store',
    },
  },
];
// passing data into the works section
const works = document.querySelector('.works');
// eslint-disable-next-line no-plusplus
for (let index = 0; index < projects.length; index++) {
  // eslint-disable-next-line object-curly-newline
  const { name, description, image, technologies } = projects[index];
  const pSection = document.createElement('section');
  const pClasses = document.createAttribute('class');
  let classReverse = '';
  if ((index + 1) % 2 === 0) {
    classReverse = 'reverse';
  }
  pClasses.value = `grid-items project-1 fonts ${classReverse}`;
  pSection.setAttributeNode(pClasses);
  // creating image
  const img = document.createElement('img');
  const imgClasses = document.createAttribute('class');
  imgClasses.value = 'project-img';
  img.setAttributeNode(imgClasses);
  const imgId = document.createAttribute('id');
  imgId.value = `project-${index + 1}`;
  img.setAttributeNode(imgId);
  const imgSrc = document.createAttribute('src');
  imgSrc.value = image;
  img.setAttributeNode(imgSrc);
  const imgAlt = document.createAttribute('alt');
  imgAlt.value = `Project-${index + 1}`;
  img.setAttributeNode(imgAlt);
  pSection.appendChild(img);
  // creating details div
  const cdiv = document.createElement('div');
  const cdivClass = document.createAttribute('class');
  cdivClass.value = 'details';
  cdiv.setAttributeNode(cdivClass);
  const titles = `<div class="titles">
              <h3 class="project-title">${name}</h3>
              <ul class="canopy">
                <li>Front End</li>
                <li class="bullets"><span class="dot"></span></li>
                <li class="o-li">Back End</li>
                <li class="bullets"><span class="dot"></span></li>
                <li class="o-li">2023</li>
              </ul>
            </div>`;
  const text = `<p>${description}</p>`;
  let li = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    li += `<li> ${technologies[i]} </li>`;
  }
  const ul = `<ul class="categories hex"> ${li} </ul>`;

  const seeBtn = `<div class="see-project">
              <a href="#"
                ><button type="button" class="hex project-details" data-project="${index}">
                  See Project
                </button></a
              >
            </div>`;
  cdiv.innerHTML = titles + text + ul + seeBtn;

  pSection.appendChild(cdiv);

  works.appendChild(pSection);
}
// Opening and closing project popup
const seeProject = document.querySelectorAll('.project-details');
const main = document.querySelector('#main');
function closePopup() {
  document.querySelector('#main').classList.remove('main');
  document.querySelector('#popup').classList.remove('popup');
  document.querySelector('#popup').classList.add('hidden-popup');
}
seeProject.forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('#popup').classList.remove('hidden-popup');
    document.querySelector('#popup').classList.add('popup');
    main.classList = 'main';
    // eslint-disable-next-line operator-linebreak, object-curly-newline
    const { name, descriptions, image, technologies, links } =
      projects[element.dataset.project];
    const pTitles = `<div class="p-title">
        <div class="p-main-title">
          <h3 class="p-h3">${name}</h3>
          <p id="btn-close">X</p>
        </div>
        <ul class="p-canopy">
          <li>Front End</li>
          <li class="p-bullets"><span class="p-dot"></span></li>
          <li class="o-li">Back End</li>
          <li class="p-bullets"><span class="p-dot"></span></li>
          <li class="o-li">2023</li>
        </ul>
      </div>

      <img
        class="p-project-img"
        id="project-${Number(element.dataset.project) + 1}"
        src="${image}"
        alt="Project-1"
      />`;
    let li = '';
    for (let i = 0; i < technologies.length; i++) {
      if (i >= 3) {
        li += `<li class="categories-li mibele-hidden"> ${technologies[i]} </li>`;
      } else {
        li += `<li class="categories-li"> ${technologies[i]} </li>`;
      }
    }
    const { live, source } = links;
    const detailss = `<div class="desktop">
        <p class="p-text">
          ${descriptions}
        </p>
        <div class="desktop-right">
          <ul class="p-categories hex">
          ${li}
          </ul>
          <div class="p-see-project">
            <a target="_blank" href="${live}"><button type="button" class="btn-see hex">
              <span class="btn-text">See live</span
              ><img alt="Live" src="images/socials/live.png" />
            </button></a>
            <a target="_blank" href="${source}"><button type="button" class="btn-see hex">
              <span class="btn-text">See Source</span
              ><img alt="Live" src="images/socials/github.png" />
            </button></a>
          </div>
        </div>
      </div>`;
    document.querySelector('#popup').innerHTML = pTitles + detailss;
    document.querySelector('#btn-close').addEventListener('click', closePopup);
  });
});
