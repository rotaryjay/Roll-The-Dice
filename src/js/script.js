function randomDiceResult() {
    return Math.floor((Math.random()*6)+1)
}
let dieOne = document.querySelector('.dieOne');
let sideOne = document.querySelector('.sideOne');
let sideTwo = document.querySelector('.sideTwo');
let sideThree = document.querySelector('.sideThree');
let sideFour = document.querySelector('.sideFour');
let sideFive = document.querySelector('.sideFive');
let sideSix = document.querySelector('.sideSix');

let showFront = true;
let showTop = false;
let showLeft = false;
let showRight = false;
let showBottom = false;
let showBack = false;

function resetShowHide() {
    showFront = false;
    showTop = false;
    showLeft = false;
    showRight = false;
    showBottom = false;
    showBack = false;
}

function showHide() {
    if (showFront) {
        dieOne.classList.add('show-front');
    } else {
        dieOne.classList.remove('show-front')
    }
    if (showTop) {
        dieOne.classList.add('show-top');
    } else {
        dieOne.classList.remove('show-top')
    }
    if (showLeft) {
        dieOne.classList.add('show-left');
    } else {
        dieOne.classList.remove('show-left')
    }
    if (showRight) {
        dieOne.classList.add('show-right');
    } else {
        dieOne.classList.remove('show-right')
    }
    if (showBottom) {
        dieOne.classList.add('show-bottom');
    } else {
        dieOne.classList.remove('show-bottom')
    }
    if (showBack) {
        dieOne.classList.add('show-back');
    } else {
        dieOne.classList.remove('show-back')
    }
}

document.querySelector('.roll').addEventListener('click', function() {
    let currentRoll = randomDiceResult();
    if (currentRoll === 1) {
        console.log(currentRoll);
        //dieOne.classList.add('show-front');
        showFront = true;
        resetShowHide();
        showHide();
    } else if (currentRoll === 2) {
        console.log(currentRoll);
        //dieOne.classList.add('show-top');
        showTop = true;
        resetShowHide();
        showHide();
    } else if (currentRoll === 3) {
        console.log(currentRoll);
        //dieOne.classList.add('show-left');
        showLeft = true;
        resetShowHide();
        showHide();
    }  else if (currentRoll === 4) {
        console.log(currentRoll);
        //dieOne.classList.add('show-right');
        showRight = true;
        resetShowHide();
        showHide();
    }  else if (currentRoll === 5) {
        console.log(currentRoll);
        //dieOne.classList.add('show-bottom');
        showBottom = true;
        resetShowHide();
        showHide();
    }  else if (currentRoll === 6) {
        console.log(currentRoll);
        //dieOne.classList.add('show-back');
        showBack = true;
        resetShowHide();
        showHide();
    }
});

// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);