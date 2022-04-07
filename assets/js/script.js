/*==================== toggle the menu ====================*/
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

/*==================== Dark Mode ====================*/

const switchToggle = document.querySelector('#switch-toggle');
const html = document.querySelector('html');
let isDarkmode = false
const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'))

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`


// Jika ada isDarkmode di localstorage 
if (localDarkmode) {
    isDarkmode = localDarkmode
    html.classList.add('dark')
} else {
    html.classList.remove('dark')
}

function toggleTheme() {
    isDarkmode = !isDarkmode
    localStorage.setItem('isDarkmode', isDarkmode)
    switchTheme()
}

function switchTheme() {
    if (isDarkmode) {
        html.classList.add('dark')
        switchToggle.classList.remove('-translate-x-2')
        switchToggle.classList.add('translate-x-full')
        setTimeout(() => {
            switchToggle.innerHTML = darkIcon
        }, 250);
    } else {
        html.classList.remove('dark')
        switchToggle.classList.add('-translate-x-2')
        switchToggle.classList.remove('translate-x-full')
        setTimeout(() => {
            switchToggle.innerHTML = lightIcon
        }, 250);
    }
}

switchTheme()


/*==================== Reveal sections ====================*/
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');

});

/*==================== Lazy loading images ====================*/
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);