let commentOne = document.querySelector('#sc-1');
let commentTwo = document.querySelector('#sc-2');
let commentThree = document.querySelector('#sc-3');
let commentFour = document.querySelector('#sc-4');
let commentFive = document.querySelector('#sc-5');
let btnCommentOne = document.querySelector('#bc-1');
let btnCommentTwo = document.querySelector('#bc-2');
let btnCommentThree = document.querySelector('#bc-3');
let btnCommentFour = document.querySelector('#bc-4');
let btnCommentFive = document.querySelector('#bc-5');

btnCommentOne.addEventListener('click', () => {
    commentOneChange()
})

btnCommentTwo.addEventListener('click', () => {
    commentTwoChange()
})

btnCommentThree.addEventListener('click', () => {
    commentThreeChange()
})

btnCommentFour.addEventListener('click', () => {
    commentFourChange()
})

btnCommentFive.addEventListener('click', () => {
    commentFiveChange()
})

function commentOneChange() {
    btnCommentOne.classList.add('active')
    btnCommentTwo.classList.remove('active')
    btnCommentThree.classList.remove('active')
    btnCommentFour.classList.remove('active')
    btnCommentFive.classList.remove('active')
    commentOne.classList.add('active')
    commentTwo.classList.remove('active')
    commentThree.classList.remove('active')
    commentFour.classList.remove('active')
    commentFive.classList.remove('active')
}

function commentTwoChange() {
    btnCommentOne.classList.remove('active')
    btnCommentTwo.classList.add('active')
    btnCommentThree.classList.remove('active')
    btnCommentFour.classList.remove('active')
    btnCommentFive.classList.remove('active')
    commentOne.classList.remove('active')
    commentTwo.classList.add('active')
    commentThree.classList.remove('active')
    commentFour.classList.remove('active')
    commentFive.classList.remove('active')
}

function commentThreeChange() {
    btnCommentOne.classList.remove('active')
    btnCommentTwo.classList.remove('active')
    btnCommentThree.classList.add('active')
    btnCommentFour.classList.remove('active')
    btnCommentFive.classList.remove('active')
    commentOne.classList.remove('active')
    commentTwo.classList.remove('active')
    commentThree.classList.add('active')
    commentFour.classList.remove('active')
    commentFive.classList.remove('active')
}

function commentFourChange() {
    btnCommentOne.classList.remove('active')
    btnCommentTwo.classList.remove('active')
    btnCommentThree.classList.remove('active')
    btnCommentFour.classList.add('active')
    btnCommentFive.classList.remove('active')
    commentOne.classList.remove('active')
    commentTwo.classList.remove('active')
    commentThree.classList.remove('active')
    commentFour.classList.add('active')
    commentFive.classList.remove('active')
}

function commentFiveChange() {
    btnCommentOne.classList.remove('active')
    btnCommentTwo.classList.remove('active')
    btnCommentThree.classList.remove('active')
    btnCommentFour.classList.remove('active')
    btnCommentFive.classList.add('active')
    commentOne.classList.remove('active')
    commentTwo.classList.remove('active')
    commentThree.classList.remove('active')
    commentFour.classList.remove('active')
    commentFive.classList.add('active')
}