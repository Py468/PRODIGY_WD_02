let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  let diffInHrs = Math.floor(time / 3600000);
  let diffInMin = Math.floor((time % 3600000) / 60000);
  let diffInSec = Math.floor((time % 60000) / 1000);

  let formattedHrs = diffInHrs.toString().padStart(2, "0");
  let formattedMin = diffInMin.toString().padStart(2, "0");
  let formattedSec = diffInSec.toString().padStart(2, "0");

  return `${formattedHrs}:${formattedMin}:${formattedSec}`;
}

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      display.innerHTML = timeToString(elapsedTime);
    }, 1000);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  running = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  display.innerHTML = "00:00:00";
  elapsedTime = 0;
  running = false;
  lapsList.innerHTML = "";
}

function lapTimer() {
  if (running) {
    let lapTime = timeToString(elapsedTime);
    let li = document.createElement("li");
    li.innerText = lapTime;
    lapsList.appendChild(li);
  }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);
