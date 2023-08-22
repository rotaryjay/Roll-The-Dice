//document.addEventListener('DOMContentLoaded', function () {

    let numberOfDice = 1;

    document.querySelector('.addDie').addEventListener('click', function() {
        if ((numberOfDice >= 1) && (numberOfDice < 6)) {
            numberOfDice++
            console.log(numberOfDice);
            document.querySelector('.totalRoll').textContent(numberOfDice);
        } else {
            alert("You cannot have more than 6 dice.");
        }
    });
    document.querySelector('.removeDie').addEventListener('click', function() {
        if ((numberOfDice <= 6) && (numberOfDice > 1)) {
            numberOfDice--;
            console.log(numberOfDice);
            document.querySelector('.totalRoll').textContent(numberOfDice);
        } else {
            alert("You cannot have less than 1 die.");
        }
    });

    let rollZoneOne = document.querySelector('.rollZone1');
    let rollZoneTwo = document.querySelector('.rollZone2');
    let rollZoneThree = document.querySelector('.rollZone3');
    let rollZoneFour = document.querySelector('.rollZone4');
    let rollZoneFive = document.querySelector('.rollZone5');
    let rollZoneSix = document.querySelector('.rollZone6');

    let dieOne = document.querySelector('.rollZone1 .dieOne');
    let dieTwo = document.querySelector('.rollZone2 .dieTwo');
    let dieThree = document.querySelector('.rollZone3 .dieThree');
    let dieFour = document.querySelector('.rollZone4 .dieFour');
    let dieFive = document.querySelector('.rollZone5 .dieFive');
    let dieSix = document.querySelector('.rollZone6 .dieSix');

    function resetDice() {
        dieOne.classList.add('show-front');
        dieOne.classList.remove('show-top');
        dieOne.classList.remove('show-left');
        dieOne.classList.remove('show-right');
        dieOne.classList.remove('show-bottom');
        dieOne.classList.remove('show-back');
        dieTwo.classList.add('show-front');
        dieTwo.classList.remove('show-top');
        dieTwo.classList.remove('show-left');
        dieTwo.classList.remove('show-right');
        dieTwo.classList.remove('show-bottom');
        dieTwo.classList.remove('show-back');
        dieThree.classList.add('show-front');
        dieThree.classList.remove('show-top');
        dieThree.classList.remove('show-left');
        dieThree.classList.remove('show-right');
        dieThree.classList.remove('show-bottom');
        dieThree.classList.remove('show-back');
        dieFour.classList.add('show-front');
        dieFour.classList.remove('show-top');
        dieFour.classList.remove('show-left');
        dieFour.classList.remove('show-right');
        dieFour.classList.remove('show-bottom');
        dieFour.classList.remove('show-back');
        dieFive.classList.add('show-front');
        dieFive.classList.remove('show-top');
        dieFive.classList.remove('show-left');
        dieFive.classList.remove('show-right');
        dieFive.classList.remove('show-bottom');
        dieFive.classList.remove('show-back');
        dieSix.classList.add('show-front');
        dieSix.classList.remove('show-top');
        dieSix.classList.remove('show-left');
        dieSix.classList.remove('show-right');
        dieSix.classList.remove('show-bottom');
        dieSix.classList.remove('show-back');
    }

    showHideRollZones();

    function randomDiceResult() {
        return Math.floor((Math.random()*6)+1)
    }

    function showHideRollZones() {
        if (numberOfDice === 1) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.add('hidden');
            rollZoneThree.classList.add('hidden');
            rollZoneFour.classList.add('hidden');
            rollZoneFive.classList.add('hidden');
            rollZoneSix.classList.add('hidden');
            document.querySelector('.totalRoll').textContent = '1';
        } else if (numberOfDice === 2) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.remove('hidden');
            rollZoneThree.classList.add('hidden');
            rollZoneFour.classList.add('hidden');
            rollZoneFive.classList.add('hidden');
            rollZoneSix.classList.add('hidden');
            document.querySelector('.totalRoll').textContent = '2';
        } else if (numberOfDice === 3) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.remove('hidden');
            rollZoneThree.classList.remove('hidden');
            rollZoneFour.classList.add('hidden');
            rollZoneFive.classList.add('hidden');
            rollZoneSix.classList.add('hidden');
            document.querySelector('.totalRoll').textContent = '3';
        } else if (numberOfDice === 4) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.remove('hidden');
            rollZoneThree.classList.remove('hidden');
            rollZoneFour.classList.remove('hidden');
            rollZoneFive.classList.add('hidden');
            rollZoneSix.classList.add('hidden');
            document.querySelector('.totalRoll').textContent = '4';
        } else if (numberOfDice === 5) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.remove('hidden');
            rollZoneThree.classList.remove('hidden');
            rollZoneFour.classList.remove('hidden');
            rollZoneFive.classList.remove('hidden');
            rollZoneSix.classList.add('hidden');
            document.querySelector('.totalRoll').textContent = '5';
        } else if (numberOfDice === 6) {
            //alert(numberOfDice);
            rollZoneOne.classList.remove('hidden');
            rollZoneTwo.classList.remove('hidden');
            rollZoneThree.classList.remove('hidden');
            rollZoneFour.classList.remove('hidden');
            rollZoneFive.classList.remove('hidden');
            rollZoneSix.classList.remove('hidden');
            document.querySelector('.totalRoll').textContent = '6';
        }
    }

    /*document.querySelector('#numberOfDice').addEventListener('change', function() {
        selectElement = document.querySelector('#numberOfDice');
        output = selectElement.value;
        numberOfDice = output;
        showHideRollZones();
        resetDice();
        document.querySelector('.totalRoll').textContent = output;
    });*/

    document.querySelector('.roll').addEventListener('click', function() {
        if (numberOfDice === '1') {
            let currentRollDieOne = randomDiceResult();
            if (currentRollDieOne === 1) {
                dieOne.classList.add('show-front');
                dieOne.classList.remove('show-top');
                dieOne.classList.remove('show-left');
                dieOne.classList.remove('show-right');
                dieOne.classList.remove('show-bottom');
                dieOne.classList.remove('show-back');
            } else if (currentRollDieOne === 2) {
                dieOne.classList.remove('show-front');
                dieOne.classList.add('show-top');
                dieOne.classList.remove('show-left');
                dieOne.classList.remove('show-right');
                dieOne.classList.remove('show-bottom');
                dieOne.classList.remove('show-back');
            } else if (currentRollDieOne === 3) {
                dieOne.classList.remove('show-front');
                dieOne.classList.remove('show-top');
                dieOne.classList.add('show-left');
                dieOne.classList.remove('show-right');
                dieOne.classList.remove('show-bottom');
                dieOne.classList.remove('show-back');
            }  else if (currentRollDieOne === 4) {
                dieOne.classList.remove('show-front');
                dieOne.classList.remove('show-top');
                dieOne.classList.remove('show-left');
                dieOne.classList.add('show-right');
                dieOne.classList.remove('show-bottom');
                dieOne.classList.remove('show-back');
            }  else if (currentRollDieOne === 5) {
                dieOne.classList.remove('show-front');
                dieOne.classList.remove('show-top');
                dieOne.classList.remove('show-left');
                dieOne.classList.remove('show-right');
                dieOne.classList.add('show-bottom');
                dieOne.classList.remove('show-back');
            }  else if (currentRollDieOne === 6) {
                dieOne.classList.remove('show-front');
                dieOne.classList.remove('show-top');
                dieOne.classList.remove('show-left');
                dieOne.classList.remove('show-right');
                dieOne.classList.remove('show-bottom');
                dieOne.classList.add('show-back');
            }
            let totalRoll = currentRollDieOne;
            document.querySelector('.totalRoll').textContent = totalRoll;
        } else if (numberOfDice === '2') {
            document.querySelector('.roll').addEventListener('click', function() {
                let currentRollDieOne = randomDiceResult();
                let currentRollDieTwo = randomDiceResult();
                if (currentRollDieOne === 1) {
                    dieOne.classList.add('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 2) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.add('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 3) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.add('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 4) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.add('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 5) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.add('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 6) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.add('show-back');
                }
            
                if (currentRollDieTwo === 1) {
                    dieTwo.classList.add('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 2) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.add('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 3) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.add('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 4) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.add('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 5) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.add('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 6) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.add('show-back');
                }
                    
                let totalRoll = currentRollDieOne + currentRollDieTwo;
                document.querySelector('.totalRoll').textContent = totalRoll;
            });
    
        } else if (numberOfDice === '3') {
            document.querySelector('.roll').addEventListener('click', function() {
                let currentRollDieOne = randomDiceResult();
                let currentRollDieTwo = randomDiceResult();
                let currentRollDieThree = randomDiceResult();
                if (currentRollDieOne === 1) {
                    dieOne.classList.add('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 2) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.add('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 3) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.add('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 4) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.add('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 5) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.add('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 6) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.add('show-back');
                }
            
                if (currentRollDieTwo === 1) {
                    dieTwo.classList.add('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 2) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.add('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 3) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.add('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 4) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.add('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 5) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.add('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 6) {
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
                document.querySelector('.totalRoll').textContent = totalRoll;
            });
    
        } else if (numberOfDice === '4') {
            document.querySelector('.roll').addEventListener('click', function() {
                let currentRollDieOne = randomDiceResult();
                let currentRollDieTwo = randomDiceResult();
                let currentRollDieThree = randomDiceResult();
                let currentRollDieFour = randomDiceResult();
                if (currentRollDieOne === 1) {
                    dieOne.classList.add('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 2) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.add('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 3) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.add('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 4) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.add('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 5) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.add('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 6) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.add('show-back');
                }
            
                if (currentRollDieTwo === 1) {
                    dieTwo.classList.add('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 2) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.add('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 3) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.add('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 4) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.add('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 5) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.add('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 6) {
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
            
            
                if (currentRollDieFour === 1) {
                    dieFour.classList.add('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 2) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.add('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 3) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.add('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 4) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.add('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 5) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.add('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 6) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.add('show-back');
                }
            
                let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree + currentRollDieFour;
                document.querySelector('.totalRoll').textContent = totalRoll;
            });
    
        } else if (numberOfDice === '5') {
            document.querySelector('.roll').addEventListener('click', function() {
                let currentRollDieOne = randomDiceResult();
                let currentRollDieTwo = randomDiceResult();
                let currentRollDieThree = randomDiceResult();
                let currentRollDieFour = randomDiceResult();
                let currentRollDieFive = randomDiceResult();
                if (currentRollDieOne === 1) {
                    dieOne.classList.add('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 2) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.add('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 3) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.add('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 4) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.add('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 5) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.add('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 6) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.add('show-back');
                }
            
                if (currentRollDieTwo === 1) {
                    dieTwo.classList.add('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 2) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.add('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 3) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.add('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 4) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.add('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 5) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.add('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 6) {
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
            
            
                if (currentRollDieFour === 1) {
                    dieFour.classList.add('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 2) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.add('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 3) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.add('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 4) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.add('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 5) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.add('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 6) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.add('show-back');
                }
            
            
            
                if (currentRollDieFive === 1) {
                    dieFive.classList.add('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                } else if (currentRollDieFive === 2) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.add('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                } else if (currentRollDieFive === 3) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.add('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 4) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.add('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 5) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.add('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 6) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.add('show-back');
                }
            
                let totalRoll = currentRollDieOne + currentRollDieTwo + currentRollDieThree + currentRollDieFour + currentRollDieFive;
                document.querySelector('.totalRoll').textContent = totalRoll;
            });
    
        } else if (numberOfDice === '6') {
            document.querySelector('.roll').addEventListener('click', function() {
                let currentRollDieOne = randomDiceResult();
                let currentRollDieTwo = randomDiceResult();
                let currentRollDieThree = randomDiceResult();
                let currentRollDieFour = randomDiceResult();
                let currentRollDieFive = randomDiceResult();
                let currentRollDieSix = randomDiceResult();
                if (currentRollDieOne === 1) {
                    dieOne.classList.add('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 2) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.add('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                } else if (currentRollDieOne === 3) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.add('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 4) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.add('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 5) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.add('show-bottom');
                    dieOne.classList.remove('show-back');
                }  else if (currentRollDieOne === 6) {
                    dieOne.classList.remove('show-front');
                    dieOne.classList.remove('show-top');
                    dieOne.classList.remove('show-left');
                    dieOne.classList.remove('show-right');
                    dieOne.classList.remove('show-bottom');
                    dieOne.classList.add('show-back');
                }
            
                if (currentRollDieTwo === 1) {
                    dieTwo.classList.add('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 2) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.add('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                } else if (currentRollDieTwo === 3) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.add('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 4) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.add('show-right');
                    dieTwo.classList.remove('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 5) {
                    dieTwo.classList.remove('show-front');
                    dieTwo.classList.remove('show-top');
                    dieTwo.classList.remove('show-left');
                    dieTwo.classList.remove('show-right');
                    dieTwo.classList.add('show-bottom');
                    dieTwo.classList.remove('show-back');
                }  else if (currentRollDieTwo === 6) {
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
            
            
                if (currentRollDieFour === 1) {
                    dieFour.classList.add('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 2) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.add('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                } else if (currentRollDieFour === 3) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.add('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 4) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.add('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 5) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.add('show-bottom');
                    dieFour.classList.remove('show-back');
                }  else if (currentRollDieFour === 6) {
                    dieFour.classList.remove('show-front');
                    dieFour.classList.remove('show-top');
                    dieFour.classList.remove('show-left');
                    dieFour.classList.remove('show-right');
                    dieFour.classList.remove('show-bottom');
                    dieFour.classList.add('show-back');
                }
            
            
            
                if (currentRollDieFive === 1) {
                    dieFive.classList.add('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                } else if (currentRollDieFive === 2) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.add('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                } else if (currentRollDieFive === 3) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.add('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 4) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.add('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 5) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.add('show-bottom');
                    dieFive.classList.remove('show-back');
                }  else if (currentRollDieFive === 6) {
                    dieFive.classList.remove('show-front');
                    dieFive.classList.remove('show-top');
                    dieFive.classList.remove('show-left');
                    dieFive.classList.remove('show-right');
                    dieFive.classList.remove('show-bottom');
                    dieFive.classList.add('show-back');
                }
            
            
            
                if (currentRollDieSix === 1) {
                    dieSix.classList.add('show-front');
                    dieSix.classList.remove('show-top');
                    dieSix.classList.remove('show-left');
                    dieSix.classList.remove('show-right');
                    dieSix.classList.remove('show-bottom');
                    dieSix.classList.remove('show-back');
                } else if (currentRollDieSix === 2) {
                    dieSix.classList.remove('show-front');
                    dieSix.classList.add('show-top');
                    dieSix.classList.remove('show-left');
                    dieSix.classList.remove('show-right');
                    dieSix.classList.remove('show-bottom');
                    dieSix.classList.remove('show-back');
                } else if (currentRollDieSix === 3) {
                    dieSix.classList.remove('show-front');
                    dieSix.classList.remove('show-top');
                    dieSix.classList.add('show-left');
                    dieSix.classList.remove('show-right');
                    dieSix.classList.remove('show-bottom');
                    dieSix.classList.remove('show-back');
                }  else if (currentRollDieSix === 4) {
                    dieSix.classList.remove('show-front');
                    dieSix.classList.remove('show-top');
                    dieSix.classList.remove('show-left');
                    dieSix.classList.add('show-right');
                    dieSix.classList.remove('show-bottom');
                    dieSix.classList.remove('show-back');
                }  else if (currentRollDieSix === 5) {
                    dieSix.classList.remove('show-front');
                    dieSix.classList.remove('show-top');
                    dieSix.classList.remove('show-left');
                    dieSix.classList.remove('show-right');
                    dieSix.classList.add('show-bottom');
                    dieSix.classList.remove('show-back');
                }  else if (currentRollDieSix === 6) {
                    dieSix.classList.remove('show-front');
                    dieSix.classList.remove('show-top');
                    dieSix.classList.remove('show-left');
                    dieSix.classList.remove('show-right');
                    dieSix.classList.remove('show-bottom');
                    dieSix.classList.add('show-back');
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

//});