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
<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.852 16.8746C13.7336 16.875 13.6181 16.8381 13.5219 16.7691L9.00048 13.4911L4.47903 16.7691C4.38243 16.8392 4.26606 16.8767 4.14673 16.8762C4.0274 16.8758 3.91129 16.8374 3.81521 16.7667C3.71912 16.6959 3.64803 16.5964 3.61221 16.4826C3.57639 16.3688 3.5777 16.2465 3.61594 16.1335L5.37938 10.9103L0.809069 7.77612C0.710073 7.70831 0.635356 7.61062 0.595836 7.49732C0.556316 7.38402 0.554063 7.26105 0.589407 7.14638C0.624751 7.0317 0.695839 6.93134 0.792285 6.85995C0.888732 6.78856 1.00548 6.74988 1.12548 6.74956H6.76384L8.4654 1.51304C8.50205 1.39998 8.57358 1.30144 8.6697 1.23156C8.76583 1.16167 8.88163 1.12402 9.00048 1.12402C9.11932 1.12402 9.23512 1.16167 9.33125 1.23156C9.42738 1.30144 9.4989 1.39998 9.53555 1.51304L11.2371 6.75132H16.8755C16.9956 6.75126 17.1126 6.78967 17.2094 6.86093C17.3061 6.93218 17.3775 7.03254 17.413 7.1473C17.4486 7.26206 17.4465 7.38519 17.407 7.49866C17.3675 7.61213 17.2928 7.70998 17.1936 7.77788L12.6216 10.9103L14.384 16.1321C14.4125 16.2166 14.4205 16.3067 14.4074 16.395C14.3942 16.4832 14.3603 16.5671 14.3083 16.6396C14.2563 16.7122 14.1879 16.7713 14.1085 16.8122C14.0292 16.853 13.9413 16.8744 13.852 16.8746Z" fill="url(#paint0_linear_148_6985)"/>
<defs>
<linearGradient id="paint0_linear_148_6985" x1="2.62549" y1="2.24957" x2="13.8755" y2="17.2496" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;

export const halfStar = `
<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>
<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>
<defs>
<linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
<linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;

export const emptyStar = `
<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6994)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_148_6994" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
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
