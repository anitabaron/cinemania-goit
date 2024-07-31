import axios from "axios";

export const createCard = ({ backdrop_path, title, genre, release_date }) => {
    const li = document.createElement("li");
    li.innerHTML=
                   `<div class="movielist-item"
                   style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%) url(${backdrop_path});
                    background-repeat: no-repeat;
                    background-size: cover; 
                    background-position: center">
                    <div class="movielist__information-box">
                    <div class="movielist__title-box">
						<p class ="movielist__movie-title">${ title }</p>
						<p class ="movielist__movie-genre">${ genre} | ${release_date}</p>
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
					`
    return li
}
// --------Przykładowy sposób dodania elementu na stronę -------
// const list = document.querySelector("#idOfList");
// list.append(createCard({}));



// ------funkcja generująca gatunek filmu z tablicy gatunków------

// const genres = [
// 	{ "id": 28, "name": "Action" },
// 	{ "id": 12, "name": "Adventure" },
// 	{ "id": 16, "name": "Animation" },
// 	{ "id": 35, "name": "Comedy" },
// 	{ "id": 80, "name": "Crime" },
// 	{ "id": 99, "name": "Documentary" },
// 	{ "id": 18, "name": "Drama" },
// 	{ "id": 10751, "name": "Family" },
// 	{ "id": 14, "name": "Fantasy" },
// 	{ "id": 36, "name": "History" },
// 	{ "id": 27, "name": "Horror" },
// 	{ "id": 10402, "name": "Music" },
// 	{ "id": 9648, "name": "Mystery" },
// 	{ "id": 10749, "name": "Romance" },
// 	{ "id": 878, "name": "Science Fiction" },
// 	{ "id": 10770, "name": "TV Movie" },
// 	{ "id": 53, "name": "Thriller" },
// 	{ "id": 10752, "name": "War" },
// 	{ "id": 37, "name": "Western" },
// ]

// const movieGenresIds = [53, 10770, 878]
// const moveiGenresFirst = (arr) => {
// 	const finalArr = [];
// 	for (i = 0; i < arr.length; i += 1) {
// 				if (movieGenresIds.includes(arr[i].id)) {
// 					finalArr.push(arr[i].name)
// 				}
// 			}

// 	return finalArr.join(", ");
// }

// console.log(moveiGenresFirst(genres))

// ------funkcja generująca gatunek filmu z api------

// const movieGenresIds = TopWeekMovie.genre_ids;
// export const movieGenres = () => {
// 	axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=682127ed972e56f6bb70ae743d23c1d7")
// 		.then((res) => {
// 			const genresArr = res.data.genres;
// 			const finalArr = [];
// 			for (i = 0; i < genresArr.length; i += 1) {
// 				if (movieGenresIds.includes(genresArr[i].id)) {
// 					finalArr.push(genresArr[i].name)
// 				}
// 			}

// 			return finalArr.join(", ");

// 		}).catch((error) => console.log(error));
// }


// ------wyciągnięty rok z daty--------

// const releaseYear = TopWeekMovie.release_date.slice(0, 4);