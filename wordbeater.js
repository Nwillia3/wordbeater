window.addEventListener("load", init);
//Globals
const lvls = {
  easy: 5,
  med: 3,
  hard: 1
};

let time, score, isPlaying, lvl;

function lvlCh(e) {
  e.preventDefault();
  if (e.target.id === "hard") {
    lvl = "hard";
  } else if (e.target.id === "medium") {
    lvl = "medium";
  } else {
    lvl = "easy";
  }
  return lvl;
}

time = 5;
score = 0;

//DOM elements

const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = ["one", "two", "three", "four", "five", "six", "seven"];

easy.addEventListener("click", lvlCh);
medium.addEventListener("click", lvlCh);
hard.addEventListener("click", lvlCh);

// initialize Game

function init() {
  // load word from array
  showWord(words);

  //   lvlCh(words);

  // Start matching on word input
  wordInput.addEventListener("input", startMatch);

  // call countdown every second
  setInterval(countdown, 1000);

  //Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordinput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = " ";
    return false;
  }
}

function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * 7);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
  // check time
  if (time > 0) {
    // decrease time
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

// Check game status

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game is over";
    score = -1;
  }
}
