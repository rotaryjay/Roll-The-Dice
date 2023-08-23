// Dice Object
let diceInPlay = {
    dice1: 'yes'
}

let numberOfDiceInPlay = Object.keys(diceInPlay).length;

document.querySelector('.addDie').addEventListener('click', function() {
    if ((numberOfDice >= 1) && (numberOfDice < 6)) {
        numberOfDice++
        console.log('numberOfDice variable is at: ' + numberOfDice);
        document.querySelector('.totalDiceSelected').textContent = numberOfDice;
        showHideRollZones();
        resetDice();
    } else {
        alert("You cannot have more than 6 dice.");
    }
});
document.querySelector('.removeDie').addEventListener('click', function() {
    if ((numberOfDice <= 6) && (numberOfDice > 1)) {
        numberOfDice--;
        console.log('numberOfDice variable is at: ' + numberOfDice);
        document.querySelector('.totalDiceSelected').textContent = numberOfDice;
        showHideRollZones();
        resetDice();
    } else {
        alert("You cannot have less than 1 die.");
    }
});



console.log(Object.keys(diceInPlay).length);
diceInPlay.dice2 = 'yes';
console.log(Object.keys(diceInPlay).length);
diceInPlay.dice3 = 'yes';
console.log(Object.keys(diceInPlay).length);

let die1 = document.querySelector('.die1');
/*let die2 = document.querySelector('.rollZone2 .die2');
let die3 = document.querySelector('.rollZone3 .die3');
let die4 = document.querySelector('.rollZone4 .die4');
let die5 = document.querySelector('.rollZone5 .die5');
let die6 = document.querySelector('.rollZone6 .die6');*/

function die1ShowFront() {
    die1.classList.add('show-front');
    die1.classList.remove('show-top');
    die1.classList.remove('show-left');
    die1.classList.remove('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.remove('show-back');
}
function die1ShowTop() {
    die1.classList.remove('show-front');
    die1.classList.add('show-top');
    die1.classList.remove('show-left');
    die1.classList.remove('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.remove('show-back');
}
function die1ShowLeft() {
    die1.classList.remove('show-front');
    die1.classList.remove('show-top');
    die1.classList.add('show-left');
    die1.classList.remove('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.remove('show-back');
}
function die1ShowRight() {
    die1.classList.remove('show-front');
    die1.classList.remove('show-top');
    die1.classList.remove('show-left');
    die1.classList.add('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.remove('show-back');
}
function die1ShowBottom() {
    die1.classList.remove('show-front');
    die1.classList.remove('show-top');
    die1.classList.remove('show-left');
    die1.classList.remove('show-right');
    die1.classList.add('show-bottom');
    die1.classList.remove('show-back');
}
function die1ShowBack() {
    die1.classList.remove('show-front');
    die1.classList.remove('show-top');
    die1.classList.remove('show-left');
    die1.classList.remove('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.add('show-back');
}

function die2ShowFront() {
    die2.classList.add('show-front');
    die2.classList.remove('show-top');
    die2.classList.remove('show-left');
    die2.classList.remove('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.remove('show-back');
}
function die2ShowTop() {
    die2.classList.remove('show-front');
    die2.classList.add('show-top');
    die2.classList.remove('show-left');
    die2.classList.remove('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.remove('show-back');
}
function die2ShowLeft() {
    die2.classList.remove('show-front');
    die2.classList.remove('show-top');
    die2.classList.add('show-left');
    die2.classList.remove('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.remove('show-back');
}
function die2ShowRight() {
    die2.classList.remove('show-front');
    die2.classList.remove('show-top');
    die2.classList.remove('show-left');
    die2.classList.add('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.remove('show-back');
}
function die2ShowBottom() {
    die2.classList.remove('show-front');
    die2.classList.remove('show-top');
    die2.classList.remove('show-left');
    die2.classList.remove('show-right');
    die2.classList.add('show-bottom');
    die2.classList.remove('show-back');
}
function die2ShowBack() {
    die2.classList.remove('show-front');
    die2.classList.remove('show-top');
    die2.classList.remove('show-left');
    die2.classList.remove('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.add('show-back');
}

function die3ShowFront() {
    die3.classList.add('show-front');
    die3.classList.remove('show-top');
    die3.classList.remove('show-left');
    die3.classList.remove('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.remove('show-back');
}
function die3ShowTop() {
    die3.classList.remove('show-front');
    die3.classList.add('show-top');
    die3.classList.remove('show-left');
    die3.classList.remove('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.remove('show-back');
}
function die3ShowLeft() {
    die3.classList.remove('show-front');
    die3.classList.remove('show-top');
    die3.classList.add('show-left');
    die3.classList.remove('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.remove('show-back');
}
function die3ShowRight() {
    die3.classList.remove('show-front');
    die3.classList.remove('show-top');
    die3.classList.remove('show-left');
    die3.classList.add('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.remove('show-back');
}
function die3ShowBottom() {
    die3.classList.remove('show-front');
    die3.classList.remove('show-top');
    die3.classList.remove('show-left');
    die3.classList.remove('show-right');
    die3.classList.add('show-bottom');
    die3.classList.remove('show-back');
}
function die3ShowBack() {
    die3.classList.remove('show-front');
    die3.classList.remove('show-top');
    die3.classList.remove('show-left');
    die3.classList.remove('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.add('show-back');
}

function die4ShowFront() {
    die4.classList.add('show-front');
    die4.classList.remove('show-top');
    die4.classList.remove('show-left');
    die4.classList.remove('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.remove('show-back');
}
function die4ShowTop() {
    die4.classList.remove('show-front');
    die4.classList.add('show-top');
    die4.classList.remove('show-left');
    die4.classList.remove('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.remove('show-back');
}
function die4ShowLeft() {
    die4.classList.remove('show-front');
    die4.classList.remove('show-top');
    die4.classList.add('show-left');
    die4.classList.remove('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.remove('show-back');
}
function die4ShowRight() {
    die4.classList.remove('show-front');
    die4.classList.remove('show-top');
    die4.classList.remove('show-left');
    die4.classList.add('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.remove('show-back');
}
function die4ShowBottom() {
    die4.classList.remove('show-front');
    die4.classList.remove('show-top');
    die4.classList.remove('show-left');
    die4.classList.remove('show-right');
    die4.classList.add('show-bottom');
    die4.classList.remove('show-back');
}
function die4ShowBack() {
    die4.classList.remove('show-front');
    die4.classList.remove('show-top');
    die4.classList.remove('show-left');
    die4.classList.remove('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.add('show-back');
}

function die5ShowFront() {
    die5.classList.add('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.remove('show-back');
}
function die5ShowTop() {
    die5.classList.remove('show-front');
    die5.classList.add('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.remove('show-back');
}
function die5ShowLeft() {
    die5.classList.remove('show-front');
    die5.classList.remove('show-top');
    die5.classList.add('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.remove('show-back');
}
function die5ShowRight() {
    die5.classList.remove('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.add('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.remove('show-back');
}
function die5ShowBottom() {
    die5.classList.remove('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.add('show-bottom');
    die5.classList.remove('show-back');
}
function die5ShowBack() {
    die5.classList.remove('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.add('show-back');
}

function die6ShowFront() {
    die6.classList.add('show-front');
    die6.classList.remove('show-top');
    die6.classList.remove('show-left');
    die6.classList.remove('show-right');
    die6.classList.remove('show-bottom');
    die6.classList.remove('show-back');
}
function die6ShowTop() {
    die6.classList.remove('show-front');
    die6.classList.add('show-top');
    die6.classList.remove('show-left');
    die6.classList.remove('show-right');
    die6.classList.remove('show-bottom');
    die6.classList.remove('show-back');
}
function die6ShowLeft() {
    die6.classList.remove('show-front');
    die6.classList.remove('show-top');
    die6.classList.add('show-left');
    die6.classList.remove('show-right');
    die6.classList.remove('show-bottom');
    die6.classList.remove('show-back');
}
function die6ShowRight() {
    die6.classList.remove('show-front');
    die6.classList.remove('show-top');
    die6.classList.remove('show-left');
    die6.classList.add('show-right');
    die6.classList.remove('show-bottom');
    die6.classList.remove('show-back');
}
function die6ShowBottom() {
    die6.classList.remove('show-front');
    die6.classList.remove('show-top');
    die6.classList.remove('show-left');
    die6.classList.remove('show-right');
    die6.classList.add('show-bottom');
    die6.classList.remove('show-back');
}
function die5ShowBack() {
    die5.classList.remove('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.add('show-back');
}


function resetDice() {
    for (i = 0; i < die.length; ++i) {
        alert("Reset Dice.");
        die.classList.add('show-front');
        die.classList.remove('show-top');
        die.classList.remove('show-left');
        die.classList.remove('show-right');
        die.classList.remove('show-bottom');
        die.classList.remove('show-back');
    };
    /*die1.classList.add('show-front');
    die1.classList.remove('show-top');
    die1.classList.remove('show-left');
    die1.classList.remove('show-right');
    die1.classList.remove('show-bottom');
    die1.classList.remove('show-back');
    die2.classList.add('show-front');
    die2.classList.remove('show-top');
    die2.classList.remove('show-left');
    die2.classList.remove('show-right');
    die2.classList.remove('show-bottom');
    die2.classList.remove('show-back');
    die3.classList.add('show-front');
    die3.classList.remove('show-top');
    die3.classList.remove('show-left');
    die3.classList.remove('show-right');
    die3.classList.remove('show-bottom');
    die3.classList.remove('show-back');
    die4.classList.add('show-front');
    die4.classList.remove('show-top');
    die4.classList.remove('show-left');
    die4.classList.remove('show-right');
    die4.classList.remove('show-bottom');
    die4.classList.remove('show-back');
    die5.classList.add('show-front');
    die5.classList.remove('show-top');
    die5.classList.remove('show-left');
    die5.classList.remove('show-right');
    die5.classList.remove('show-bottom');
    die5.classList.remove('show-back');
    die6.classList.add('show-front');
    die6.classList.remove('show-top');
    die6.classList.remove('show-left');
    die6.classList.remove('show-right');
    die6.classList.remove('show-bottom');
    die6.classList.remove('show-back');*/
}

showHideRollZones();

function randomDiceResult() {
    return Math.floor((Math.random()*6)+1)
}

function showHideRollZones() {
    if (numberOfDice == 1) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.add('hidden');
        rollZoneThree.classList.add('hidden');
        rollZoneFour.classList.add('hidden');
        rollZoneFive.classList.add('hidden');
        rollZoneSix.classList.add('hidden');
    } else if (numberOfDice == 2) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.remove('hidden');
        rollZoneThree.classList.add('hidden');
        rollZoneFour.classList.add('hidden');
        rollZoneFive.classList.add('hidden');
        rollZoneSix.classList.add('hidden');
    } else if (numberOfDice == 3) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.remove('hidden');
        rollZoneThree.classList.remove('hidden');
        rollZoneFour.classList.add('hidden');
        rollZoneFive.classList.add('hidden');
        rollZoneSix.classList.add('hidden');
    } else if (numberOfDice == 4) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.remove('hidden');
        rollZoneThree.classList.remove('hidden');
        rollZoneFour.classList.remove('hidden');
        rollZoneFive.classList.add('hidden');
        rollZoneSix.classList.add('hidden');
    } else if (numberOfDice == 5) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.remove('hidden');
        rollZoneThree.classList.remove('hidden');
        rollZoneFour.classList.remove('hidden');
        rollZoneFive.classList.remove('hidden');
        rollZoneSix.classList.add('hidden');
    } else if (numberOfDice == 6) {
        //alert(numberOfDice);
        rollZoneOne.classList.remove('hidden');
        rollZoneTwo.classList.remove('hidden');
        rollZoneThree.classList.remove('hidden');
        rollZoneFour.classList.remove('hidden');
        rollZoneFive.classList.remove('hidden');
        rollZoneSix.classList.remove('hidden');
    }
}

document.querySelector('.roll').addEventListener('click', function() {
    if (numberOfDice == 1) {
        //alert("You selected 1 die.")
        let currentRollDieOne = randomDiceResult();
        if (currentRollDieOne == 1) {
            die1ShowFront();
        } else if (currentRollDieOne == 2) {
            die1ShowTop();
        } else if (currentRollDieOne == 3) {
            die1ShowLeft();
        }  else if (currentRollDieOne == 4) {
            die1ShowRight();
        }  else if (currentRollDieOne == 5) {
            die1ShowBottom();
        }  else if (currentRollDieOne == 6) {
            die1ShowBack();
        }
        let totalRoll = currentRollDieOne;
        document.querySelector('.totalRoll').textContent = totalRoll;
    } else if (numberOfDice == 2) {
        //document.querySelector('.roll').addEventListener('click', function() {
            let currentRollDieOne = randomDiceResult();
            let currentRollDieTwo = randomDiceResult();
            if (currentRollDieOne === 1) {
                die1ShowFront();
            } else if (currentRollDieOne === 2) {
                die1ShowTop();
            } else if (currentRollDieOne === 3) {
                die1ShowLeft();
            }  else if (currentRollDieOne === 4) {
                die1ShowRight();
            }  else if (currentRollDieOne === 5) {
                die1ShowBottom();
            }  else if (currentRollDieOne === 6) {
                die1ShowBack();
            }
        
            if (currentRollDieTwo === 1) {
                die2ShowFront();
            } else if (currentRollDieTwo === 2) {
                die2ShowTop();
            } else if (currentRollDieTwo === 3) {
                die2ShowLeft();
            }  else if (currentRollDieTwo === 4) {
                die2ShowRight();
            }  else if (currentRollDieTwo === 5) {
                die2ShowBottom();
            }  else if (currentRollDieTwo === 6) {
                die2ShowBack();
            }
                
            let totalRoll = currentRollDieOne + currentRollDieTwo;
            document.querySelector('.totalRoll').textContent = totalRoll;
        //});

    } else if (numberOfDice === 3) {
        //document.querySelector('.roll').addEventListener('click', function() {
            let currentRollDieOne = randomDiceResult();
            let currentRollDieTwo = randomDiceResult();
            let currentRollDieThree = randomDiceResult();
            if (currentRollDieOne === 1) {
                die1ShowFront();
            } else if (currentRollDieOne === 2) {
                die1ShowTop();
            } else if (currentRollDieOne === 3) {
                die1ShowLeft();
            }  else if (currentRollDieOne === 4) {
                die1ShowRight();
            }  else if (currentRollDieOne === 5) {
                die1ShowBottom();
            }  else if (currentRollDieOne === 6) {
                die1ShowBack();
            }
        
            if (currentRollDieTwo === 1) {
                die2ShowFront();
            } else if (currentRollDieTwo === 2) {
                die2ShowTop();
            } else if (currentRollDieTwo === 3) {
                die2ShowLeft();
            }  else if (currentRollDieTwo === 4) {
                die2ShowRight();
            }  else if (currentRollDieTwo === 5) {
                die2ShowBottom();
            }  else if (currentRollDieTwo === 6) {
                die2ShowBack();
            }
        
        
            if (currentRollDieThree === 1) {
                die3ShowFront();
            } else if (currentRollDieThree === 2) {
                die3ShowTop();
            } else if (currentRollDieThree === 3) {
                die3ShowLeft();
            }  else if (currentRollDieThree === 4) {
                die3ShowRight();
            }  else if (currentRollDieThree === 5) {
                die3ShowBottom();
            }  else if (currentRollDieThree === 6) {
                die3ShowBack();
            }
        
            let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree;
            document.querySelector('.totalRoll').textContent = totalRoll;
        //});

    } else if (numberOfDice === 4) {
        document.querySelector('.roll').addEventListener('click', function() {
            let currentRollDieOne = randomDiceResult();
            let currentRollDieTwo = randomDiceResult();
            let currentRollDieThree = randomDiceResult();
            let currentRollDieFour = randomDiceResult();
            if (currentRollDieOne === 1) {
                die1ShowFront();
            } else if (currentRollDieOne === 2) {
                die1ShowTop();
            } else if (currentRollDieOne === 3) {
                die1ShowLeft();
            }  else if (currentRollDieOne === 4) {
                die1ShowRight();
            }  else if (currentRollDieOne === 5) {
                die1ShowBottom();
            }  else if (currentRollDieOne === 6) {
                die1ShowBack();
            }
        
            if (currentRollDieTwo === 1) {
                die2ShowFront();
            } else if (currentRollDieTwo === 2) {
                die2ShowTop();
            } else if (currentRollDieTwo === 3) {
                die2ShowLeft();
            }  else if (currentRollDieTwo === 4) {
                die2ShowRight();
            }  else if (currentRollDieTwo === 5) {
                die2ShowBottom();
            }  else if (currentRollDieTwo === 6) {
                die2ShowBack();
            }
        
            if (currentRollDieThree === 1) {
                die3ShowFront();
            } else if (currentRollDieThree === 2) {
                die3ShowTop();
            } else if (currentRollDieThree === 3) {
                die3ShowLeft();
            }  else if (currentRollDieThree === 4) {
                die3ShowRight();
            }  else if (currentRollDieThree === 5) {
                die3ShowBottom();
            }  else if (currentRollDieThree === 6) {
                die3ShowBack();
            }
        
            if (currentRollDieFour === 1) {
                die4ShowFront();
            } else if (currentRollDieFour === 2) {
                die4ShowTop();
            } else if (currentRollDieFour === 3) {
                die4ShowLeft();
            }  else if (currentRollDieFour === 4) {
                die4ShowRight();
            }  else if (currentRollDieFour === 5) {
                die4ShowBottom();
            }  else if (currentRollDieFour === 6) {
                die4ShowBack();
            }
        
            let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree + currentRollDieFour;
            document.querySelector('.totalRoll').textContent = totalRoll;
        });

    } else if (numberOfDice === 5) {
        document.querySelector('.roll').addEventListener('click', function() {
            let currentRollDieOne = randomDiceResult();
            let currentRollDieTwo = randomDiceResult();
            let currentRollDieThree = randomDiceResult();
            let currentRollDieFour = randomDiceResult();
            let currentRollDieFive = randomDiceResult();
            if (currentRollDieOne === 1) {
                die1ShowFront();
            } else if (currentRollDieOne === 2) {
                die1ShowTop();
            } else if (currentRollDieOne === 3) {
                die1ShowLeft();
            }  else if (currentRollDieOne === 4) {
                die1ShowRight();
            }  else if (currentRollDieOne === 5) {
                die1ShowBottom();
            }  else if (currentRollDieOne === 6) {
                die1ShowBack();
            }
        
            if (currentRollDieTwo === 1) {
                die2ShowFront();
            } else if (currentRollDieTwo === 2) {
                die2ShowTop();
            } else if (currentRollDieTwo === 3) {
                die2ShowLeft();
            }  else if (currentRollDieTwo === 4) {
                die2ShowRight();
            }  else if (currentRollDieTwo === 5) {
                die2ShowBottom();
            }  else if (currentRollDieTwo === 6) {
                die2ShowBack();
            }
        
            if (currentRollDieThree === 1) {
                die3ShowFront();
            } else if (currentRollDieThree === 2) {
                die3ShowTop();
            } else if (currentRollDieThree === 3) {
                die3ShowLeft();
            }  else if (currentRollDieThree === 4) {
                die3ShowRight();
            }  else if (currentRollDieThree === 5) {
                die3ShowBottom();
            }  else if (currentRollDieThree === 6) {
                die3ShowBack();
            }
        
            if (currentRollDieFour === 1) {
                die4ShowFront();
            } else if (currentRollDieFour === 2) {
                die4ShowTop();
            } else if (currentRollDieFour === 3) {
                die4ShowLeft();
            }  else if (currentRollDieFour === 4) {
                die4ShowRight();
            }  else if (currentRollDieFour === 5) {
                die4ShowBottom();
            }  else if (currentRollDieFour === 6) {
                die4ShowBack();
            }
        
            if (currentRollDieFive === 1) {
                die5ShowFront();
            } else if (currentRollDieFive === 2) {
                die5ShowTop();
            } else if (currentRollDieFive === 3) {
                die5ShowLeft();
            }  else if (currentRollDieFive === 4) {
                die5ShowRight();
            }  else if (currentRollDieFive === 5) {
                die5ShowBottom();
            }  else if (currentRollDieFive === 6) {
                die5ShowBack();
            }
        
            let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree + currentRollDieFour + currentRollDieFive;
            document.querySelector('.totalRoll').textContent = totalRoll;
        });

    } else if (numberOfDice === 6) {
        document.querySelector('.roll').addEventListener('click', function() {
            let currentRollDieOne = randomDiceResult();
            let currentRollDieTwo = randomDiceResult();
            let currentRollDieThree = randomDiceResult();
            let currentRollDieFour = randomDiceResult();
            let currentRollDieFive = randomDiceResult();
            let currentRollDieSix = randomDiceResult();
            if (currentRollDieOne === 1) {
                die1ShowFront();
            } else if (currentRollDieOne === 2) {
                die1ShowTop();
            } else if (currentRollDieOne === 3) {
                die1ShowLeft();
            }  else if (currentRollDieOne === 4) {
                die1ShowRight();
            }  else if (currentRollDieOne === 5) {
                die1ShowBottom();
            }  else if (currentRollDieOne === 6) {
                die1ShowBack();
            }
        
            if (currentRollDieTwo === 1) {
                die2ShowFront();
            } else if (currentRollDieTwo === 2) {
                die2ShowTop();
            } else if (currentRollDieTwo === 3) {
                die2ShowLeft();
            }  else if (currentRollDieTwo === 4) {
                die2ShowRight();
            }  else if (currentRollDieTwo === 5) {
                die2ShowBottom();
            }  else if (currentRollDieTwo === 6) {
                die2ShowBack();
            }
        
            if (currentRollDieThree === 1) {
                die3ShowFront();
            } else if (currentRollDieThree === 2) {
                die3ShowTop();
            } else if (currentRollDieThree === 3) {
                die3ShowLeft();
            }  else if (currentRollDieThree === 4) {
                die3ShowRight();
            }  else if (currentRollDieThree === 5) {
                die3ShowBottom();
            }  else if (currentRollDieThree === 6) {
                die3ShowBack();
            }
        
            if (currentRollDieFour === 1) {
                die4ShowFront();
            } else if (currentRollDieFour === 2) {
                die4ShowTop();
            } else if (currentRollDieFour === 3) {
                die4ShowLeft();
            }  else if (currentRollDieFour === 4) {
                die4ShowRight();
            }  else if (currentRollDieFour === 5) {
                die4ShowBottom();
            }  else if (currentRollDieFour === 6) {
                die4ShowBack();
            }
        
            if (currentRollDieFive === 1) {
                die5ShowFront();
            } else if (currentRollDieFive === 2) {
                die5ShowTop();
            } else if (currentRollDieFive === 3) {
                die5ShowLeft();
            }  else if (currentRollDieFive === 4) {
                die5ShowRight();
            }  else if (currentRollDieFive === 5) {
                die5ShowBottom();
            }  else if (currentRollDieFive === 6) {
                die5ShowBack();
            }
        
        
        
            if (currentRollDieSix === 1) {
                die6ShowFront();
            } else if (currentRollDieSix === 2) {
                die6ShowTop();
            } else if (currentRollDieSix === 3) {
                die6ShowLeft();
            }  else if (currentRollDieSix === 4) {
                die6ShowRight();
            }  else if (currentRollDieSix === 5) {
                die6ShowBottom();
            }  else if (currentRollDieSix === 6) {
                die5ShowBack();
            }
        
        
        
            let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree + currentRollDieFour + currentRollDieFive + currentRollDieSix;
            document.querySelector('.totalRoll').textContent = totalRoll;
        });

    }
});

    

// Disable pinch zoom
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);

