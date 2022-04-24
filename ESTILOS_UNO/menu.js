const ham = document.querySelector('.btn_menu');
const enlaces = document.querySelector('.nav');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
})
