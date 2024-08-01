import axios from 'axios';

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

const catalogItem = (movie) =>{return `<li>
                        <div class="movielist-item"
                            style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), 
                                    url(https://image.tmdb.org/t/p/w500${movie.backdrop_path});
                                    background-repeat: no-repeat;
                                    background-size: cover; 
                                    background-position: center">
                        <div class="movielist__information-box">
                        <div class="movielist__title-box">
						<p class ="movielist__movie-title">${movie.title}</p>
						<p class ="movielist__movie-genre"> genre | ${movie.release_date.slice(0, 4)}</p>
					    </div>
                        <ul class="movielist__movie-rating">
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
					</ul>
					</div>
                    </div>
                    </li>
					`
}
const emptyResponse = ()=>{
    const moviesCatalog = document.querySelector('#catalogSection');
    catalogSection.innerHTML = `<div class="hero_background container">
                                    <h3 class="catalog__text-sorry">OOPS...</h3>
                                    <p class="catalog__text-sorry"> We are very sorry! We dont have any results matching your search.</p>
                                </div>`
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
    const htmlstructure =`
            <form class="catalog__form" id="catalogForm">
                <button class="btn btn__orange-gradient" id="catalogBtn">1</button>
                <button class="btn btn__orange-gradient" id="catalogBtn">2</button>
                <button class="btn btn__orange-gradient" id="catalogBtn">3</button>
                <span> ... </span>
                <button class="btn btn__orange-gradient" id="catalogBtn">${lastPage}</button>
            </form>`
    pagesBtnSection.innerHTML=htmlstructure
   
}
const createHeroMovie = results => {
    const heroSection = document.querySelector('#hero');
    const randomMovie = Math.floor(Math.random() * results.data.results.length);
    const topDayMovie = results.data.results[randomMovie];
    heroSection.innerHTML = `<div class="hero__background container" 
          style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), 
          url(https://image.tmdb.org/t/p/original${topDayMovie.backdrop_path})">
    <h2 class="hero__text-1">${topDayMovie.title}</h2>
    <ul class="movielist__rating-hero">
                          <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3909 18.7501C15.2594 18.7506 15.131 18.7096 15.0241 18.6329L10.0003 14.9907L4.97648 18.6329C4.86915 18.7108 4.73985 18.7525 4.60726 18.752C4.47467 18.7515 4.34567 18.7089 4.2389 18.6302C4.13214 18.5516 4.05315 18.4411 4.01335 18.3146C3.97355 18.1881 3.975 18.0523 4.0175 17.9267L5.97687 12.1232L0.898748 8.64073C0.788753 8.56539 0.705734 8.45684 0.661823 8.33095C0.617912 8.20506 0.615409 8.06843 0.65468 7.94102C0.693951 7.8136 0.772938 7.70209 0.8801 7.62276C0.987262 7.54344 1.11698 7.50046 1.25031 7.50011H7.51516L9.40578 1.68175C9.44651 1.55613 9.52598 1.44664 9.63279 1.36899C9.7396 1.29134 9.86826 1.24951 10.0003 1.24951C10.1324 1.24951 10.261 1.29134 10.3678 1.36899C10.4746 1.44664 10.5541 1.55613 10.5948 1.68175L12.4855 7.50206H18.7503C18.8838 7.502 19.0138 7.54467 19.1213 7.62385C19.2288 7.70302 19.3081 7.81453 19.3476 7.94204C19.3871 8.06955 19.3848 8.20636 19.3409 8.33244C19.297 8.45852 19.214 8.56724 19.1038 8.64269L14.0237 12.1232L15.982 17.9251C16.0137 18.019 16.0226 18.1192 16.008 18.2172C15.9934 18.3153 15.9556 18.4085 15.8979 18.4891C15.8402 18.5697 15.7641 18.6354 15.6759 18.6808C15.5878 18.7262 15.4901 18.7499 15.3909 18.7501Z" fill="url(#paint0_linear_409_10371)" />
    <defs>
      <linearGradient id="paint0_linear_409_10371" x1="2.91699" y1="2.50012" x2="15.417" y2="19.1668" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F84119" />
        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
      </linearGradient>
    </defs>
  </svg></li>
                          <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3909 18.7501C15.2594 18.7506 15.131 18.7096 15.0241 18.6329L10.0003 14.9907L4.97648 18.6329C4.86915 18.7108 4.73985 18.7525 4.60726 18.752C4.47467 18.7515 4.34567 18.7089 4.2389 18.6302C4.13214 18.5516 4.05315 18.4411 4.01335 18.3146C3.97355 18.1881 3.975 18.0523 4.0175 17.9267L5.97687 12.1232L0.898748 8.64073C0.788753 8.56539 0.705734 8.45684 0.661823 8.33095C0.617912 8.20506 0.615409 8.06843 0.65468 7.94102C0.693951 7.8136 0.772938 7.70209 0.8801 7.62276C0.987262 7.54344 1.11698 7.50046 1.25031 7.50011H7.51516L9.40578 1.68175C9.44651 1.55613 9.52598 1.44664 9.63279 1.36899C9.7396 1.29134 9.86826 1.24951 10.0003 1.24951C10.1324 1.24951 10.261 1.29134 10.3678 1.36899C10.4746 1.44664 10.5541 1.55613 10.5948 1.68175L12.4855 7.50206H18.7503C18.8838 7.502 19.0138 7.54467 19.1213 7.62385C19.2288 7.70302 19.3081 7.81453 19.3476 7.94204C19.3871 8.06955 19.3848 8.20636 19.3409 8.33244C19.297 8.45852 19.214 8.56724 19.1038 8.64269L14.0237 12.1232L15.982 17.9251C16.0137 18.019 16.0226 18.1192 16.008 18.2172C15.9934 18.3153 15.9556 18.4085 15.8979 18.4891C15.8402 18.5697 15.7641 18.6354 15.6759 18.6808C15.5878 18.7262 15.4901 18.7499 15.3909 18.7501Z" fill="url(#paint0_linear_409_10371)" />
    <defs>
      <linearGradient id="paint0_linear_409_10371" x1="2.91699" y1="2.50012" x2="15.417" y2="19.1668" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F84119" />
        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
      </linearGradient>
    </defs>
  </svg></li>
                          <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3909 18.7501C15.2594 18.7506 15.131 18.7096 15.0241 18.6329L10.0003 14.9907L4.97648 18.6329C4.86915 18.7108 4.73985 18.7525 4.60726 18.752C4.47467 18.7515 4.34567 18.7089 4.2389 18.6302C4.13214 18.5516 4.05315 18.4411 4.01335 18.3146C3.97355 18.1881 3.975 18.0523 4.0175 17.9267L5.97687 12.1232L0.898748 8.64073C0.788753 8.56539 0.705734 8.45684 0.661823 8.33095C0.617912 8.20506 0.615409 8.06843 0.65468 7.94102C0.693951 7.8136 0.772938 7.70209 0.8801 7.62276C0.987262 7.54344 1.11698 7.50046 1.25031 7.50011H7.51516L9.40578 1.68175C9.44651 1.55613 9.52598 1.44664 9.63279 1.36899C9.7396 1.29134 9.86826 1.24951 10.0003 1.24951C10.1324 1.24951 10.261 1.29134 10.3678 1.36899C10.4746 1.44664 10.5541 1.55613 10.5948 1.68175L12.4855 7.50206H18.7503C18.8838 7.502 19.0138 7.54467 19.1213 7.62385C19.2288 7.70302 19.3081 7.81453 19.3476 7.94204C19.3871 8.06955 19.3848 8.20636 19.3409 8.33244C19.297 8.45852 19.214 8.56724 19.1038 8.64269L14.0237 12.1232L15.982 17.9251C16.0137 18.019 16.0226 18.1192 16.008 18.2172C15.9934 18.3153 15.9556 18.4085 15.8979 18.4891C15.8402 18.5697 15.7641 18.6354 15.6759 18.6808C15.5878 18.7262 15.4901 18.7499 15.3909 18.7501Z" fill="url(#paint0_linear_409_10371)" />
    <defs>
      <linearGradient id="paint0_linear_409_10371" x1="2.91699" y1="2.50012" x2="15.417" y2="19.1668" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F84119" />
        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
      </linearGradient>
    </defs>
  </svg></li>
                          <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3909 18.7501C15.2594 18.7506 15.131 18.7096 15.0241 18.6329L10.0003 14.9907L4.97648 18.6329C4.86915 18.7108 4.73985 18.7525 4.60726 18.752C4.47467 18.7515 4.34567 18.7089 4.2389 18.6302C4.13214 18.5516 4.05315 18.4411 4.01335 18.3146C3.97355 18.1881 3.975 18.0523 4.0175 17.9267L5.97687 12.1232L0.898748 8.64073C0.788753 8.56539 0.705734 8.45684 0.661823 8.33095C0.617912 8.20506 0.615409 8.06843 0.65468 7.94102C0.693951 7.8136 0.772938 7.70209 0.8801 7.62276C0.987262 7.54344 1.11698 7.50046 1.25031 7.50011H7.51516L9.40578 1.68175C9.44651 1.55613 9.52598 1.44664 9.63279 1.36899C9.7396 1.29134 9.86826 1.24951 10.0003 1.24951C10.1324 1.24951 10.261 1.29134 10.3678 1.36899C10.4746 1.44664 10.5541 1.55613 10.5948 1.68175L12.4855 7.50206H18.7503C18.8838 7.502 19.0138 7.54467 19.1213 7.62385C19.2288 7.70302 19.3081 7.81453 19.3476 7.94204C19.3871 8.06955 19.3848 8.20636 19.3409 8.33244C19.297 8.45852 19.214 8.56724 19.1038 8.64269L14.0237 12.1232L15.982 17.9251C16.0137 18.019 16.0226 18.1192 16.008 18.2172C15.9934 18.3153 15.9556 18.4085 15.8979 18.4891C15.8402 18.5697 15.7641 18.6354 15.6759 18.6808C15.5878 18.7262 15.4901 18.7499 15.3909 18.7501Z" fill="url(#paint0_linear_409_10371)" />
    <defs>
      <linearGradient id="paint0_linear_409_10371" x1="2.91699" y1="2.50012" x2="15.417" y2="19.1668" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F84119" />
        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
      </linearGradient>
    </defs>
  </svg></li>
                          <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3909 18.7501C15.2594 18.7506 15.131 18.7096 15.0241 18.6329L10.0003 14.9907L4.97648 18.6329C4.86915 18.7108 4.73985 18.7525 4.60726 18.752C4.47467 18.7515 4.34567 18.7089 4.2389 18.6302C4.13214 18.5516 4.05315 18.4411 4.01335 18.3146C3.97355 18.1881 3.975 18.0523 4.0175 17.9267L5.97687 12.1232L0.898748 8.64073C0.788753 8.56539 0.705734 8.45684 0.661823 8.33095C0.617912 8.20506 0.615409 8.06843 0.65468 7.94102C0.693951 7.8136 0.772938 7.70209 0.8801 7.62276C0.987262 7.54344 1.11698 7.50046 1.25031 7.50011H7.51516L9.40578 1.68175C9.44651 1.55613 9.52598 1.44664 9.63279 1.36899C9.7396 1.29134 9.86826 1.24951 10.0003 1.24951C10.1324 1.24951 10.261 1.29134 10.3678 1.36899C10.4746 1.44664 10.5541 1.55613 10.5948 1.68175L12.4855 7.50206H18.7503C18.8838 7.502 19.0138 7.54467 19.1213 7.62385C19.2288 7.70302 19.3081 7.81453 19.3476 7.94204C19.3871 8.06955 19.3848 8.20636 19.3409 8.33244C19.297 8.45852 19.214 8.56724 19.1038 8.64269L14.0237 12.1232L15.982 17.9251C16.0137 18.019 16.0226 18.1192 16.008 18.2172C15.9934 18.3153 15.9556 18.4085 15.8979 18.4891C15.8402 18.5697 15.7641 18.6354 15.6759 18.6808C15.5878 18.7262 15.4901 18.7499 15.3909 18.7501Z" fill="url(#paint0_linear_409_10371)" />
    <defs>
      <linearGradient id="paint0_linear_409_10371" x1="2.91699" y1="2.50012" x2="15.417" y2="19.1668" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F84119" />
        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
      </linearGradient>
    </defs>
  </svg></li>
  
                      </ul>
    <p class="hero__text-2" id="hero_text">${topDayMovie.overview}</p>
            
    <div class="buttons">
      <button class="btn btn__orange-gradient">Watch trailer</button>
      <button class="btn btn__black">More details</button>
    </div>
  </div>`;
  };

  function createDefaultHeroSection() {
    const heroSection = document.querySelector('#hero');
    heroSection.innerHTML = `<div class="hero_background container">
        <h2 class="hero__text-1">Let’s Make Your Own Cinema</h2>
        <h3 class="hero__text-2" id="hero_text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.</h3>
        <button class="hero__button" onclick="window.location.href='catalog.html';">
          <span class="hero__span-button">Get Started</span>
        </button>
      </div>`;}





const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
        const length=resResponse.data.results.length
        if (url.includes('day')) {
            
            if (length===0){
               createDefaultHeroSection()
               return;
            }
            createHeroMovie(resResponse)
            return;
        }
        if (length===0){
            emptyResponse()
            return;
          }
        //console.log("week:", resResponse.data)
        crateCatalog(resResponse.data.results)
        createPagesBtn(resResponse.data.total_results, 20)
        return;
    })
    .catch(error => {
        emptyResponse()
        createDefaultHeroSection()
      return console.log(error)});

const homePageContent = async () => 
    await Promise.all([
        homePageApiData(urls.urlDay),
        homePageApiData(urls.urlWeek)
      ]);

homePageContent();
