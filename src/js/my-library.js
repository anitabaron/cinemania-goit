import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-functions';

const btnLoad = document.querySelector('#mylibraryLoadMore');
let allCards = [];
let step = 0;

const library = new LibraryAPI();
library.setLibrary();
checkStorage();

export function checkStorage() {
  step = 0;
  library.setLibrary();
  if (library.movies.length === 0) {
    if (!document.querySelector('.my-lib__no-movies')) {
      return;
    }
    document.querySelector('.my-lib__no-movies').classList.remove('is-hidden');
    document.querySelector('.my-lib__gallery-list').innerHTML = '';
  } else {
    allCards = library.movies;
    const cardPerPage = 9;
    if (allCards.length <= cardPerPage) {
      renderMoviesCards(allCards, '.my-lib__gallery-list');
    } else if (!document.querySelector('#mylibraryLoadMore')) {
      return;
    } else if (allCards.length > cardPerPage) {
      const partOfCards = allCards.slice(0, step + 9);
      renderMoviesCards(partOfCards, '.my-lib__gallery-list');
      btnLoad.classList.remove('invisible');
      step += 9;
    }
  }
}

const loadMoreCards = (arr, num) => {
  const arrOfCards = arr.slice(0, num + 9);
  renderMoviesCards(arrOfCards, '.my-lib__gallery-list');
  step += 9;
};

const loadHandleClick = e => {
  if (e.target === btnLoad) {
    loadMoreCards(allCards, step);
    if (allCards.length <= step) {
      btnLoad.classList.add('invisible');
    }
  }
};

window.addEventListener('click', loadHandleClick);
