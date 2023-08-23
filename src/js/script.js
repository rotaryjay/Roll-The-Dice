// Dice Object
let numberOfDice = 0;
let arrayDice = [1];

function randomDiceResult() {
  return Math.floor(Math.random() * 6 + 1);
}

let die1 = document.querySelector(".die1");
const totalDiceSelected = document.querySelector(".totalDiceSelected");

function showFront(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.add("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showTop(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.add("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showLeft(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.add("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showRight(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.add("show-right");
  die.classList.remove("show-bottom");
  die.classList.remove("show-back");
}
function showBottom(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.add("show-bottom");
  die.classList.remove("show-back");
}
function showBack(diceNumber) {
  console.log(diceNumber);
  let die = document.querySelector("." + diceNumber);
  die.classList.remove("show-front");
  die.classList.remove("show-top");
  die.classList.remove("show-left");
  die.classList.remove("show-right");
  die.classList.remove("show-bottom");
  die.classList.add("show-back");
}

document.querySelector(".addDie").addEventListener("click", function () {
  if (arrayDice.length >= 0 && arrayDice.length < 5) {
    console.log("The array is " + arrayDice);
    numberOfDice++;
    arrayDice.push(numberOfDice + 1);
    console.log("The array is now " + arrayDice);
    let diceNumber = numberOfDice + 1;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
    console.log("Number of dice is " + diceNumber);
    const die = document.querySelector(".die");
    const clone = die.cloneNode(true);
    document.querySelector(".gameBoard").appendChild(clone);
    clone.classList.add("die" + diceNumber);
    clone.classList.remove("die1");
  } else {
    alert("You cannot have more than 6 dice.");
  }
});
document.querySelector(".removeDie").addEventListener("click", function () {
  if (arrayDice.length <= 5 && arrayDice.length > 0) {
    console.log("The array is " + arrayDice);
    const index = arrayDice.indexOf("2");
    arrayDice.splice(index, 1);
    console.log("The array is now " + arrayDice);
    let diceNumber = numberOfDice + 1;
    document.querySelector(".die" + diceNumber).remove();
    numberOfDice--;
    totalDiceSelected.textContent = numberOfDice + 1;
    console.log("numberOfDice variable is at: " + numberOfDice);
    console.log("Number of dice is " + diceNumber);
  } else {
    alert("You cannot have less than 1 die.");
  }
});

document.querySelector(".roll").addEventListener("click", function () {
  let i = 0;
  while (i < arrayDice.length) {
    const currentDie = arrayDice[i];
    console.log(currentDie);
    let currentRollDie = randomDiceResult();
    let diceNumber = "die" + (currentRollDie);
    if (currentRollDie == 1) {
      //die1ShowFront();
      showFront(diceNumber);
    } else if (currentRollDie == 2) {
      //die1ShowTop();
      showTop(diceNumber);
    } else if (currentRollDie == 3) {
      //die1ShowLeft();
      showLeft(diceNumber);
    } else if (currentRollDie == 4) {
      //die1ShowRight();
      showRight(diceNumber);
    } else if (currentRollDie == 5) {
      //die1ShowBottom();
      showBottom(diceNumber);
    } else if (currentRollDie == 6) {
      //die1ShowBack();
      showBack(diceNumber);
    }
    i++;
  }
  /*function rollTheDice() {
    let currentRollDie1 = randomDiceResult();
    let diceNumber = "die" + (numberOfDice + 1);
    if (currentRollDie1 == 1) {
      //die1ShowFront();
      showFront(diceNumber);
    } else if (currentRollDie1 == 2) {
      //die1ShowTop();
      showTop(diceNumber);
    } else if (currentRollDie1 == 3) {
      //die1ShowLeft();
      showLeft(diceNumber);
    } else if (currentRollDie1 == 4) {
      //die1ShowRight();
      showRight(diceNumber);
    } else if (currentRollDie1 == 5) {
      //die1ShowBottom();
      showBottom(diceNumber);
    } else if (currentRollDie1 == 6) {
      //die1ShowBack();
      showBack(diceNumber);
    }
  } */
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
