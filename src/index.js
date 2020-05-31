// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const inputRange = document.querySelector("input[name='rangePoint']"),
  userPoint = document.querySelector("input[name='userPoint']"),
  formPlay = document.querySelector(".play");

let maxRange = 10;

function gameResult(user, machine) {
  let resultText = "";

  if (user > machine) {
    resultText = "You won!";
  } else if (user < machine) {
    resultText = "You lost!";
  } else {
    resultText = "Draw!";
  }

  const playResult = document.querySelector(".playResult");
  playResult.innerText = resultText;
}

function paintToResult(user, machine) {
  const playPoint = document.querySelector(".playPoint");
  playPoint.innerText = `You chose: ${user}, the machine chose: ${machine}`;
  gameResult(user, machine);
}

function handleMaxRange(event) {
  event.preventDefault();
  maxRange = inputRange.value;
  const maxRangeTitle = document.querySelector(".rangeTitle");
  maxRangeTitle.innerText = `Generate a number between 0 and ${maxRange}`;
  userPoint.max = maxRange;
}

function handlePlay(event) {
  event.preventDefault();
  const machinePoint = Math.floor(Math.random() * (maxRange - 0)) + 0;

  paintToResult(userPoint.value, machinePoint);
}

function init() {
  formPlay.addEventListener("submit", handlePlay);
  inputRange.addEventListener("change", handleMaxRange);
}

init();
