const API_CODE =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODIxMjdlZDk3MmU1NmY2YmI3MGFlNzQzZDIzYzFkNyIsIm5iZiI6MTcyMTkyMzEwNy4xMDMyODUsInN1YiI6IjY2YTI3NDZiN2E4ZDcyYzUwNmU3ZmNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qj3afYe7mGMES9vNIydDi4ZdZ8w_kD3c9hqJXKkUUIM';
const API_KEY = '682127ed972e56f6bb70ae743d23c1d7';

const url = 'https://api.themoviedb.org/3';

const params = {
  page: 1,
  language: 'en-US',
  // include_adult: false,
  // include_video: false,
  // sort_by: 'popularity.desc'
};
// https://api.themoviedb.org/3/movie/550?api_key=682127ed972e56f6bb70ae743d23c1d7 //przykładowe zapytanie

const trendMoviesWeek = url + '/trending/movie/week?' + params;
const trendMoviesDay = url + '/trending/movie/day?' + params;
const newMovies = url + '/movie/upcoming?' + params;
const searchMovies = url + '/search/movie?' + params;
const moreAboutMovie = url + '/movie/movie_id?' + params; // movie_id trzeba wtłoczyć
const trailerMovie = url + '/movie/movie_id/videos?' + params; // movie_id trzeba wtłoczyć
const genreMovie = url + '/genre/movie/list?' + params;
const gcountryMovie = url + '/configuration/countries?' + params;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODIxMjdlZDk3MmU1NmY2YmI3MGFlNzQzZDIzYzFkNyIsIm5iZiI6MTcyMTkyNDE3MS44NDc0OTQsInN1YiI6IjY2YTI3NDZiN2E4ZDcyYzUwNmU3ZmNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1Qus-92Q3-9KvUxKtanYETfnKoQwXPTlFSSlwqsfFo',
  },
};

fetch(newMovies, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .then(original_title => console.log(original_title))
  .catch(err => console.error(err));
