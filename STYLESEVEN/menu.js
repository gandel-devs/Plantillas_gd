const ham = document.querySelector('.btn_menu');
const enlaces = document.querySelector('.nav');
const header = document.querySelector('.header');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('active');
    header.classList.toggle('active');
})
