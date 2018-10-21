window.addEventListener("load", init);
//Globals
let time, score, isPlaying;

//DOM elements

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplaay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = ["one", "two", "three", "four", "five", "six", "seven"];

// initialize Game

function init() {
  // load word from array
  showWord(words);

  //   console.log("working");
}

function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * 7);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}
