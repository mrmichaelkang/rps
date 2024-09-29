// Setup CPU
const choices = ["Rock", "Paper", "Scissors"];
const userButtons = document.querySelectorAll(".user-btn");
const scoreText = document.querySelector("#score");
let score = 0;

function computeCPUChoice() {
  const cpuChoice = Math.floor(Math.random() * 3);
  return choices[cpuChoice];
}

function computeWinner(user) {
  cpuChoice = computeCPUChoice();

  document.querySelector("#userChoice").textContent = `User:\n${user}`;
  document.querySelector("#cpuChoice").textContent = `CPU:\n${cpuChoice}`;

  if (user === cpuChoice) {
    document.querySelector("#message").textContent = `It's a tie!`;
  } else if (
    (user === "Rock" && cpuChoice === "Scissors") ||
    (user === "Paper" && cpuChoice === "Rock") ||
    (user === "Scissors" && cpuChoice === "Paper")
  ) {
    document.querySelector(
      "#message"
    ).textContent = `${user} beats ${cpuChoice}. You win!`;

    scoreText.textContent = ++score;
  } else {
    document.querySelector(
      "#message"
    ).textContent = `${cpuChoice} beats ${user}. You lose!`;

    scoreText.textContent = score === 0 ? 0 : --score;
  }
}

userButtons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.textContent;
    computeWinner(userChoice);
  });
});
