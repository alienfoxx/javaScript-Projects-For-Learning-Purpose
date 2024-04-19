const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const statusText = document.getElementById("status");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);

  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timerEl.style.color = "#007f73";
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);

      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
  timerEl.style.color = "#ff204e";
  statusText.textContent = "See You Soon !";
}
function resetTimer() {
  statusText.textContent = "Let's Do the Work !";

  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
  startTimer();
  timerEl.style.color = "#0e46a3 ";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
