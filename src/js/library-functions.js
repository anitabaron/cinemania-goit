// Klasa z funkcjonalnością do zarządzania Local Storage.
export default class LibraryAPI {
  // W konstruktorze podajemy nazwę naszej pamięci (keyValue) oraz zawarte w niej filmy (movies).
  constructor() {
    this.keyValue = 'library';
    this.movies = localStorage.getItem(this.keyValue);
  }
  // Metoda uaktualnia dodane lub usunięte filmy w pamięci.
  updateLocalStorage() {
    localStorage.setItem(this.keyValue, JSON.stringify(this.movies));
  }
  // Metoda ustawia nam this.movies jako tablicę i wstawia pustą tablicę do pamięci jeżeli nie ma nic w pamięci, a jeżeli jest coś w pamięci to ustawia this.movies jako tablicę już istniejących filmów. Dlaczego od razu nie ustawiłem this.movies jako pustą tablicę? Ponieważ za każdym razem jak byśmy odświeżali stronę albo przechodzili na inną kartę na naszej stronie byśmy ustawiali this.movies jako pustą tablicę kasując przy tym wszystkie zapisane filmy.
  setLibrary() {
    const localStorageData = localStorage.getItem(this.keyValue);

    if (localStorageData) {
      this.movies = JSON.parse(localStorageData);
    } else {
      localStorage.setItem(this.keyValue, JSON.stringify([]));
      this.movies = [];
    }
  }
  // Metoda dodaje film do localStorage.
  addMovie(movie) {
    this.movies.push(movie);
    this.updateLocalStorage();
  }
  // Metoda usuwa film z localStorage.
  deleteMovie(movie) {
    const index = this.movies.findIndex(m => m.id === movie.id);
    this.movies.splice(index, 1);
    this.updateLocalStorage();
  }
}
