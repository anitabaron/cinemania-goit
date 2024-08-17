import LibraryAPI from './library-functions';

const library = new LibraryAPI();

library.setLibrary();
// Klasa do dodania funkcjonalności buttonom.
export default class BtnState {
  constructor(btn, btnStateStorageKey, movie) {
    this.btn = btn;
    this.btnStateStorageKey = btnStateStorageKey;
    this.movie = movie;
  }
  // Dodaje funkcjonalność do przycisku na modalu i w sekcji upcomming (w tej sekcji jeszcze nie użyto).
  setBtnState() {
    // Zmienna zawiera informację czy dany film (movie, który został podany przy tworzeniu nowej instancji klasy) istnieje w localStorage.
    const isInLibrary = library.movies.some(m => m.id === this.movie.id);
    // Jeżeli istnieje to ustawiamy atrybut własny jako 'remove' i ustawiamy odpowiedni text w buttonie.
    if (isInLibrary) {
      this.btn.setAttribute('data-action', 'remove');
      this.btn.textContent = 'Remove from library';
      // Jeżeli film nie istnieje w pamięci to analogicznie ustawiamy atrybut oraz text w buttonie.
    } else {
      this.btn.setAttribute('data-action', 'add');
      this.btn.textContent = 'Add to library';
    }
    // Po nadaniu odpowiedniego atrybutu, dodajemy listenera, który na podstawie tego atrybutu decyduje czy button ma dodawać do pamięci czy usuwać.
    this.btn.addEventListener('click', () => {
      if (this.btn.getAttribute('data-action') === 'add') {
        this.toAdd();
      } else {
        this.toRemove();
      }
    });
  }
  // Metoda do dodawania filmu do pamięci i ustawienia odpowiednio buttona.
  toAdd() {
    library.addMovie(this.movie);
    this.btn.removeEventListener('click', this.toAdd);
    this.btn.setAttribute('data-action', 'remove');
    localStorage.setItem(this.btnStateStorageKey, 'remove');
    this.btn.textContent = 'Remove from library';
  }
  // Metoda do usuwania filmu z pamięci i ustawienia odpowiednio buttona.
  toRemove() {
    library.deleteMovie(this.movie);
    this.btn.removeEventListener('click', this.toRemove);
    this.btn.setAttribute('data-action', 'add');
    localStorage.setItem(this.btnStateStorageKey, 'add');
    this.btn.textContent = 'Add to library';
  }
}
