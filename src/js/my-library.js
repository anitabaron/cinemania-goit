import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-functions';

const btnLoad = document.querySelector("#mylibraryLoadMore");
const cardPerPage = 9;
let allCards = [];
let step = 0;

const loadMoreCards = (arr, num) => {
  let end = num + 9; 
  if (end < allCards.length) {
    end = allCards.length;
   };
  const arrOfCards = arr.slice(0, end);
  renderMoviesCards(arrOfCards, '.my-lib__gallery-list');
  step += 9;
}

const library = new LibraryAPI();
library.setLibrary();
checkStorage();

export function checkStorage() {
  library.setLibrary();
  if (library.movies.length === 0) {
    if (!document.querySelector('.my-lib__no-movies')) {
      return;
    }
    document.querySelector('.my-lib__no-movies').classList.remove('.hidden');
    document.querySelector('.my-lib__gallery-list').innerHTML = '';
  } else {
    allCards = library.movies;
    if (allCards.length <= cardPerPage) {
      renderMoviesCards(allCards, '.my-lib__gallery-list');
    } else if (allCards.length > cardPerPage) {
      const partOfCards = allCards.slice(0, step + 9);
      renderMoviesCards(partOfCards, '.my-lib__gallery-list');
      // btnLoad.classList.remove("invisible");
      step += 9;
    }
    
  }
} 

console.log(allCards);
console.log(step)

const loadHandleClick = (e) => {
  if (e.target === btnLoad) {
     loadMoreCards(allCards, step);
  }
 
}

window.addEventListener("click", loadHandleClick);
