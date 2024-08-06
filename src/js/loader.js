const loader = document.querySelector('#loader');

loader.classList.add('show-loader');

window.addEventListener('load', function () {
  setTimeout(function () {
    loader.classList.remove('show-loader');
  }, 2000);
});
