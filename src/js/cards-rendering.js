import { emptyStar, fullStar, halfStar } from './api-html-fragment';

const axios = require('axios').default;
// Funkcja do renderowania kart filmów. Przyjmuje tablicę obiektów z filmami (movies) i element HTMLowy do którego chcemy zrenderować nasze karty (selector).
export default async function renderMoviesCards(movies, selector) {
  // W zmiennej zapisujemy element HTMLowy do którego chcemy renderować karty.
  const movieList = document.querySelector(`${selector}`);
  let markup = '';
  // Pętla przechodzi przez każdy film (obiekt z tablicy).
  for (const movie of movies) {
    // Każdy film (obiekt) destrukturyzujemy.
    const {
      id,
      backdrop_path: poster,
      title,
      release_date: date,
      vote_average: rating,
    } = movie;
    // Funkcja zwraca ścieżkę do postera od API.
    const movieSrc = await getImg(poster, title);
    // Funkcja zwraca maksymalnie 2 generes filmu.
    const movieGenre = await getGenre(id);
    // Funkcja zwraca rok produkcji
    const movieYear = await getYear(date);
    // Funkcja generuję gwiazdki.
    const starRating = await createStarRating(rating);
    // To co wyżej wygenerowaliśmy teraz możemy wklepać w nasze karty za pomocą HTML.
    markup += `<li id="${id}">
              <div class="movielist-item" data-id="${id}"
                   style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), 
                   url(${movieSrc});
                    background-repeat: no-repeat;
                    background-size: cover; 
                    background-position: center">
                    <div class="movielist__information-box">
                      <div class="movielist__title-box">
                        <p class ="movielist__movie-title">${title}</p>
                        <p class ="movielist__movie-genre"> ${movieGenre} | ${movieYear}</p>
                      </div>
                      <ul class="movielist__movie-rating">
                      ${starRating}
					            </ul>
					          </div>
              </div>
          </li>`;
  }
  movieList.innerHTML = markup;
}

async function getYear(data) {
  if (!data) {
    return 'There is no release date';
  }
  const year = await data.slice(0, 4);
  return year;
}
// Funkcja zwraca maksymalnie 2 generes danego filmu. Nie jest tu zintegrowany api-service.js ale zdecydowanie by zwiększył czytelność. Do poprawki!
async function getGenre(movieId) {
  const API_KEY = '682127ed972e56f6bb70ae743d23c1d7';
  const URL = 'https://api.themoviedb.org/3/movie/';

  try {
    const response = await axios.get(`${URL}${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    if (response.data.genres.length === 0) {
      return error;
    }

    const genres = response.data.genres
      .slice(0, 2)
      .map(genre => genre.name)
      .join(', ');

    return genres;
  } catch (error) {
    console.log(error);
    return 'There are no genres';
  }
}
// Funkcja tworzy gwiazdki
function createStarRating(data) {
  let ratingStars = '';

  if (!data) {
    ratingStars = `${emptyStar.repeat(5)}`;
    return `${ratingStars}`;
  }

  const rating = Math.round(data);

  switch (rating) {
    case 0:
      ratingStars = `${emptyStar.repeat(5)}`;
      break;
    case 1:
      ratingStars = `${halfStar}${emptyStar.repeat(4)}`;
      break;
    case 2:
      ratingStars = `${fullStar}${emptyStar.repeat(4)}`;
      break;
    case 3:
      ratingStars = `${fullStar}${halfStar}${emptyStar.repeat(3)}`;
      break;
    case 4:
      ratingStars = `${fullStar.repeat(2)}${emptyStar.repeat(3)}`;
      break;
    case 5:
      ratingStars = `${fullStar.repeat(2)}${halfStar}${emptyStar.repeat(2)}`;
      break;
    case 6:
      ratingStars = `${fullStar.repeat(3)}${emptyStar.repeat(2)}`;
      break;
    case 7:
      ratingStars = `${fullStar.repeat(3)}${halfStar}${emptyStar}`;
      break;
    case 8:
      ratingStars = `${fullStar.repeat(4)}${emptyStar}`;
      break;
    case 9:
      ratingStars = `${fullStar.repeat(4)}${halfStar}`;
      break;
    case 10:
      ratingStars = `${fullStar.repeat(5)}`;
      break;
    default:
      throw new Error('Invalid rating');
  }

  return `${ratingStars}`;
}

function getImg(poster, title) {
  /* if (poster === null || !poster) {
    return `src='${comingSoonImg}' alt='${title}'`;
  } */
  return `https://image.tmdb.org/t/p/w780/${poster}`;
}
