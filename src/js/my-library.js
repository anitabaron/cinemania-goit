import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-functions';
import APIService from './api-service';

const library = new LibraryAPI();
const libraryService = new APIService();
library.setLibrary();
libraryService.getMovieInfo(533535);
checkStorage();

export function checkStorage() {
  library.setLibrary();
  if (library.movies.length === 0) {
    if (!document.querySelector('.my-lib__no-movies')) {
      return;
    }
    document
      .querySelector('.my-lib__no-movies')
      .classList.remove('visually-hidden');
    document.querySelector('.my-lib__gallery-list').innerHTML = '';
  } else {
    renderMoviesCards(library.movies, '.my-lib__gallery-list');
  }
}
