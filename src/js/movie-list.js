export const createCard = ({ backdrop_path, title, genre, release_date }) => {
    const li = document.createElement("li");
    li.innerHTML=
                   `<div class="movielist-item"
                   style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(${backdrop_path}) no-repeat center">
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