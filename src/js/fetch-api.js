import axios from 'axios';

const API_KEY = '682127ed972e56f6bb70ae743d23c1d7';

const params = {
  page: 1,
  language: 'en-US',
  api_key: '682127ed972e56f6bb70ae743d23c1d7',
};
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

urls = {
  trendMoviesDay: `https://api.themoviedb.org/3/trending/movie/day`,
  trendMoviesWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming`,
};

let trendMoviesDay;
let trendMoviesWeek;
let upcomingMovies;

const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(res => res.data)
    .catch(error => console.log(error));

const homePageContent = async () => {
  try {
    const results = await Promise.all([
      homePageApiData(urls.trendMoviesDay),
      homePageApiData(urls.trendMoviesWeek),
      homePageApiData(urls.upcomingMovies),
    ]);

    trendMoviesDay = results[0].results;
    trendMoviesWeek = results[1].results;
    upcomingMovies = results[2].results;

    console.log(trendMoviesDay[0]);
    console.log(trendMoviesDay);
    console.log(trendMoviesWeek);
    console.log(upcomingMovies);

    const allMovies = [
      ...trendMoviesDay,
      ...trendMoviesWeek,
      ...upcomingMovies,
    ];
    return allMovies, trendMoviesDay, trendMoviesWeek, upcomingMovies;
  } catch (error) {
    console.error(error);
  }
};

const extractMovieData = movie => {
  return {
    poster_path: movie.poster_path,
    original_title: movie.original_title,
    overview: movie.overview,
    genre_ids: movie.genre_ids,
    genres: movie.genres,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    id: movie.id,
    origin_country: movie.origin_country,
    release_date: movie.release_date,
    video: movie.video,
    popularity: movie.popularity,
  };
};

homePageContent(trendMoviesDay)
  .then(results => {
    const filteredMovies = results.map(extractMovieData);
    console.log(filteredMovies[0]);
    return filteredMovies;
  })
  .catch(error => console.log(error));

const draftMovieList = document.querySelector('#movieDraft');

/////////////////////////////////////////////////////////////poniżej poglądowo stara wersja

// import axios from 'axios';

// const API_CODE =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODIxMjdlZDk3MmU1NmY2YmI3MGFlNzQzZDIzYzFkNyIsIm5iZiI6MTcyMTkyMzEwNy4xMDMyODUsInN1YiI6IjY2YTI3NDZiN2E4ZDcyYzUwNmU3ZmNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qj3afYe7mGMES9vNIydDi4ZdZ8w_kD3c9hqJXKkUUIM';
// const API_KEY = '682127ed972e56f6bb70ae743d23c1d7';

// const BASE_URL = 'https://api.themoviedb.org/3';

// const params = {
//   page: 1,
//   language: 'en-US',
//   api_key: API_KEY,
//   // include_adult: false,
//   // include_video: false,
//   // sort_by: 'popularity.desc'
// };
// // https://api.themoviedb.org/3/movie/550?api_key=682127ed972e56f6bb70ae743d23c1d7 //przykładowe zapytanie całość ?

// const trendMoviesWeek = `${BASE_URL}/trending/movie/week`;
// const trendMoviesDay = `${BASE_URL}/trending/movie/day`;
// const newMovies = `${BASE_URL}/movie/upcoming`;
// const searchMovies = `${BASE_URL}/search/movie`;
// const moreAboutMovie = `${BASE_URL}/movie/{movie_id}`; // movie_id trzeba wtłoczyć
// const trailerMovie = `${BASE_URL}/movie/{movie_id}/videos`; // movie_id trzeba wtłoczyć
// const genreMovie = `${BASE_URL}/genre/movie/list`;
// const gcountryMovie = `${BASE_URL}/configuration/countries`;

// const draftMovieList = document.querySelector('#movieDraft');

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// async function fetchMovies(url, options) {
//   try {
//     const response = await axios.get(url, { params, ...options });
//     if (response.data.results) {
//       const movies = response.data.results;
//       console.log(movies);
//       displayMovies(movies);
//       return movies;
//     }
//   } catch (error) {
//     console.error(error);
//     throw new Error(`Error! status: ${error.response.status}`);
//   }
// }

// function displayMovies(movies) {
//   const moviesMarkup = movies.map(makeMovieItem).join('');
//   draftMovieList.insertAdjacentHTML('beforeend', moviesMarkup);
// }

// function makeMovieItem({
//   poster_path,
//   original_title,
//   overview,
//   genre_ids,
//   genres,
//   vote_average,
//   vote_count,
//   id,
//   origin_country,
//   release_date,
//   video,
//   popularity,
// }) {
//   return `<li class="fetch-api__movie-draft-item">
//     <a class="fetch-api__movie-draft-item-img" href="${BASE_URL}${poster_path}">
//       <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" />
//     </a>
//     <h2>Title: ${original_title}</h2>

//     <p>Descr: ${overview}</p>

//   </li>`;
// }

// // Example usage
// fetchMovies(newMovies, options);
