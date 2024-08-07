export const genres = [
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

export const fullStar = `
<svg class="star"  viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F84119"/>
      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
    </linearGradient>
  </defs>
</svg>`;

export const halfStar = `
<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="paint0_linear_4641_33902" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F84119"/>
      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
    </linearGradient>
  </defs>
  <mask id="halfMask">
    <rect x="0" y="0" width="9" height="18" fill="white"/>
  </mask>
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_4641_33902)" stroke-linejoin="round" fill="none"/>
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" fill="url(#paint0_linear_4641_33902)" mask="url(#halfMask)"/>
</svg>`;

export const emptyStar = `
<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="paint0_linear_4641_33902" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F84119"/>
      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
    </linearGradient>
  </defs>
  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_4641_33902)" stroke-linejoin="round" fill="none"/>
</svg>`;

export const heroFragment = (id, backdrop_path, title, stars, description) => {
  return `<div class="hero__background" data-id="${id}"
          style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), 
          url(https://image.tmdb.org/t/p/original${backdrop_path})">
          <div class="hero__text-box">
            <h2 class="hero__text-1">${title}</h2>
            <ul class="movielist__rating-hero">
              ${stars}
            </ul>
            <p class="hero__text-2" id="hero_text">${description}</p>
            <div class="buttons" >
              <button class="btn__hero-1" data-id="${id}">Watch trailer</button>
              <button class="btn__hero-2" data-id="${id}">More details</button>
          </div>
          </div>
         </div>`;
};

export const topMoviesFragment = (
  id,
  backdrop_path,
  title,
  movieGenres,
  releaseYear,
  stars
) => {
  let path = `https://image.tmdb.org/t/p/w780${backdrop_path}`;
  if (backdrop_path === null) {
    path = `src/images/oops_warning_mobile.png`;
  }

  return `<li id="${id}">
              <div class="movielist-item" data-id="${id}"
                   style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), 
                   url(${path});
                    background-repeat: no-repeat;
                    background-size: cover; 
                    background-position: center">
                    <div class="movielist__information-box">
                      <div class="movielist__title-box">
                        <p class ="movielist__movie-title">${title}</p>
                        <p class ="movielist__movie-genre"> ${movieGenres} | ${releaseYear}</p>
                      </div>
                      <ul class="movielist__movie-rating">
                      ${stars}
					            </ul>
					          </div>
              </div>
          </li>`;
};

export const upcomingMovieFragment = (
  id,
  backdrop_path,
  title,
  description,
  release_date,
  roundedVoteAverage,
  vote_count,
  roundedVPopularity,
  movieGenres
) => {
  return `<div>
<h2 class="upcoming-header-one">UPCOMING THIS MONTH</h2>
        <div class="upcoming__film-box">
        <img class="upcoming-image"
        src="https://image.tmdb.org/t/p/w1280${backdrop_path}"
       
        alt="movie poster"
        />
            <div class="upcoming__film-details-box">
                <h3 class="upcoming-header-two">${title}</h3>
                <div class="upcoming__film-details">
                    <div>
						<p class="upcoming-p">Release date</p>
						<p class="upcoming-p">Vote / Votes</p>
						<p class="upcoming-p">Popularity</p>
						<p class="upcoming-p">Genre</p>
					</div>
                    <div>
						<p class="upcoming-p-two upcoming-p-style">${release_date}</p>
						<p class="upcoming__film-rating upcoming-p-style"><span class="upcoming-box">${roundedVoteAverage}</span>  /  <span class="upcoming-box">${vote_count}</span></p>
						<p class="upcoming-p-style">${roundedVPopularity}</p>
						<p class="upcoming-p-style">${movieGenres}</p>
					</div>
				</div>
				<h4 class="upcoming-header-three">ABOUT</h4>
				<p class="upcoming-p-three">${description}</p>
			  <button class="btn btn__big btn__orange-gradient btn-space btn-modal" id="${id}">Add to my library</button>
        </div>`;
};

export const pagesBtn = (pageBtn1, pageBtn2, pageBtn3, pageBtn4, pageBtn5) => `
            <div class="catalog__form" id="navForm">
                <button class="btn btn__nav-page" id="firstPageBtn"> << </button>
                <button class="btn btn__nav-page" id="previousPage"> < </button>
                <button class="btn btn__grey" id="PageBtn1">${pageBtn1}</button>
                <button class="btn btn__grey" id="PageBtn2">${pageBtn2}</button>
                <button class="btn btn__grey" id="PageBtn3">${pageBtn3}</button>
                <button class="btn btn__grey" id="PageBtn4">${pageBtn4}</button>
                <button class="btn btn__grey" id="PageBtn5">${pageBtn5}</button>
                <button class="btn btn__nav-page" id="nextPage"> > </button>
                <button class="btn btn__nav-page" id="lastPageBtn"> >> </button>
            </div>`;

export const pagesBtn2 = `
            <div class="catalog__form" id="navForm">
                <button class="btn btn__nav-page" id="previousPage"> < </button>
                <button class="btn btn__grey" id="PageBtn1">1</button>
                <button class="btn btn__grey" id="PageBtn2">2</button>
                <button class="btn btn__nav-page" id="nextPage"> > </button>
            </div>`;
export const pagesBtn3 = `
            <div class="catalog__form" id="navForm">
                <button class="btn btn__nav-page" id="firstPageBtn"> << </button>
                <button class="btn btn__nav-page" id="previousPage"> < </button>
                <button class="btn btn__grey" id="PageBtn1">1</button>
                <button class="btn btn__grey" id="PageBtn2">2</button>
                <button class="btn btn__grey" id="PageBtn3">3</button>
                <button class="btn btn__nav-page" id="nextPage"> > </button>
                <button class="btn btn__nav-page" id="lastPageBtn"> >> </button>
            </div>`;
export const pagesBtn4 = `
            <div class="catalog__form" id="navForm">
                <button class="btn btn__nav-page" id="firstPageBtn"> << </button>
                <button class="btn btn__nav-page" id="previousPage"> < </button>
                <button class="btn btn__grey" id="PageBtn1">1</button>
                <button class="btn btn__grey" id="PageBtn2">2</button>
                <button class="btn btn__grey" id="PageBtn3">3</button>
                <button class="btn btn__grey" id="PageBtn4">4}</button>
                <button class="btn btn__nav-page" id="nextPage"> > </button>
                <button class="btn btn__nav-page" id="lastPageBtn"> >> </button>
            </div>`;

export const emptyApiResponeHero = `<div class="hero_background-def">
<div class="hero__text-box-default">
    <h2 class="hero__text-def">Let’s Make Your Own Cinema</h2>
    <h3 class="hero__text-default" id="hero_text"></h3>
    <div class ="buttons__def-hero">
   <button class="btn__hero-1" onclick="window.location.href='catalog.html';">
     <span class="hero__span-button">Get Started</span>
   </button>
    </div>
    </div>
   </div>`;

export const emptyApiResponeCatalog = `<div class="hero_background">
                                    <h3 class="catalog__text-sorry">OOPS...</h3>
                                    <p class="catalog__text-sorry"> We are very sorry! We dont have any results matching your search.</p>
                                </div>`;
const a = 1;
