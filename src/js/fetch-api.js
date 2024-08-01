import axios from 'axios';

const API_KEY = '682127ed972e56f6bb70ae743d23c1d7';

// ----------------------------------------

const fullStar = `
<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F84119"/>
      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
    </linearGradient>
  </defs>
</svg>`;

const halfStar = `
<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F84119"/>
      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
    </linearGradient>
  </defs>
  <mask id="halfMask">
    <rect x="0" y="0" width="9" height="18" fill="white"/>
  </mask>
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" fill="rgba(248, 65, 25, 1)" mask="url(#halfMask)"/>
</svg>`;

const emptyStar = `
<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke-linejoin="round"/>
</svg>`;

// ----------------------------------------------

const generateStars = rating => {
  let fullStars = Math.floor(rating);
  let halfStars = rating % 1 >= 0.5 ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStars;

  console.log('Pełne gwiazdki:', fullStars);
  console.log('Połówkowe gwiazdki:', halfStars);
  console.log('Puste gwiazdki:', emptyStars);

  return `${fullStar.repeat(fullStars)}${halfStar.repeat(
    halfStars
  )}${emptyStar.repeat(emptyStars)}`;
};
// ---------------------------------------------
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

const urls = {
  trendMoviesDay: `https://api.themoviedb.org/3/trending/movie/day`,
  trendMoviesWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming`,
};

const createHeroMovie = results => {
  const heroSection = document.querySelector('#hero');

  if (
    !results ||
    !results.data ||
    !results.data.results ||
    results.data.results.length === 0
  ) {
    console.error('Invalid results data');
    return;
  }

  const randomMovieIndex = Math.floor(
    Math.random() * results.data.results.length
  );
  const topDayMovie = results.data.results[randomMovieIndex];

  if (!topDayMovie) {
    console.error('No movie data available');
    return;
  }

  const cutText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const maxLength = 200;
  const truncatedOverview = cutText(topDayMovie.overview, maxLength);

  const rating = topDayMovie.vote_average / 2;
  console.log('Ocena z API:', rating);
  const starsHTML = generateStars(rating);

  heroSection.innerHTML = `
    <div class="hero__background container" 
      style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), 
      url(https://image.tmdb.org/t/p/original${topDayMovie.backdrop_path})">
      <h2 class="hero__text-1">${topDayMovie.title}</h2>
      <ul class="movielist__rating-hero">
        ${starsHTML}
      </ul>
      <p class="hero__text-2" id="hero_text">${truncatedOverview}</p>
      <div class="buttons">
        <button class="btn__hero-1">Watch trailer</button>
        <button class="btn__hero-2">More details</button>
      </div>
    </div>`;
};

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const movieGenresCompare = (arr1, arr2) => {
  const finalArr = [];
  for (i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i].id)) {
      finalArr.push(arr1[i].name);
    }
  }

  return finalArr.slice(0, 2).join(', ');
};

const TopWeekMovieBox = (index, results) => {
  const TopWeekMovie = results.data.results[index];
  const releaseYear = TopWeekMovie.release_date.slice(0, 4);
  const movieGenresIds = TopWeekMovie.genre_ids;
  const movieGenres = movieGenresCompare(genres, movieGenresIds);
  return `<li>
  <div class="movielist-item"
                   style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${TopWeekMovie.backdrop_path});
                    background-repeat: no-repeat;
                    background-size: cover; 
                    background-position: center">
                    <div class="movielist__information-box">
                    <div class="movielist__title-box">
						<p class ="movielist__movie-title">${TopWeekMovie.title}</p>
						<p class ="movielist__movie-genre"> ${movieGenres} | ${releaseYear}</p>
					    </div>
                        <ul class="movielist__movie-rating">
						<li>
            <svg width="10px" height="10px">
  <use href="./images/icons_desktop.svg#icon_star_large"></use>
</svg>
  </li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
					</ul>
					</div>
                    </div>
                    </li>
					`;

  //   `<li class="movielist__movie-itemt">
  //     <img class="movielist__movie-image"
  //         src="https://image.tmdb.org/t/p/w500${TopWeekMovie.backdrop_path}"
  //         alt="Poster of ${TopWeekMovie.title}"
  //     />
  //             <div class="movielist__movie-description">
  //     <h3>${TopWeekMovie.title}</h3>
  //                 <div class="movielist__-movie-details">
  //         <p>Drama, Action</p>
  //         <p>${TopWeekMovie.release_date}</p>
  //       </div>
  //   </div>
  //   <ul class="movielist__rating-list">
  //     <li>*</li>
  //     <li>*</li>
  //     <li>*</li>
  //     <li>*</li>
  //     <li>*</li>
  //   </ul>
  // </li>`;
};

const createWeekMovies = results => {
  const weekMoviesSection = document.querySelector('#catalogMovielist');
  const weekMoviesSectionFragment =
    TopWeekMovieBox(0, results) +
    TopWeekMovieBox(1, results) +
    TopWeekMovieBox(2, results);
  weekMoviesSection.innerHTML = weekMoviesSectionFragment;
};

const createUpcomingMovie = results => {
  const upcomingSection = document.querySelector('#upcoming');
  const randomMovie = Math.floor(Math.random() * results.data.results.length);
  const upcomingMovie = results.data.results[randomMovie];
  upcomingSection.innerHTML = `<h2 class="upcoming-header-one">UPCOMING THIS MONTH</h2>
        <div class="upcoming__film-box">
        <img class="upcoming-image"
        src="https://image.tmdb.org/t/p/w500${upcomingMovie.backdrop_path}"
       
        alt="Logo of this page"
        />
            <div class="upcoming__film-details-box">
                <h3 class="upcoming-header-two">${upcomingMovie.title}</h3>
                <div class="upcoming__film-details">
                    <div>
						<p class="upcoming-p">Release date</p>
						<p class="upcoming-p">Vote / Votes</p>
						<p class="upcoming-p">Popularit</p>
						<p class="upcoming-p">Genre</p>
					</div>
                    <div>
						<p class="upcoming-p-two upcoming-p-style">03.03.2023</p>
						<p class="upcoming__film-rating upcoming-p-style"><span class="upcoming-box">7.3</span>  /  <span class="upcoming-box">1260</span></p>
						<p class="upcoming-p-style">99.9</p>
						<p>Comedy, action</p>
					</div>
				</div>
				<h4 class="upcoming-header-three">ABOUT</h4>
				<p class="upcoming-p-three">${upcomingMovie.overview}</p>
			    <button class="btn btn__big btn__orange-gradient">Add to my library</button>`;
};
const updateTextHero = () => {
  const heroText = document.getElementById('hero_text');

  if (window.innerWidth >= 768) {
    heroText.textContent =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  } else {
    heroText.textContent =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    heroText.classList.add('hero_text_2');
  }
};
function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero'); // Usuń znak '#'
  console.log('dupa');
  // Ustawienie zawartości
  heroSection.innerHTML = `
    <div class="hero_background-2 container">
      <h2 class="hero__text-1">Let’s Make Your Own Cinema</h2>
      <h3 class="hero__text-2" id="hero_text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.</h3>
      <div class = "buttons"><button class="btn__hero-1 " onclick="window.location.href='catalog.html';">
        <span class="hero__span-button">Get Started</span>
      </button></div>
    </div>
  `;

  updateTextHero();

  window.addEventListener('resize', updateTextHero);
}

const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(results => {
      if (url.includes('day')) {
        //console.log("day:", results)
        createHeroMovie(results);
        return;
      }
      if (results.data.results.length === 0) {
        createDefaultHeroSection();
        return;
      }
      if (url.includes('week')) {
        //console.log("week:", results)
        createWeekMovies(results);
        return;
      }
      if (url.includes('upcoming')) {
        //console.log("upcoming:", results)
        createUpcomingMovie(results);
        return;
      }
    })
    .catch(error => console.log(error));

const homePageContent = async () =>
  await Promise.all([
    homePageApiData(urls.trendMoviesDay),
    homePageApiData(urls.trendMoviesWeek),
    homePageApiData(urls.upcomingMovies),
  ]);

homePageContent();
