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


const createHeroMovie = (results) =>{
  const heroSection =document.querySelector('#hero')
  const randomMovie = Math.floor(Math.random() * results.data.results.length);
  const topDayMovie =results.data.results[randomMovie]
  heroSection.innerHTML=
  `<div class="hero__background container" 
        style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), 
        url(https://image.tmdb.org/t/p/w500${topDayMovie.backdrop_path});">
  <h2 class="hero__text-1">${topDayMovie.title}</h2>
  <ul class="movielist__rating-list">
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
					</ul>
  <p class="hero__text-2" id="hero_text">${topDayMovie.overview}</p>
  		
  <div class="buttons">
    <button class="btn btn__orange-gradient">Watch trailer</button>
    <button class="btn btn__black">More details</button>
  </div>
</div>`
}


const TopWeekMovieBox =(index, results)=>{
  const TopWeekMovie =results.data.results[index]
  return`<li class="movielist__movie-itemt">
    <img class="movielist__movie-image"
        src="https://image.tmdb.org/t/p/w500${TopWeekMovie.backdrop_path}"
        alt="Poster of ${TopWeekMovie.title}"
    />
            <div class="movielist__movie-description">
    <h3>${TopWeekMovie.title}</h3>
                <div class="movielist__-movie-details">
        <p>Drama, Action</p>
        <p>${TopWeekMovie.release_date}</p>
      </div>
  </div>
  <ul class="movielist__rating-list">
    <li>*</li>
    <li>*</li>
    <li>*</li>
    <li>*</li>
    <li>*</li>
  </ul>
</li>`}

const createWeekMovies = (results) =>{
  const weekMoviesSection =document.querySelector('#catalogMovielist')
   const weekMoviesSectionFragment = TopWeekMovieBox(0, results)
                                    +TopWeekMovieBox(1, results)
                                    +TopWeekMovieBox(2, results)
   weekMoviesSection.innerHTML=weekMoviesSectionFragment
}

const createUpcomingMovie = (results) =>{
  const upcomingSection =document.querySelector('#upcoming')
  const upcomingMovie =results.data.results[0]
  upcomingSection.innerHTML=
  `<h2>UPCOMING THIS MONTH</h2>
        <div class="upcoming__film-box">
        <img
        src="https://image.tmdb.org/t/p/w500${upcomingMovie.backdrop_path}"
        height="458px"
        width="805px"
        alt="Logo of this page"
        />
            <div class="upcoming__film-details-box">
                <h3>${upcomingMovie.original_title}</h3>
                <div class="upcoming__film-details">
                    <div>
						<p>Release date</p>
						<p>Vote / Votes</p>
						<p>Popularit</p>
						<p>Genre</p>
					</div>
                    <div>
						<p>03.03.2023</p>
						<p class="upcoming__film-rating"><span>7.3</span>/<span>1260</span></p>
						<p>99.9</p>
						<p>Comedy, action</p>
					</div>
				</div>
				<h4>ABOUT</h4>
				<p>${upcomingMovie.overview}</p>
			    <button>Add to my library</button>`

  
}


const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(results => {
      if (url.includes("day"))
        
        createHeroMovie(results)
      if (url.includes("week"))
          
          createWeekMovies(results)
      if (url.includes("upcoming"))
        console.log(results)
        createUpcomingMovie(results)
      })
    .catch(error => console.log(error));


const homePageContent = async () => (await Promise.all([
      homePageApiData(urls.trendMoviesDay),
      homePageApiData(urls.trendMoviesWeek),
      homePageApiData(urls.upcomingMovies),
    ]));


homePageContent()
