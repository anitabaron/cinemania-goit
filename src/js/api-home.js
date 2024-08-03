import axios from 'axios';
import {genres, fullStar, halfStar, emptyStar, 
  heroFragment, topMoviesFragment, 
  upcomingMovieFragment, emptyApiResponeHero, 
  emptyApiResponeCatalog} from './api-html-fragment.js'

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

  console.log('Rating:', rating);
  console.log('Full Stars:', fullStars);
  console.log('Half Stars:', halfStars);
  console.log('Empty Stars:', emptyStars);

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

  heroSection.innerHTML =heroFragment(topDayMovie.id, topDayMovie.backdrop_path, topDayMovie.title, starsHTML, truncatedOverview)
};

// const createHeroMovie = results => {
//   // if (
//   //   !results ||
//   //   !results.data ||
//   //   !results.data.results ||
//   //   results.data.results.length === 0
//   // ) {
//   //   console.error('Invalid results data');
//   //   return;
//   // }
// };



const movieGenresCompare = (arr1, arr2) => {
	const finalArr = [];
	for (i = 0; i < arr1.length; i += 1) {
				if (arr2.includes(arr1[i].id)) {
					finalArr.push(arr1[i].name)
				}
			}

	return finalArr.slice(0,2).join(", ");
}

const catalogItem = (movie) =>{
  const movieGenres = movieGenresCompare(genres, movie.genre_ids)
  const releaseYear = movie.release_date.slice(0, 4);
  const rating = movie.vote_average / 2;
  const starsHTML = generateStars(rating, 'card-star');
  return topMoviesFragment(movie.id, movie.backdrop_path, movie.title, movieGenres, releaseYear, starsHTML, movie.id)
}

const crateCatalog = (movies)=>{
  const moviesCatalog = document.querySelector('#catalogMovielist');
  let weekMoviesSectionFragment=""
  for (let index = 0; index < 3; index++) {
    weekMoviesSectionFragment = weekMoviesSectionFragment + catalogItem(movies[index])
  }
  moviesCatalog.innerHTML=weekMoviesSectionFragment
}

const createUpcomingMovie = movies => {
  
  const upcomingSection = document.querySelector('#upcoming');
  const randomMovie = Math.floor(Math.random() * movies.length);
  const upcomingMovie = movies[randomMovie];
  console.log(upcomingMovie.id)
  upcomingSection.innerHTML = upcomingMovieFragment(upcomingMovie.id, upcomingMovie.backdrop_path, upcomingMovie.title, upcomingMovie.overview)
};
function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML = emptyApiResponeHero;}


const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
      if (url.includes('day')) {
        const length=resResponse.data.results.length
        //const length =0
        if (length===0){
          createDefaultHeroSection()
          return;
        }
        //console.log("day:", results)
        createHeroMovie(resResponse);
        return;
      }
      if (url.includes('week')) {
        //console.log("week:", results)
        crateCatalog(resResponse.data.results);
        return;
      }
      if (url.includes('upcoming')) {
        //console.log("upcoming:", results)
        createUpcomingMovie(resResponse.data.results);
        return;
      }
    })
    .catch(error => {
      if (url.includes('day')) {
        if (length===0){
          createDefaultHeroSection()
          return;
        }}
      console.log(error)});

const homePageContent = async () =>
  await Promise.all([
    homePageApiData(urls.trendMoviesDay),
    homePageApiData(urls.trendMoviesWeek),
    homePageApiData(urls.upcomingMovies),
  ]);

homePageContent();
