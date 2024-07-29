const apiKey = 'bf204b214cbfbbf1225f0513f78ae506';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(response => {
    const movies = response.results;
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      createHeroSection(randomMovie);
    } else {
      createDefaultHeroSection();
    }
  })
  .catch(err => {
    console.error('Błąd pobierania danych:', err);
    createDefaultHeroSection();
  });

function clearHeroSection() {
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    heroElement.innerHTML = '';
  }
}

function createHeroSection(movie) {
  clearHeroSection(); 

  const heroBackGround = document.createElement('div');
  heroBackGround.className = 'hero_background container';
  heroBackGround.style.backgroundImage = `linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;

  const heroText1 = document.createElement('h2');
  heroText1.className = 'hero_text_1';
  heroText1.textContent = movie.title;

  const heroText2 = document.createElement('h3');
  heroText2.className = 'hero_text_2';
  heroText2.textContent = movie.overview;
  heroText2.id = 'hero_text';

  const heroButtonDetails = document.createElement('button');
  heroButtonDetails.className = "btn btn__black";
  heroButtonDetails.textContent = 'More details';
  heroButtonDetails.onclick = () => showModal(movie);

  const heroButtonTrailer = document.createElement('button');
  heroButtonTrailer.className = "btn btn__orange-gradient";
  heroButtonTrailer.textContent = 'Watch trailer';
  heroButtonTrailer.onclick = () => showTrailer(movie.id);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons';
  buttonsContainer.appendChild(heroButtonTrailer);
  buttonsContainer.appendChild(heroButtonDetails);

  heroBackGround.appendChild(heroText1);
  heroBackGround.appendChild(heroText2);
  heroBackGround.appendChild(buttonsContainer);

  document.getElementById('hero').appendChild(heroBackGround);

  updateTextHero(movie.overview);
  window.addEventListener('resize', () => updateTextHero(movie.overview));
}

function createDefaultHeroSection() {
  clearHeroSection();

  const heroBackGround = document.createElement('div');
  heroBackGround.className = 'hero_background container';

  const heroText1 = document.createElement('h2');
  heroText1.className = 'hero_text_1';
  heroText1.textContent = "Let’s Make Your Own Cinema";

  const heroText2 = document.createElement('h3');
  heroText2.className = 'hero_text_2';
  heroText2.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
  heroText2.id = 'hero_text';

  const heroButton = document.createElement('button');
  heroButton.className = "hero_button";
  heroButton.setAttribute('onclick', "window.location.href='catalog.html';");

  const heroSpanButton = document.createElement('span');
  heroSpanButton.className = 'hero_span_button';
  heroSpanButton.textContent = 'Get Started';

  heroButton.appendChild(heroSpanButton);
  heroBackGround.appendChild(heroText1);
  heroBackGround.appendChild(heroText2);
  heroBackGround.appendChild(heroButton);

  document.getElementById('hero').appendChild(heroBackGround);

  updateTextHero(); 
  window.addEventListener('resize', updateTextHero);
}

function updateTextHero(description) {
  const heroText = document.getElementById('hero_text');

  if (window.innerWidth >= 768) {
    heroText.textContent = description || "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  } else {
    heroText.textContent = description || "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    heroText.classList.add('hero_text_2');
  }
}
