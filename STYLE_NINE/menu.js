const button = document.querySelector('.btnMenu')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')

button.addEventListener('click', () =>{
    menu.classList.toggle('active')
    button.classList.toggle('active')
    header.classList.toggle('active')
})