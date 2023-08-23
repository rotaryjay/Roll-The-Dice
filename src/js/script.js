// Dice Object
let numberOfDice = 0;

function randomDiceResult() {
  return Math.floor(Math.random() * 6 + 1);
}

let die1 = document.querySelector(".die1");
const totalDiceSelected = document.querySelector(".totalDiceSelected");

function die1ShowFront() {
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
}

document.querySelector(".addDie").addEventListener("click", function () {
  if (numberOfDice >= 0 && numberOfDice < 5) {
    numberOfDice++;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
    const die = document.querySelector(".die");
    const clone = die.cloneNode(true);
    document.querySelector(".gameBoard").appendChild(clone);
  } else {
    alert("You cannot have more than 6 dice.");
  }
});
document.querySelector(".removeDie").addEventListener("click", function () {
  if (numberOfDice <= 5 && numberOfDice > 0) {
    numberOfDice--;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
  } else {
    alert("You cannot have less than 1 die.");
  }
});

document.querySelector(".roll").addEventListener("click", function () {
  let currentRollDieOne = randomDiceResult();
  if (currentRollDieOne == 1) {
    die1ShowFront();
  } else if (currentRollDieOne == 2) {
    die1ShowTop();
  } else if (currentRollDieOne == 3) {
    die1ShowLeft();
  } else if (currentRollDieOne == 4) {
    die1ShowRight();
  } else if (currentRollDieOne == 5) {
    die1ShowBottom();
  } else if (currentRollDieOne == 6) {
    die1ShowBack();
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
