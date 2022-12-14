// 사용변수
const GAME_TIME = 9;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

wordInput.addEventListener("input", () => {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    score++;
    scoreDisplay.innerText = score;
    wordInput.value = "";
  }
});

buttonCange("게임시작");

function run() {
  time = GAME_TIME;
  timeInterval = setInterval(countDown, 1000);
}

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function buttonCange(text) {
  button.innerText = text;
  text === "게임시작"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
}
