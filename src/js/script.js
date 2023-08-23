let numberOfDice = 0;
let arrayDice = [1];
let totalRoll = 0;

function randomDiceResult() {
  return Math.floor(Math.random() * 6 + 1);
}

let die1 = document.querySelector(".die1");
const totalDiceSelected = document.querySelector(".totalDiceSelected");

function showFront(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.add("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showTop(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.add("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showLeft(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.add("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showRight(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.add("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showBottom(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.add("show-bottom");
  die.classList.remove("show-back");
}
function showBack(diceNumber) {
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.add("show-back");
}

document.querySelector(".addDie").addEventListener("click", function () {
  if (arrayDice.length >= 0 && arrayDice.length < 8) {
    numberOfDice++;
    arrayDice.push(numberOfDice + 1);
    let diceNumber = numberOfDice + 1;
    totalDiceSelected.textContent = numberOfDice + 1;
    const die = document.querySelector(".die");
    const clone = die.cloneNode(true);
    document.querySelector(".gameBoard").appendChild(clone);
    clone.classList.add("die" + diceNumber);
    clone.classList.remove("die1");
  } else {
    alert("You cannot have more than 8 dice.");
  }
});
document.querySelector(".removeDie").addEventListener("click", function () {
  if (arrayDice.length <= 8 && arrayDice.length > 0) {
    const index = arrayDice.indexOf("2");
    arrayDice.splice(index, 1);
    let diceNumber = numberOfDice + 1;
    document.querySelector(".die" + diceNumber).remove();
    numberOfDice--;
    totalDiceSelected.textContent = numberOfDice + 1;
  } else {
    alert("You cannot have less than 1 die.");
  }
});

document.querySelector(".roll").addEventListener("click", function () {
  totalRoll = 0;
  let i = 0;
  while (i < arrayDice.length) {
    const currentDie = arrayDice[i];
    let currentRoll = randomDiceResult();
    let diceNumber = "die" + (currentDie);
    if (currentRoll == 1) {
      showFront(diceNumber);
    } else if (currentRoll == 2) {
      showTop(diceNumber);
    } else if (currentRoll == 3) {
      showLeft(diceNumber);
    } else if (currentRoll == 4) {
      showRight(diceNumber);
    } else if (currentRoll == 5) {
      showBottom(diceNumber);
    } else if (currentRoll == 6) {
      showBack(diceNumber);
    }
    totalRoll = totalRoll + currentRoll;
    i++;
  }
  document.querySelector('.totalRoll').textContent = totalRoll;
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
