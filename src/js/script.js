function randomDiceResult() {
    return Math.floor((Math.random()*6)+1)
}

let oneDot = document.querySelector('.oneDie.oneDot');
let twoDots = document.querySelector('.oneDie.twoDots');
let threeDots = document.querySelector('.oneDie.threeDots');
let fourDots = document.querySelector('.oneDie.foursDots');
let fiveDots = document.querySelector('.oneDie.fivesDots');
let sixDots = document.querySelector('.oneDie.sixDots');

function resetDie() {
    /*oneDot.classList.remove('hidden');
    twoDots.classList.remove('hidden');
    threeDots.classList.remove('hidden');
    fourDots.classList.remove('hidden');
    fiveDots.classList.remove('hidden');
    sixDots.classList.remove('hidden');
    oneDot.classList.add('hidden');
    twoDots.classList.add('hidden');
    threeDots.classList.add('hidden');
    fourDots.classList.add('hidden');
    fiveDots.classList.add('hidden');
    sixDots.classList.add('hidden');*/
}

document.querySelector('.roll').addEventListener('click', function() {
    let currentRoll = randomDiceResult();
    if (currentRoll === 1) {
        console.log(currentRoll);
    } else if (currentRoll === 2) {
        console.log(currentRoll);
    } else if (currentRoll === 3) {
        console.log(currentRoll);
    }  else if (currentRoll === 4) {
        console.log(currentRoll);
    }  else if (currentRoll === 5) {
        console.log(currentRoll);
    }  else if (currentRoll === 6) {
        console.log(currentRoll);
    }
});