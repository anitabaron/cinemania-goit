import axios from 'axios';
import {genres, fullStar, halfStar, emptyStar, 
        heroFragment, topMoviesFragment, 
        pagesBtnStartup, emptyApiResponeHero, 
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

  urlDay: `https://api.themoviedb.org/3/trending/movie/day`,
  urlWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  page:1,
  quantity: 20,
};

const generateStars = rating => {
    let fullStars = Math.floor(rating);
    let halfStars = rating % 1 >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStars;
    return `${fullStar.repeat(fullStars)}${halfStar.repeat(
      halfStars
    )}${emptyStar.repeat(emptyStars)}`;
  };
  
const createHeroMovie = resResponse => {
    const maxLength = 200;
    const heroSection = document.querySelector('#hero');
    const randomMovieIndex = Math.floor(Math.random() * resResponse.data.results.length);
    const topDayMovie = resResponse.data.results[randomMovieIndex];
    
    const cutText = (text, maxLength) => text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    const truncatedOverview = cutText(topDayMovie.overview, maxLength);
    const rating = topDayMovie.vote_average / 2;
    const starsHTML = generateStars(rating);

    heroSection.innerHTML =heroFragment(topDayMovie.id, topDayMovie.backdrop_path, topDayMovie.title, starsHTML, truncatedOverview)
  };

//nie działa
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
    const movieGenres = movieGenresCompare(movie.genre_ids, genres)
    const releaseYear = movie.release_date.slice(0, 4);
    const rating = movie.vote_average / 2;
    const starsHTML = generateStars(rating);
    console.log(movieGenres)
    return topMoviesFragment(movie.id, movie.backdrop_path, movie.title, movieGenres, releaseYear, starsHTML)
}
const emptyResponseCatalog = ()=>{
    const moviesCatalog = document.querySelector('#catalogSection');
    catalogSection.innerHTML = emptyApiResponeCatalog
}
const crateCatalog = (movies)=>{
    const moviesCatalog = document.querySelector('#catalg');
    let weekMoviesSectionFragment=""
    movies.forEach( (movie) =>{ 
        weekMoviesSectionFragment = weekMoviesSectionFragment + catalogItem(movie)
    });
moviesCatalog.innerHTML=weekMoviesSectionFragment
}
const createPagesBtn =(totalItems, itemsPerPage) =>{
    const pagesBtnSection = document.querySelector('#pagesBtnSection');
    const lastPage = (totalItems / itemsPerPage)
    pagesBtnSection.innerHTML=pagesBtnStartup(lastPage)
   
}
  function createDefaultHeroSection() {
    const heroSection = document.querySelector('#hero');
    heroSection.innerHTML = emptyApiResponeHero;}

const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
        const length=resResponse.data.results.length
        //const length = 0
        if (url.includes('day')) {
            
            if (length===0){
               createDefaultHeroSection()
               return;
            }
            createHeroMovie(resResponse)
            return;
        }
        if (length===0){
            emptyResponseCatalog()
            return;
          }
        crateCatalog(resResponse.data.results)
        createPagesBtn(resResponse.data.total_results, 20)
        return;
    })
    .catch(error => {
        emptyResponseCatalog()
        createDefaultHeroSection()
      return console.log(error)});

const homePageContent = async () => 
    await Promise.all([
        homePageApiData(urls.urlDay),
        homePageApiData(urls.urlWeek)
      ]);

homePageContent();

