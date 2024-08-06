const mobileMenuButton = document.getElementById('menu');
const menuNav = document.getElementById('navi');
const overlay = document.getElementById('overlay');

mobileMenuButton.addEventListener('click', () => {
  menuNav.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  menuNav.style.left = '-64%';
  overlay.style.display = 'none';
});

//
const LightSwitcher = document.getElementById('switch');
// const searchBtn = document.getElementById('searchBtn');
// let isLight = localStorage.getItem('isLight') === 'true';

// document.body.classList.toggle('light', isLight);
// searchBtn.classList.toggle('btn__search_black', isLight);
// searchBtn.classList.toggle('btn__search_white', !isLight);

LightSwitcher.onclick = function () {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  searchBtn.classList.toggle('btn__search_black', isLight);
  searchBtn.classList.toggle('btn__search_white', !isLight);
  localStorage.setItem('isLight', isLight);
};

const currentUrl = window.location.href;

const navLink = document.querySelectorAll(
  '.mobile-menu__link, .header__nav-link'
);

navLink[0].classList.add('current__nav-link');
navLink[3].classList.add('current__nav-link');

if (currentUrl.includes('index')) {
  return;
} else if (currentUrl.includes('catalog')) {
  navLink[0].classList.remove('current__nav-link');
  navLink[3].classList.remove('current__nav-link');
  navLink[1].classList.add('current__nav-link');
  navLink[4].classList.add('current__nav-link');
  return;
} else if (currentUrl.includes('library')) {
  navLink[0].classList.remove('current__nav-link');
  navLink[3].classList.remove('current__nav-link');
  navLink[1].classList.remove('current__nav-link');
  navLink[4].classList.remove('current__nav-link');
  navLink[2].classList.add('current__nav-link');
  navLink[5].classList.add('current__nav-link');
  return;
}
