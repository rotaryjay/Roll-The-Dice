// Dice Object
let numberOfDice = 0;

function randomDiceResult() {
  return Math.floor(Math.random() * 6 + 1);
}

let die1 = document.querySelector(".die1");
const totalDiceSelected = document.querySelector(".totalDiceSelected");

function showFront(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.add("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showTop(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.remove("show-front");
  die.classList.add("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showLeft(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.add("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showRight(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.add("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showBottom(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.add("show-bottom");
  die.classList.remove("show-back");
}
function showBack(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector('.die' + diceNumber)
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.add("show-back");
}
/*function die1ShowFront() {
  die1.classList.add("show-front");
  die1.classList.remove("show-top");
  die1.classList.remove("show-left");
  die1.classList.remove("show-right");
  die1.classList.remove("show-bottom");
  die1.classList.remove("show-back");
}
function die1ShowTop() {
  die1.classList.remove("show-front");
  die1.classList.add("show-top");
  die1.classList.remove("show-left");
  die1.classList.remove("show-right");
  die1.classList.remove("show-bottom");
  die1.classList.remove("show-back");
}
function die1ShowLeft() {
  die1.classList.remove("show-front");
  die1.classList.remove("show-top");
  die1.classList.add("show-left");
  die1.classList.remove("show-right");
  die1.classList.remove("show-bottom");
  die1.classList.remove("show-back");
}
function die1ShowRight() {
  die1.classList.remove("show-front");
  die1.classList.remove("show-top");
  die1.classList.remove("show-left");
  die1.classList.add("show-right");
  die1.classList.remove("show-bottom");
  die1.classList.remove("show-back");
}
function die1ShowBottom() {
  die1.classList.remove("show-front");
  die1.classList.remove("show-top");
  die1.classList.remove("show-left");
  die1.classList.remove("show-right");
  die1.classList.add("show-bottom");
  die1.classList.remove("show-back");
}
function die1ShowBack() {
  die1.classList.remove("show-front");
  die1.classList.remove("show-top");
  die1.classList.remove("show-left");
  die1.classList.remove("show-right");
  die1.classList.remove("show-bottom");
  die1.classList.add("show-back");
}*/

document.querySelector(".addDie").addEventListener("click", function () {
  if (numberOfDice >= 0 && numberOfDice < 5) {
    numberOfDice++;
    let diceNumber = numberOfDice + 1;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
    console.log("Number of dice is " + diceNumber);
    const die = document.querySelector(".die");
    const clone = die.cloneNode(true);
    document.querySelector(".gameBoard").appendChild(clone);
    clone.classList.add('die' + diceNumber);
    clone.classList.remove('die1');
  } else {
    alert("You cannot have more than 6 dice.");
  }
});
document.querySelector(".removeDie").addEventListener("click", function () {
  if (numberOfDice <= 5 && numberOfDice > 0) {
    let diceNumber = numberOfDice + 1;
    document.querySelector('.die' + diceNumber).remove();
    numberOfDice--;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
    console.log("Number of dice is " + diceNumber);
  } else {
    alert("You cannot have less than 1 die.");
  }
});

document.querySelector(".roll").addEventListener("click", function () {
  let currentRollDieOne = randomDiceResult();
  let diceNumber = 'die' + (numberOfDice + 1);
  if (currentRollDieOne == 1) {
    //die1ShowFront();
    showFront(diceNumber);
  } else if (currentRollDieOne == 2) {
    //die1ShowTop();
    showTop(diceNumber);
  } else if (currentRollDieOne == 3) {
    //die1ShowLeft();
    showLeft(diceNumber);
  } else if (currentRollDieOne == 4) {
    //die1ShowRight();
    showRight(diceNumber);
  } else if (currentRollDieOne == 5) {
    //die1ShowBottom();
    showBottom(diceNumber);
  } else if (currentRollDieOne == 6) {
    //die1ShowBack();
    showBack(diceNumber);
  }
});

// Disable pinch zoom
document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  false
);
