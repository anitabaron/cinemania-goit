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

const urls = {
  trendMoviesDay: `https://api.themoviedb.org/3/trending/movie/day`,
  trendMoviesWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming`,
};

const createHeroMovie = results => {
  const heroSection = document.querySelector('#hero');
  const randomMovie = Math.floor(Math.random() * results.data.results.length);
  const topDayMovie = results.data.results[randomMovie];

  const cutText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const maxLength = 200;
  const truncatedOverview = cutText(topDayMovie.overview, maxLength);

  heroSection.innerHTML = `<div class="hero__background container" 
        style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), 
        url(https://image.tmdb.org/t/p/original${topDayMovie.backdrop_path})">
  <h2 class="hero__text-1">${topDayMovie.title}</h2>
  <ul class="movielist__rating-hero">
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>
						<li>*</li>

					</ul>
  <p class="hero__text-2" id="hero_text">${truncatedOverview}</p>
  		
  <div class="buttons">
    <button class="btn btn__orange-gradient size__1">Watch trailer</button>
    <button class="btn  btn__black size__2">More details</button>
  </div>
</div>`;
};

const TopWeekMovieBox = (index, results) => {
  const TopWeekMovie = results.data.results[index];
  const releaseYear = TopWeekMovie.release_date.slice(0, 4);
  return `<li>
  <div class="movielist-item"
                   style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${TopWeekMovie.backdrop_path});
                    background-repeat: no-repeat;
                    background-size: cover; 
                    background-position: center">
                    <div class="movielist__information-box">
                    <div class="movielist__title-box">
						<p class ="movielist__movie-title">${TopWeekMovie.title}</p>
						<p class ="movielist__movie-genre"> genre | ${releaseYear}</p>
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

const homePageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(results => {
      if (url.includes('day')) {
        //console.log("day:", results)
        createHeroMovie(results);
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
