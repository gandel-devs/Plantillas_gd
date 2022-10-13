const play = document.querySelector('.play')
const cover = document.querySelector('.slide.s-1.show')
let index = 1
let slideTwo = document.querySelector('.slide.s-2')
let slideThree = document.querySelector('.slide.s-3')
let slideFour = document.querySelector('.slide.s-4')
let slideFive = document.querySelector('.slide.s-5')
const clock = document.querySelector('.clock')
let progressBar = document.querySelector('.progressBar')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
const playControl = document.querySelector('.playControl')
const pauseControl = document.querySelector('.pauseControl')

play.addEventListener('click', () => {
    progressBar.classList.add('p-2')
    clock.innerHTML = "01:00"
    play.classList.add('run')
    index = 2
    next.disabled = false
    back.disabled = false
    playControl.disabled = false
    pauseControl.disabled = false
    next.classList.add('active')
    back.classList.add('active')
    playControl.classList.add('active')
    changeSlide()
})

next.addEventListener('click', () => {
    if (index <= 5) {
        index++
    }

    if (index == 5) {
        next.disabled = true
        next.classList.remove('active')
    }

    if (index > 1) {
        back.disabled = false
        back.classList.add('active')
    }

    removeProgress()

    changeClock()

    changeSlide()

})

back.addEventListener('click', () => {
    if (index > 0) {
        index--
    }

    if (index == 1) {
        back.disabled = true
        back.classList.remove('active')
    }

    if (index < 5) {
        next.disabled = false
        next.classList.add('active')
    }

    removeProgress()

    changeClock()

    changeSlide()

})

function removeProgress() {

    for (let indice = 0; indice <= 5; indice++) {
        if (indice != index) {
            progressBar.classList.remove('p-' + indice)
        }
    }

    progressBar.classList.add('p-' + index)

}

function changeClock() {

    switch (index) {
        case 1:

            clock.innerHTML = "00:00"

            break;

        case 2:

            clock.innerHTML = "01:00"

            break;

        case 3:

            clock.innerHTML = "02:00"

            break;

        case 4:

            clock.innerHTML = "03:00"

            break;

        case 5:

            clock.innerHTML = "04:00"

            break;
    }

}

function changeSlide() {

    switch (index) {
        case 1:
            slideTwo.classList.remove('show')
            cover.classList.add('show')
            break;

        case 2:
            slideThree.classList.remove('show')
            cover.classList.remove('show')
            slideTwo.classList.add('show')
            break;

        case 3:
            slideTwo.classList.remove('show')
            slideFour.classList.remove('show')
            slideThree.classList.add('show')
            break;

        case 4:
            slideThree.classList.remove('show')
            slideFive.classList.remove('show')
            slideFour.classList.add('show')
            break;

        case 5:
            slideFour.classList.remove('show')
            slideFive.classList.add('show')
            break;
    }

}

playControl.addEventListener('click', ()=>{
    playControl.classList.remove('active')
    pauseControl.classList.add('active')
})

pauseControl.addEventListener('click', ()=>{
    pauseControl.classList.remove('active')
    playControl.classList.add('active')
})