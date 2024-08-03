import axios from 'axios';
import {
  genres,
  fullStar,
  halfStar,
  emptyStar,
  heroFragment,
  topMoviesFragment,
  pagesBtn,
  pagesBtn2,
  pagesBtn3,
  pagesBtn4,
  emptyApiResponeHero,
  emptyApiResponeCatalog,
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
  urlDay: `https://api.themoviedb.org/3/trending/movie/day`,
  urlWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  urlSearch:`https://api.themoviedb.org/3/search/movie`,
  url:``,
  title:``,
  maxPages: 1,
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
  const randomMovieIndex = Math.floor(
    Math.random() * resResponse.data.results.length
  );
  const topDayMovie = resResponse.data.results[randomMovieIndex];

  const cutText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  const truncatedOverview = cutText(topDayMovie.overview, maxLength);
  const rating = topDayMovie.vote_average / 2;
  const starsHTML = generateStars(rating);

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
  for (i = 0; i < arr1.length; i += 1) {
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
  const starsHTML = generateStars(rating);
  return topMoviesFragment(
    movie.id,
    movie.backdrop_path,
    movie.title,
    movieGenres,
    releaseYear,
    starsHTML
  );
};
const emptyResponseCatalog = () => {
  const moviesCatalog = document.querySelector('#catalg');
  moviesCatalog.innerHTML = emptyApiResponeCatalog;
};
const crateCatalog = movies => {
  const moviesCatalog = document.querySelector('#catalg');
  let weekMoviesSectionFragment = '';
  movies.forEach(movie => {
    weekMoviesSectionFragment = weekMoviesSectionFragment + catalogItem(movie);
  });
  moviesCatalog.innerHTML = weekMoviesSectionFragment;
};

const numberingBtn=(pagesNumber, maxPagesNumber)=>{
    console.log(maxPagesNumber)
    if(maxPagesNumber===1)return
    const pagesBtnSection = document.querySelector('#pagesBtnSection');
    const prageNumbers ={
                        pageBtn1: 1,
                        pageBtn2: 2,
                        pageBtn3: 3,
                        pageBtn4: 4,
                        pageBtn5: 5,
                        }
    if(maxPagesNumber===2){
        pagesBtnSection.innerHTML = pagesBtn2
        if (pagesNumber===1) document.querySelector("#PageBtn1").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===2) document.querySelector("#PageBtn2").classList.replace('btn__orange-gradient', 'btn__black')
        return 
    }
    if(maxPagesNumber===3){
        pagesBtnSection.innerHTML = pagesBtn3
        if (pagesNumber===1) document.querySelector("#PageBtn1").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===2) document.querySelector("#PageBtn2").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===3) document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black')
        return 
    }
    if(maxPagesNumber===4){
        pagesBtnSection.innerHTML = pagesBtn4
        if (pagesNumber===1) document.querySelector("#PageBtn1").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===2) document.querySelector("#PageBtn2").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===3) document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===3) document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black')
        return 
 
    }


    if(pagesNumber<4){
        pagesBtnSection.innerHTML = pagesBtn(prageNumbers.pageBtn1, prageNumbers.pageBtn2, prageNumbers.pageBtn3, prageNumbers.pageBtn4, prageNumbers.pageBtn5);
        if (pagesNumber===1) document.querySelector("#PageBtn1").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===2) document.querySelector("#PageBtn2").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===3) document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black') 
        return 
    }


    if( (pagesNumber + 3) > maxPagesNumber){
        prageNumbers.pageBtn1= (maxPagesNumber - 4)
        prageNumbers.pageBtn2= (maxPagesNumber - 3)
        prageNumbers.pageBtn3= (maxPagesNumber - 2)
        prageNumbers.pageBtn4= (maxPagesNumber - 1)
        prageNumbers.pageBtn5= (maxPagesNumber) 
        pagesBtnSection.innerHTML = pagesBtn(prageNumbers.pageBtn1, prageNumbers.pageBtn2, prageNumbers.pageBtn3, prageNumbers.pageBtn4, prageNumbers.pageBtn5); 
        if (pagesNumber===maxPagesNumber - 2) document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===maxPagesNumber - 1) document.querySelector("#PageBtn4").classList.replace('btn__orange-gradient', 'btn__black')
        if (pagesNumber===maxPagesNumber) document.querySelector("#PageBtn5").classList.replace('btn__orange-gradient', 'btn__black')  
        return 
    }
    if(pagesNumber>3){
        prageNumbers.pageBtn1= (pagesNumber - 2)
        prageNumbers.pageBtn2= (pagesNumber - 1) 
        prageNumbers.pageBtn3= pagesNumber
        prageNumbers.pageBtn4= (pagesNumber + 1)
        prageNumbers.pageBtn5= (pagesNumber + 2)
        pagesBtnSection.innerHTML = pagesBtn(prageNumbers.pageBtn1, prageNumbers.pageBtn2, prageNumbers.pageBtn3, prageNumbers.pageBtn4, prageNumbers.pageBtn5);
        document.querySelector("#PageBtn3").classList.replace('btn__orange-gradient', 'btn__black')
        return      
    }
}
function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML = emptyApiResponeHero;
}

const catalogPageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
      const length = resResponse.data.results.length;
      //const length = 0
      if (url.includes('day')) {
        if (length === 0) {
          createDefaultHeroSection();
          return;
        }
        createHeroMovie(resResponse);
        return;
      }
      if (length === 0) {
        emptyResponseCatalog();
        return;
      }
      urls.maxPages=resResponse.data.total_pages
      urls.url=url
      crateCatalog(resResponse.data.results);
      numberingBtn(params.page, urls.maxPages)
      return;
    })
    .catch(error => {
      emptyResponseCatalog();
      createDefaultHeroSection();
      return console.log(error);
    });

const catalogPageContent = async () =>
  await Promise.all([
    catalogPageApiData(urls.urlDay),
    catalogPageApiData(urls.urlWeek),
  ]);

catalogPageContent();

const PageApiData = url =>
    axios
        .get(url, { params, ...options })
        .then(resResponse => {
            const length=resResponse.data.results.length
            if (document.querySelector('#catalg').hasChildNodes()) {
                const childs = document.querySelectorAll("#catalg > li");
                childs.forEach(child => child.remove());
            }
            if (document.querySelector('#navForm')!==null)
                document.querySelector("#navForm").remove();
            

             if (length===0){
                emptyResponseCatalog()
                return;
              }
            urls.maxPages=resResponse.data.total_pages
            crateCatalog(resResponse.data.results)
            numberingBtn(params.page, urls.maxPages)
            return;
        })
        .catch(error => {
            emptyResponseCatalog()
            numberingBtn(params.page, urls.maxPages)
            //document.querySelector("#navForm").remove()
            return console.log(error)}
              );

window.addEventListener("click" , event=>{
    try {
        if (event.target.id ==="searchBtn") {
            event.preventDefault();
            if (document.querySelector('#catalogFormInput').value.trim()=="") {
                 return
             }
            urls.url=`https://api.themoviedb.org/3/search/movie`
            params.page=1
            urls.title= document.querySelector('#catalogFormInput').value.trim()

            const searchUrl=`${urls.url}?query=${urls.title}&include_adult=false` 

            const PageContent = async () => await PageApiData(searchUrl)
            PageContent();

        }
        if (event.target.parentElement.id ==="navForm" &
            event.target.id !=="previousPage" & event.target.id !=="nextPage" & 
            event.target.id !=="firstPageBtn" & event.target.id !=="lastPageBtn") {
            event.preventDefault();
            params.page=parseInt(event.target.textContent)
            let navUrl= urls.url
            if(navUrl.includes("search")){
                navUrl=navUrl+`?query=${urls.title}&include_adult=false`
            }
            const PageContent = async () => await PageApiData(navUrl)
            
            PageContent(); 
        }
        if(event.target.id ==="previousPage" || event.target.id ==="nextPage"){
            if(event.target.id ==="previousPage"){
                    console.log("previousPage")
                    if(params.page>1) params.page = params.page-1
                    
            }
            if(event.target.id ==="nextPage"){
                console.log("nextPage")
                if(params.page< urls.maxPages) params.page = params.page+1
            }
            const naxUrl=`${urls.url}?query=${urls.title}&include_adult=false` 

            const PageContent = async () => await PageApiData(naxUrl)
            PageContent();
      
        }
        if(event.target.id ==="firstPageBtn" || event.target.id ==="lastPageBtn"){
            if(event.target.id ==="firstPageBtn"){
                    console.log("firstPageBtn")
                    params.page = 1
                    
            }
            if(event.target.id ==="lastPageBtn"){
                console.log("lastPageBtn")
                params.page = urls.maxPages
            }
            const marginUrl=`${urls.url}?query=${urls.title}&include_adult=false` 

            const PageContent = async () => await PageApiData(marginUrl)
            PageContent();
      
        }

    } catch (error) {
    console.error(error);
    }

    
} )

