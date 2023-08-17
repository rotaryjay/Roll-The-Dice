function randomDiceResult() {
    return Math.floor((Math.random()*6)+1)
}

let oneDot = document.querySelector('.oneDie.oneDot');
let twoDots = document.querySelector('.oneDie.twoDots');
let threeDots = document.querySelector('.oneDie.threeDots');
let fourDots = document.querySelector('.oneDie.fourDots');
let fiveDots = document.querySelector('.oneDie.fiveDots');
let sixDots = document.querySelector('.oneDie.sixDots');

let oneDotHidden = true;
let twoDotsHidden = true;
let threeDotsHidden = true;
let fourDotsHidden = true;
let fiveDotsHidden = true;
let sixDotsHidden = true;

function resetHidden() {
    oneDotHidden = true;
    twoDotsHidden = true;
    threeDotsHidden = true;
    fourDotsHidden = true;
    fiveDotsHidden = true;
    sixDotsHidden = true;
}

function showHideDie() {
    if (oneDotHidden) {
        oneDot.classList.add('hidden');
    } else {
        oneDot.classList.remove('hidden')
    }
    if (twoDotsHidden) {
        twoDots.classList.add('hidden');
    }  else {
        twoDots.classList.remove('hidden');
    }
    if (threeDotsHidden) {
        threeDots.classList.add('hidden');
    } else {
        threeDots.classList.remove('hidden');
    }
    if (fourDotsHidden) {
        fourDots.classList.add('hidden');
    } else {
        fourDots.classList.remove('hidden');
    }
    if (fiveDotsHidden) {
        fiveDots.classList.add('hidden');
    } else {
        fiveDots.classList.remove('hidden');
    }
    if (sixDotsHidden) {
        sixDots.classList.add('hidden');
    } else {
        sixDots.classList.remove('hidden');
    }
}

resetHidden();
showHideDie();

document.querySelector('.roll').addEventListener('click', function() {
    resetHidden();
    showHideDie();
    let currentRoll = randomDiceResult();
    if (currentRoll === 1) {
        console.log(currentRoll);
        oneDotHidden = false;
        showHideDie()
    } else if (currentRoll === 2) {
        console.log(currentRoll);
        twoDotsHidden = false;
        showHideDie()
    } else if (currentRoll === 3) {
        console.log(currentRoll);
        threeDotsHidden = false;
        showHideDie()
    }  else if (currentRoll === 4) {
        console.log(currentRoll);
        fourDotsHidden = false;
        showHideDie()
    }  else if (currentRoll === 5) {
        console.log(currentRoll);
        fiveDotsHidden = false;
        showHideDie()
    }  else if (currentRoll === 6) {
        console.log(currentRoll);
        sixDotsHidden = false;
        showHideDie()
    }
});

// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);