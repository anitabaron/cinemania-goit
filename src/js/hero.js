function updateTextHero(description) {
  const heroText = document.getElementById('hero_text');

  if (window.innerWidth >= 768) {
    heroText.textContent =
      description ||
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  } else {
    heroText.textContent =
      description ||
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    heroText.classList.add('hero_text_2');
  }
}
function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero'); // Usuń znak '#'

  // Ustawienie zawartości
  heroSection.innerHTML = `
    <div class="hero_background container">
      <h2 class="hero__text-1">Let’s Make Your Own Cinema</h2>
      <h3 class="hero__text-2" id="hero_text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.</h3>
      <button class="hero__button" onclick="window.location.href='catalog.html';">
        <span class="hero__span-button">Get Started</span>
      </button>
    </div>
  `;

  updateTextHero();

  window.addEventListener('resize', updateTextHero);
}

function updateTextHero() {}

const createHeroMovie = results => {
  if (results.data.results.length === 0) {
    console.error('No movies found');
    createDefaultHeroSection();
    return;
  }
};
// const apiKey = 'bf204b214cbfbbf1225f0513f78ae506';
// const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
