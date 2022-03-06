/*==================== toggle the menu ====================*/
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
/*==================== TYPE JS ====================*/
var typed = new Typed(".auto-input", {
    strings: [
                ' ',
                'UI/UX Designer',
                'React',
                'Python',
                'JavaScript'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    loopCount: Infinity
})
/*==================== SWIPER JS ====================*/