import APIService from './api-service';
import sprite from '../images/sprite.svg';
import BtnState from './btn-state';
import { checkStorage } from './my-library';

const apiService = new APIService();

const myLibGallery = document.getElementById('my-lib-gallery-list');
const modalWindow = document.querySelector('.modal-film');
const overlay = document.querySelector('.overlay');

addModalListener(myLibGallery);

function addModalListener(listRef) {
  if (!listRef) {
    return;
  }
  listRef.addEventListener('click', onMovieCardClick);
}

async function onMovieCardClick(e) {
  // if (!e.target.closest('.movie-details')) {
  //   return;
  // }

  try {
    const movieID = e.getAttribute('data-id');
    const movieData = await apiService.getMovieInfo(movieID);
    const markup = createMarkup(movieData);
    updateModal(markup);
    const btnModalClose = document.querySelector('.modal-film__close');
    btnModalClose.addEventListener('click', closeModalWindows);
    openModal();
    const toLibraryBtn = document.getElementById('mylibrary');
    const btnApi = new BtnState(toLibraryBtn, 'modal-btn-attr', movieData);
    btnApi.setBtnState();
  } catch (error) {
    console.log(error);
  }
}
async function onMovieTrailerClick(e) {
  // if (!e.target.closest('.movie-details')) {
  //   return;
  // }
  try {
    const movieID = e.getAttribute('data-id');
    const movieData = await apiService.getMovieTrailer(movieID);
    const videoUrl = `https://www.youtube.com/embed/${movieData.key}`;
    const markup = successModalTemplate(videoUrl);
    updateModal(markup);
    openModal();
  } catch (error) {
    errorModalTemplate();
    console.log(error);
  }
}

function successModalTemplate(videoUrl) {
  return `<iframe
    id='trailer-video'
    class='watch-modal__iframe'
    src='${videoUrl}'
    frameborder='0'
    allowfullscreen
  ></iframe>`;
}

function errorModalTemplate() {
  return `<div class='watch-modal modal-error'>
<div class='watch-modal__content'>
  <div class='watch-modal__error-image'></div>
    <button type='button' class='watch-modal__close'>
    <svg
      class='watch-modal__close-icon'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 6L6 18'
        stroke='#F3F3F3'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 6L18 18'
        stroke='#F3F3F3'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </button>
  <p class='watch-modal__error-message'>
    OOPS... We are very sorry! But we couldn’t find the trailer.
  </p>
</div>
</div>`;
}

function openModal() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function updateModal(markup) {
  modalWindow.innerHTML = markup;
}

function createMarkup({
  id,
  poster_path,
  title,
  overview,
  popularity,
  vote_average,
  vote_count,
  genres,
}) {
  const getMoivePoster = getPoster(poster_path);
  function getPoster(poster_path) {
    /* if (poster_path === null || !poster_path) {
      return `src='${comingSoonImg}'`;
    } */
    return `srcset="
                https://image.tmdb.org/t/p/w500/${poster_path} 500w,
                https://image.tmdb.org/t/p/w300/${poster_path} 342w,
                https://image.tmdb.org/t/p/w185/${poster_path} 185w"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"

        " sizes=" (min-width: 768px) 500px, (min-width: 480px) 342px, (min-width: 320px) 185px, 100vw"   
    `;
  }

  return `<div class="modal-film__container" data-id=${id}>
  <button class="modal-film__close">
    <svg width="18" height="18" class="modal-film__close-icon">
    <use href="${sprite}#icon-close2"></use>       
</svg>
  </button>
  <img ${getMoivePoster} loading="lazy" alt="movie-poster" class="modal-film__img" />
  <div class="modal-film__card">
    <h2 class="modal-film__title">${title}</h2>
    <div class="modal-film__blok">
      <ul class="modal-film__list attribute">
        <li class="modal-film__link">Vote / Votes</li>
        <li class="modal-film__link">Popularity</li>
        <li class="modal-film__link">Genre</li>
      </ul>

      <ul class="modal-film__list">
        <li class="modal-film__link-item item-votes">
          <div class="vote">${vote_average}</div>
          &nbsp;/&nbsp;
          <div class="votes">${vote_count}</div>
        </li>
        <li class="modal-film__link-item popularity">${popularity}</li>
        <li class="modal-film__link-item genres">${genres
          .map(g => g.name)
          .join(', ')}</li>
      </ul>
    </div>
    <h3 class="modal-film__about">ABOUT</h3>
    <p class="modal-film__about-txt">${overview}
    </p>
    <button class="btn-modal" id="mylibrary" data-action="add">Add to my library</button>`;
}

function closeModalWindows() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
  checkStorage();
}

overlay.addEventListener('click', closeModalWindows);
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindows();
  }
});

window.addEventListener('click', event => {
  if (event.target.classList.value.includes('btn__hero-2')) {
    onMovieCardClick(event.target);
  }
  if (event.target.classList.value.includes('movielist-item')) {
    onMovieCardClick(event.target);
  }
  if (event.target.classList.value.includes('btn__hero-1')) {
    onMovieTrailerClick(event.target);
  }
});
