// Importujemy naszą klasę do zapytań API.
import APIService from './api-service';
import sprite from '../images/sprite.svg';
import BtnState from './btn-state';
import { checkStorage } from './my-library';
// Tworzymy obiekt, który zawiera nasze metody do zapytań API
const apiService = new APIService();

// <ul> który zawiera karty filmów w library
const myLibGallery = document.getElementById('my-lib-gallery-list');
const modalWindow = document.querySelector('.modal-film');
const overlay = document.querySelector('.overlay');

addModalListener(myLibGallery);

// Funkcja dodaje event listener. Dlaczego jest to fukcja a nie dodaje sztywno event listenera do elementu? Ponieważ w momencie kiedy jesteśmy na innej karcie niż my-library.html to element myLibGallery nie istnieje co powoduje dodaniem event listenera do nieistniejącego elementu co skutkuje errorem. W tej funkcji najpierw sprawdzam czy element istnieje, jak nie istnieje to poprostu zwracam funkcję. Jeżeli istnieje dany element to wtedy dopiero dodaje event listener.
function addModalListener(listRef) {
  if (!listRef) {
    return;
  }
  listRef.addEventListener('click', onMovieCardClick);
}

// Funkcja odpalana przy kliknięciu na dany element (karte) w myLibGallery. Otwiera modal, dodaje mu funkcjonalność i go zamyka.
async function onMovieCardClick(e) {
  // if (!e.target.closest('.movie-details')) {
  //   return;
  // }

  try {
    // Zbieramy ID filmu z karty na którą klikneliśmy.
    const movieID = e.getAttribute('data-id');
    // Używamy naszego obiektu z metodami zapytań do API żeby otrzymać informacje o filmie na podstawie zebranego wcześniej ID.
    const movieData = await apiService.getMovieInfo(movieID);
    // Tworzony jest HTML na podstawie danych o filmie, które właśnie otrzymaliśmy.
    const markup = createMarkup(movieData);
    // Updatujemy nasz modal z HTML z poprawnymi danymi.
    updateModal(markup);
    // Dodajemy funkcje zamykania modalu przyciskiem X.
    const btnModalClose = document.querySelector('.modal-film__close');
    btnModalClose.addEventListener('click', closeModalWindows);
    // I po tym wszystkim dopiero teraz otwieramy już gotowy modal.
    openModal();
    // Zbieramy nasz przycisk do dodawania filmu do library.
    const toLibraryBtn = document.getElementById('mylibrary');
    // Dodajemy funkcjonalność buttonową do buttona.
    const btnApi = new BtnState(toLibraryBtn, 'modal-btn-attr', movieData);
    btnApi.setBtnState();
  } catch (error) {
    console.log(error);
  }
}

// Funkcja do tworzenia i otwierania modalu z trailerem.
async function onMovieTrailerClick(e) {
  // if (!e.target.closest('.movie-details')) {
  //   return;
  // }
  try {
    // Zbieramy ID filmu na którym klikneliśmy button trailer.
    const movieID = e.getAttribute('data-id');
    // Odbieramy od API nasz trailer (klucz do youtube.com).
    const movieData = await apiService.getMovieTrailer(movieID);
    // Wstawiamy ten klucz do całej ścieżki youtube i zapisujemy to w zmiennej.
    const videoUrl = `https://www.youtube.com/embed/${movieData.key}`;
    // Tworzymy HTML z odpowienią ścieżką do naszego trailera.
    const markup = successModalTemplate(videoUrl);
    // Updatujemy nasz modal z HTMLem.
    updateModal(markup);
    // Otwieramy modal.
    openModal();
  } catch (error) {
    // W razie by nie było trailera to nasz modal ma się otwierać z błędem (nwm czy działa).
    errorModalTemplate();
    console.log(error);
  }
}
// Funkcja tworzy HTML do modalu z trailerem.
function successModalTemplate(videoUrl) {
  return `<iframe
    id='trailer-video'
    class='watch-modal__iframe'
    src='${videoUrl}'
    frameborder='0'
    allowfullscreen
  ></iframe>`;
}
// Funkcja tworzy HTML do modalu z trailerem (brak trailera).
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
// Funkcja otwiera modal.
function openModal() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
// Funkcja updatuje modal z odpowiednim HTMLem.
function updateModal(markup) {
  modalWindow.innerHTML = markup;
}
// Tworzony jest HTML na podstawie danych o filmie. Otrzymuje parametr obiektu filmu od API poczym go destrukturyzuje.
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
  // Ustawiamy ścieżki do postera w zależności od szerokości ekranu.
  const getMoivePoster = getPoster(poster_path);
  // Zaokrąglanie votes i popularity.
  const roundedVoteAverage = Math.round(vote_average * 10) / 10;
  const roundedVPopularity = parseInt(popularity);
  // Funkcja ustawia ścieżki do postera w zależności od szerokości ekranu.
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
  // Zwracamy HTML z danymi danego filmu.
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
          <div class="vote">${roundedVoteAverage}</div>
          &nbsp;/&nbsp;
          <div class="votes">${vote_count}</div>
        </li>
        <li class="modal-film__link-item popularity">${roundedVPopularity}</li>
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
// Funkcja zamyka modal.
function closeModalWindows() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
  checkStorage();
}
// Dodajemy listenera żeby modal się zapykał przy kliknięciu na tło i przy naciśnięciu ESC.
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
