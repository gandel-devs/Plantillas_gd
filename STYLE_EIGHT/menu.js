const ham = document.querySelector('.btnMenu');
const enlaces = document.querySelector('.menu');
const lines = document.querySelector('.line');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('active');
    lines.classList.toggle('active');
})
