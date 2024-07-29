const mobileMenuButton = document.getElementById('menu');
const menuNav = document.querySelector('nav');
const overlay = document.getElementById('overlay');

mobileMenuButton.addEventListener('click', () => {
  menuNav.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  menuNav.style.left = '-64%';
  overlay.style.display = 'none';
});
