import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-functions';
// Button do załadowania więcej filmów w my-library.
const btnLoad = document.querySelector('#mylibraryLoadMore');
let allCards = [];
let step = 0;

const library = new LibraryAPI();
library.setLibrary();
checkStorage();

export function checkStorage() {
  // Step użyty do paginacji.
  step = 0;
  // Inicjalizujemy localStorage.
  library.setLibrary();
  // Sprawdzamy czy localStorage jest pusty.
  if (library.movies.length === 0) {
    // Jak jest pusty to sprawdzamy czy kontener z informacją o braku filmów istnieje.
    if (!document.querySelector('.my-lib__no-movies')) {
      // Jeżeli nie istnieje to zwracamy. Na celu ma to zapobiegnięciu błędu kiedy znajdujemy się na karcie innej niż my-library.html. Błąd wynika z faktu iż ten kod jest uruchamiany przy ładowaniu się każdej strony. A więc będąc na index.html i mając pustą pamięć uruchomią się poniższe querySelector-y (a te elementy nie istnieją na index.html tylko na my-library.html) co skutkuje fatalnym błędem.
      return;
    }
    // Po sprawdzeniu czy kontener z brakiem filmów istnieje to pokazujemy go i czyścimy <ul> w którym nie powinno nic być (bo nie mamy żadnych filmów w pamięci).
    document.querySelector('.my-lib__no-movies').classList.remove('is-hidden');
    document.querySelector('.my-lib__gallery-list').innerHTML = '';
    // W przeciwnym razie jeżeli jest przynajmniej jeden film w pamięci to przechodzimy do paginowania tematu.
  } else {
    // W zmiennej zawarte są wszystkie filmy z localStorage.
    allCards = library.movies;
    // W zmiennej zawarta jest ilość kart którą chcemy wyświetlać na stronie początkowo.
    const cardPerPage = 9;
    // Sprawdzamy czy ilość filmów jest mniejsza niż cardPerPage. Potrzebne jest to ponieważ chcemy dodać przycisk load more ale tylko wtedy kiedy mamy coś do loadowania mora (czyli kiedy mamy więcej niż cardPerPage filmów).
    if (allCards.length <= cardPerPage) {
      // Renderujemy karty (plik cards-rendering.js).
      renderMoviesCards(allCards, '.my-lib__gallery-list');
      // Chcemy też pokazać filter gatunków usuwając z niego klasę 'is-hidden' ale najpierw musimy sprawdzić czy dany element istnieje z tego samego powodu co wyżej wspomniane.
      if (!document.querySelector('.my-library__form')) {
        return;
      }
      // Pokazujemy filter gatunków.
      document.querySelector('.my-library__form').classList.remove('is-hidden');
      // Ten else if jest na potrzebe uniknięcia fatalnego błędu o którym wspomniano wyżej.
    } else if (!document.querySelector('#mylibraryLoadMore')) {
      return;
      // Ostatecznie jeżeli filmów jest więcej niż cardPerPage to chcemy pokazać guzik Load More (btnLoad) i dalej paginować.
    } else if (allCards.length > cardPerPage) {
      const partOfCards = allCards.slice(0, step + 9);
      // Renderujemy karty (plik cards-rendering.js).
      renderMoviesCards(partOfCards, '.my-lib__gallery-list');
      // Pokazujemy filter gatunków.
      document.querySelector('.my-library__form').classList.remove('is-hidden');
      btnLoad.classList.remove('is-hidden');
      // Za każdym razem chcemy pokazać 9 więcej filmów. Nie jestem przekonany czy inkrementacja tego step coś wgl robi....
      step += 9;
    }
  }
}
// Funkcja ładuje więcej filmów w my-library.html. Parametr 'arr' odpowiada array filmów w pamięci.
const loadMoreCards = (arr, num) => {
  // arrOfCards to ta część filmów w pamięci którą chcemy pokazać.
  const arrOfCards = arr.slice(0, num + 9);
  renderMoviesCards(arrOfCards, '.my-lib__gallery-list');
  // ????? coś tu nie pokolei.
  step += 9;
};
// Funkcja zwrotna odpalana przy naciśnięciu na Load More.
const loadHandleClick = e => {
  if (e.target === btnLoad) {
    loadMoreCards(allCards, step);
    // Po załadowaniu kolejnych filmów sprawdzamy czy są jeszcze jakieś filmy w pamięci. Jak tak to Load More nadal powinnień być a jak nie to chcemy go zchować bo nie ma już więcej filmów do załadowania.
    if (allCards.length <= step) {
      btnLoad.classList.add('is-hidden');
    }
  }
};
// Listener do przycisku Load More.
window.addEventListener('click', loadHandleClick);
