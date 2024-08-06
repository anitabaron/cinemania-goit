import LibraryAPI from './library-functions';

const library = new LibraryAPI();

library.setLibrary();

export default class BtnState {
  constructor(btn, btnStateStorageKey, movie) {
    this.btn = btn;
    this.btnStateStorageKey = btnStateStorageKey;
    this.movie = movie;
  }

  setBtnState() {
    const isInLibrary = library.movies.some(m => m.id === this.movie.id);
    if (isInLibrary) {
      this.btn.setAttribute('data-action', 'remove');
      this.btn.textContent = 'Remove from library';

    } else {
      this.btn.setAttribute('data-action', 'add');
      this.btn.textContent = 'Add to library';

    }

    this.btn.addEventListener('click', () => {
      if (this.btn.getAttribute('data-action') === 'add') {
        this.toAdd();
      } else {
        this.toRemove();

      }
    });
  }

  toAdd() {
    library.addMovie(this.movie);
    this.btn.removeEventListener('click', this.toAdd);
    this.btn.setAttribute('data-action', 'remove');
    localStorage.setItem(this.btnStateStorageKey, 'remove');
    this.btn.textContent = 'Remove from library';

  }

  toRemove() {
    library.deleteMovie(this.movie);
    this.btn.removeEventListener('click', this.toRemove);
    this.btn.setAttribute('data-action', 'add');
    localStorage.setItem(this.btnStateStorageKey, 'add');
    this.btn.textContent = 'Add to library';

  }
}
