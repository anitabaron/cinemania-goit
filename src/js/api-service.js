import axios from 'axios';

// Klasa do odbierania danych od API
export default class APIService {
  // Konstruktor zawiera KEY do API i początek ścieżki do zapytań do API (baseURL) i strone (do wykorzystania w catalogu ale nie została wykorzystana)
  constructor() {
    this.key = '682127ed972e56f6bb70ae743d23c1d7';
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.page = 0;
  }
  // Resetuje wartość strony
  resetPage() {
    this.page = 0;
  }
  // Zbiera trendujące filmy od API do wykorzystania w catalog (nie było wykorzystane), param to albo day albo week a page to strona.
  async getTrends(param, page) {
    // Jeżeli podamy oba parametry (param i page; Do wykorzystania w catalog), to odpalamy to. Różnica między tym a 'else' to modyfikacja strony (page) w odpowiedzi od API
    if (arguments.length < 2) {
      try {
        // Z każdą inicjacją tej metody chcemy zwiększyć page o jeden ponieważ zaczynamy od 0 i odpowiedź od API z page=0 zwróci błąd. Przy użyciu tej metody np. w catalogu do parametru page wtłaczamy stronę catalogu (początkowo to strona nr. 1 i jest ona zawarta w jakiejś zmiennej np 'currentPage'). LoL teraz jak to piszę jest tutaj mini błąd logiczny ale no nic haha. Nadal to działa. W momencie kiedy jesteśmy na 4 stronie w catalogu to chcemy od API filmy trendujące ale już na 5 stronie (inaczej gdyby page ciągle było 1 to z każdą kolejną stroną w catalogu byśmy otrzymywali ciągle te same filmy).
        this.page += 1;
        // Odpowiedź od API jest zawsze w formacie JSON. Zachowujemy go w zmiennej response.
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${this.page}`
        );
        // Zwracamy wyniki (filmy) od API (są one zawartę w tablicy w 'results')
        return response.data.results;
      } catch (error) {
        console.log(error);
      }
      // Ten else jest w wypadku potrzeby zdobycia trendujących filmów poprostu z pierwszej strony (podając tylko parametr param bez parametru page). Nie działa przez błąd logiczny (page=0 przez pomyłkę).
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${page}`
        );
        // Zwraca nam całą odpowiedź od API (nie tylko results jak wyżej)
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
  // Zbiera listę filmów nadchodzących bardzo podobnie do metody powyżej bez "dodatków"
  async getUpcoming() {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/upcoming?api_key=${this.key}`
      );
      // Zwraca tablicę obiektów (filmów)
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
  // Metoda do wyszukiwania filmów przez input (search). Nie wykorzystana. Również ma pomyłkę z page.
  async searchMovieByQuery(query, page) {
    if (arguments.length < 2) {
      try {
        this.page += 1;
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${this.page}`
        );
        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${page}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
  // Metoda zwraca JSON z danymi filmu (generes, title, votes, itd.)
  async getMovieInfo(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}?api_key=${this.key}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // Metoda do odbierania trailera z youtube. Nie użyta.
  async getMovieTrailer(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}/videos?api_key=${this.key}`
      );
      // Zwraca pierwszy obiekt z informacjami o trailerze (są 2 z jakiegoś powodu).
      return response.data.results[0];
    } catch (error) {
      console.log(error);
    }
  }
  // Metoda do ściągania listy generes z API
  async getGenresList() {
    try {
      const response = await axios.get(
        `${this.baseURL}genre/movie/list?api_key=${this.key}`
      );
      return response.data.genres;
    } catch (error) {
      console.log(error);
    }
  }
  // Metoda zwraca listę państw dostępnych w API (dl użytkowników zagranicznych można podać poster w zagranicznym języku bo aktualny projekt posiada możliwość wyświetlania posterów tylko w języku angielskim).
  async getMovieContries() {
    try {
      const response = await axios.get(
        `${this.baseURL}configuration/countries?api_key=${this.key}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
