import axios from 'axios';
import {
  genres,
  fullStar,
  halfStar,
  emptyStar,
  heroFragment,
  topMoviesFragment,
  upcomingMovieFragment,
  emptyApiResponeHero,
} from './api-html-fragment.js';

const params = {
  page: 1,
  language: 'en-US',
  api_key: '682127ed972e56f6bb70ae743d23c1d7',
};
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${params.api_key}`,
  },
};

const urls = {
  trendMoviesDay: `https://api.themoviedb.org/3/trending/movie/day`,
  trendMoviesWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming`,
};
const generateStars = (rating, starClass) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return `
    ${fullStar.replace('star', starClass).repeat(fullStars)}
    ${halfStar.replace('star', starClass).repeat(halfStars)}
    ${emptyStar.replace('star', starClass).repeat(emptyStars)}
  `;
};

const createHeroMovie = resResponse => {
  const maxLength = 200;
  const heroSection = document.querySelector('#hero');
  const randomMovieIndex = Math.floor(
    Math.random() * resResponse.data.results.length
  );
  const topDayMovie = resResponse.data.results[randomMovieIndex];
  const cutText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  const truncatedOverview = cutText(topDayMovie.overview, maxLength);
  const rating = topDayMovie.vote_average / 2;
  const starsHTML = generateStars(rating, 'hero-star');

  heroSection.innerHTML = heroFragment(
    topDayMovie.id,
    topDayMovie.backdrop_path,
    topDayMovie.title,
    starsHTML,
    truncatedOverview
  );
};

const movieGenresCompare = (arr1, arr2) => {
  const finalArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i].id)) {
      finalArr.push(arr1[i].name);
    }
  }

  return finalArr.slice(0, 2).join(', ');
};

const catalogItem = movie => {
  const movieGenres = movieGenresCompare(genres, movie.genre_ids);
  const releaseYear = movie.release_date.slice(0, 4);
  const rating = movie.vote_average / 2;
  const starsHTML = generateStars(rating, 'card-star');
  return topMoviesFragment(
    movie.id,
    movie.backdrop_path,
    movie.title,
    movieGenres,
    releaseYear,
    starsHTML,
    movie.id
  );
};

const crateCatalog = movies => {
  const moviesCatalog = document.querySelector('#catalogMovielist');
  let weekMoviesSectionFragment = '';
  for (let index = 0; index < 3; index++) {
    weekMoviesSectionFragment =
      weekMoviesSectionFragment + catalogItem(movies[index]);
  }
  moviesCatalog.innerHTML = weekMoviesSectionFragment;
};

const createUpcomingMovie = movies => {
  const upcomingSection = document.querySelector('#upcoming');
  const randomMovie = Math.floor(Math.random() * movies.length);
  const upcomingMovie = movies[randomMovie];
  const movieGenres = movieGenresCompare(genres, upcomingMovie.genre_ids);
  const roundedVoteAverage = Math.round(upcomingMovie.vote_average * 10) / 10;
  const roundedVPopularity = parseInt(upcomingMovie.popularity);
  upcomingSection.innerHTML = upcomingMovieFragment(
    upcomingMovie.id,
    upcomingMovie.backdrop_path,
    upcomingMovie.title,
    upcomingMovie.overview,
    upcomingMovie.release_date,
    roundedVoteAverage,
    upcomingMovie.vote_count,
    roundedVPopularity,
    movieGenres
  );
};
function updateTextHero(description) {
  const heroText = document.getElementById('hero_text');

  if (window.innerWidth >= 768) {
    heroText.textContent =
      description ||
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  } else {
    heroText.textContent =
      description ||
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    heroText.classList.add('hero_text_2');
  }
}

function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML = emptyApiResponeHero;
  updateTextHero();
  window.addEventListener('resize', () => updateTextHero());
}

document.addEventListener('DOMContentLoaded', () => {
  createDefaultHeroSection();
});

const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
      if (url.includes('day')) {
        const length = resResponse.data.results.length;
        // const length = 0;
        if (length === 0) {
          createDefaultHeroSection();
          return;
        }

        createHeroMovie(resResponse);
        return;
      }
      if (url.includes('week')) {

        crateCatalog(resResponse.data.results);
        return;
      }
      if (url.includes('upcoming')) {

        createUpcomingMovie(resResponse.data.results);
        return;
      }
    })
    .catch(error => {
      if (url.includes('day')) {
        if (length === 0) {
          createDefaultHeroSection();
          return;
        }
      }
      console.log(error);
    });

const homePageContent = async () =>
  await Promise.all([
    homePageApiData(urls.trendMoviesDay),
    homePageApiData(urls.trendMoviesWeek),
    homePageApiData(urls.upcomingMovies),
  ]);

homePageContent();

window.addEventListener('click', event => {
  if (event.target.parentElement.id === 'logo') {
    const moviesCatalog = document.querySelector('#trends');
    moviesCatalog.remove();

    const upcomingSection = document.querySelector('#upcoming');
    const upcomingChild = document.querySelector('#upcoming > div');
    upcomingSection.removeChild(upcomingChild);

    const heroSection = document.querySelector('#hero');
    const heroChild = document.querySelector('#hero > div');
    heroSection.removeChild(heroChild);

    params.api_key = '';
    const serverErrorContent = async () =>
      await Promise.all([
        homePageApiData(urls.trendMoviesDay),
        homePageApiData(urls.trendMoviesWeek),
        homePageApiData(urls.upcomingMovies),
      ]);
    serverErrorContent();
  }
});
