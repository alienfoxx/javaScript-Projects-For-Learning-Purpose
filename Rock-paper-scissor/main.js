const buttonsEl = document.querySelectorAll("button");
const resultText = document.getElementById("result");
const playerScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
let playerCounter = 0;
let computerCounter = 0;

buttonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());

    resultText.innerText = result;
    playerScore.innerText = playerCounter;
    computerScore.innerText = computerCounter;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    computerCounter++;
    playerCounter++;
    return " Its a Tie !";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerCounter++;
    return `You Win ${playerSelection} Beats ${computerSelection}`;
  } else {
    computerCounter++;
    return `You Lose ${computerSelection} Beats ${playerSelection} `;
  }
}
