window.addEventListener("load", alert("Please select a level to begin"));

//Globals
const lvls = {
  easy: 6,
  med: 4,
  hard: 2
};

// Words for each level
const easyWords = [
  "apple",
  "delight",
  "sun",
  "four",
  "water",
  "six",
  "grass",
  "table",
  "ear",
  "pick",
  "none",
  "light",
  "cow",
  "dog",
  "cat",
  "pan",
  "wendy",
  "wind",
  "ocean"
];

const mediumWords = [
  "prefiguration",
  "archetype",
  "epitome",
  "guide",
  "holotype",
  "image",
  "loadstar",
  "lodestar",
  "microcosm",
  "original",
  "paradigm",
  "pilot",
  "prototype",
  "template",
  "templet"
];

const hardWords = [
  "uncomplicated",
  "unproblematic",
  "dim-witted",
  "simple-minded",
  "supererogatory",
  "superfluous",
  "surplus",
  "duplicate",
  "elucidate",
  "enlighten",
  "illuminate",
  "recompense",
  "remunerate",
  "correct",
  "counterbalance"
];

//DOM elements
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const newGame = document.querySelector("#newGame");

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

//Event Listeners
easy.addEventListener("click", levelSelector);
medium.addEventListener("click", levelSelector);
hard.addEventListener("click", levelSelector);
newGame.addEventListener("click", restartGame);

let time, resetTime, score, isPlaying, lvl, wordsChoice;

score = 0;

function levelSelector(e) {
  e.preventDefault();
  if (e.target.id === "hard") {
    level = {
      lvl: "hard",
      words: hardWords,
      time: 4
    };
    // console.log(e.target.id);
  } else if (e.target.id === "medium") {
    level = {
      lvl: "medium",
      words: mediumWords,
      time: 6
    };
    // console.log(e.target.id);
  } else {
    level = {
      lvl: "easy",
      words: easyWords,
      time: 8
    };
    // console.log(e.target.id);
  }
  // console.log(level);

  wordInput.setAttribute("autofocus", "autofocus");

  // showWord(level.words);
  time = level.time;
  resetTime = level.time;
  wordsChoice = level.words;
  init(wordsChoice);
  disableButtons();

  return time, wordsChoice, resetTime;
}

// initialize Game
function init(wordsChoice) {
  showWord(wordsChoice);

  // Start matching on word input
  wordInput.addEventListener("input", startMatch);

  // call countdown every second
  setInterval(countdown, 1000);

  //Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  newGame.disabled = true;
  if (matchWords()) {
    isPlaying = true;
    time = resetTime;
    showWord();
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

function showWord() {
  // generate random array index
  const randIndex = Math.floor(Math.random() * 15);
  // Output random word
  currentWord.innerHTML = wordsChoice[randIndex];
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
    wordInput.disabled = true;
    easy.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    newGame.disabled = false;
  }
}

function restartGame() {
  enableButtons();
  wordInput.disabled = false;
  location.reload(true);
}

function disableButtons() {
  easy.disabled = true;
  medium.disabled = true;
  hard.disabled = true;
}
function enableButtons() {
  easy.disabled = false;
  medium.disabled = false;
  hard.disabled = false;
}
