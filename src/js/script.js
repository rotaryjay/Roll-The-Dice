function randomDiceResult() {
    return Math.floor((Math.random()*6)+1)
}
let dieOne = document.querySelector('.rollZone1 .dieOne');
let dieTwo = document.querySelector('.rollZone2 .dieTwo');
let dieThree = document.querySelector('.rollZone3 .dieThree');

document.querySelector('.roll').addEventListener('click', function() {
    let currentRollDieOne = randomDiceResult();
    let currentRollDieTwo = randomDiceResult();
    let currentRollDieThree = randomDiceResult();
    if (currentRollDieOne === 1) {
        console.log(currentRollDieOne);
        dieOne.classList.add('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.remove('show-back');
    } else if (currentRollDieOne === 2) {
        console.log(currentRollDieOne);
        dieOne.classList.remove('show-front');
        dieOne.classList.add('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.remove('show-back');
    } else if (currentRollDieOne === 3) {
        console.log(currentRollDieOne);
        dieOne.classList.remove('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.add('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.remove('show-back');
    }  else if (currentRollDieOne === 4) {
        console.log(currentRollDieOne);
        dieOne.classList.remove('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.add('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.remove('show-back');
    }  else if (currentRollDieOne === 5) {
        console.log(currentRollDieOne);
        dieOne.classList.remove('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.add('show-bottom');
        dieOne.classList.remove('show-back');
    }  else if (currentRollDieOne === 6) {
        console.log(currentRollDieOne);
        dieOne.classList.remove('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.add('show-back');
    }

    if (currentRollDieTwo === 1) {
        console.log(currentRollDieOne);
        dieTwo.classList.add('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.remove('show-back');
    } else if (currentRollDieTwo === 2) {
        console.log(currentRollDieOne);
        dieTwo.classList.remove('show-front');
        dieTwo.classList.add('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.remove('show-back');
    } else if (currentRollDieTwo === 3) {
        console.log(currentRollDieOne);
        dieTwo.classList.remove('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.add('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.remove('show-back');
    }  else if (currentRollDieTwo === 4) {
        console.log(currentRollDieOne);
        dieTwo.classList.remove('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.add('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.remove('show-back');
    }  else if (currentRollDieTwo === 5) {
        console.log(currentRollDieOne);
        dieTwo.classList.remove('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.add('show-bottom');
        dieTwo.classList.remove('show-back');
    }  else if (currentRollDieTwo === 6) {
        console.log(currentRollDieOne);
        dieTwo.classList.remove('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.add('show-back');
    }


    if (currentRollDieThree === 1) {
        dieThree.classList.add('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.remove('show-back');
    } else if (currentRollDieThree === 2) {
        dieThree.classList.remove('show-front');
        dieThree.classList.add('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.remove('show-back');
    } else if (currentRollDieThree === 3) {
        dieThree.classList.remove('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.add('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.remove('show-back');
    }  else if (currentRollDieThree === 4) {
        dieThree.classList.remove('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.add('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.remove('show-back');
    }  else if (currentRollDieThree === 5) {
        dieThree.classList.remove('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.add('show-bottom');
        dieThree.classList.remove('show-back');
    }  else if (currentRollDieThree === 6) {
        dieThree.classList.remove('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.add('show-back');
    }

    let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree;
    document.querySelector('.totalRoll').textContent = "Total for this roll is " + totalRoll;
});

// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);