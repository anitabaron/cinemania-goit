
const heroBackGround = document.createElement('div');
heroBackGround.className = 'hero_background container';

const heroText1 = document.createElement('h2');
heroText1.className = 'hero_text_1';
heroText1.textContent = 'Let’s Make Your Own Cinema';


const heroText2 = document.createElement('h3');
heroText2.className = 'hero_text_2';
heroText2.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
heroText2.id = 'hero_text';


const heroButton = document.createElement('button');
heroButton.className = "hero_button";
heroButton.setAttribute('onclick', "window.location.href='catalog.html';");

const heroSpanButton = document.createElement('span');
heroSpanButton.classList = 'hero_span_button';
heroSpanButton.textContent = 'Get Started';

heroButton.appendChild(heroSpanButton);

heroBackGround.appendChild(heroText1);
heroBackGround.appendChild(heroText2);
heroBackGround.appendChild(heroButton);

document.getElementById('hero').appendChild(heroBackGround);













function updateTextHero() {
    
    const heroText = document.getElementById('hero_text');


   
   
    if (window.innerWidth >= 768 ) {
        heroText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
    } else {
        heroText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    heroText.classList.add('hero_text_2');
    }
}

updateTextHero();


window.addEventListener('resize', updateTextHero);
