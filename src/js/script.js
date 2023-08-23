// Dice Object
let diceInPlay = {
    dice1: 'yes'
}

let numberOfDiceInPlay = Object.keys(diceInPlay).length;

document.querySelector('.addDie').addEventListener('click', function() {
    if ((numberOfDiceInPlay >= 1) && (numberOfDiceInPlay < 6)) {
        diceInPlay.dice2 = 'yes';
        //numberOfDice++
        console.log('numberOfDice variable is at: ' + numberOfDiceInPlay);
        //document.querySelector('.totalDiceSelected').textContent = numberOfDice;
        //showHideRollZones();
        //resetDice();
    } else {
        alert("You cannot have more than 6 dice.");
    }
});
document.querySelector('.removeDie').addEventListener('click', function() {
    if ((numberOfDiceInPlay <= 6) && (numberOfDiceInPlay > 1)) {
        //numberOfDice--;
        console.log('numberOfDice variable is at: ' + numberOfDiceInPlay);
        //document.querySelector('.totalDiceSelected').textContent = numberOfDice;
        //showHideRollZones();
        //resetDice();
    } else {
        alert("You cannot have less than 1 die.");
    }
});



/*console.log(Object.keys(diceInPlay).length);
diceInPlay.dice2 = 'yes';
console.log(Object.keys(diceInPlay).length);
diceInPlay.dice3 = 'yes';
console.log(Object.keys(diceInPlay).length);*/


// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);

