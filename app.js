// alert("test");
// #GRAB/DECLARE/DEFINE
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// #
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const reset = () => {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");

  p1.button.disabled = false;
  p2.button.disabled = false;
};
const updateScores = (p1, p2) => {
  if (!isGameOver) {
    p1.score += 1;

    if (p1.score === winningScore) {
      isGameOver = true;
      p1.display.classList.add("has-text-success");
      p2.display.classList.add("has-text-danger");
      p1.button.disabled = true;
      p2.button.disabled = true;
    }
    p1.display.textContent = p1.score;
  }
  //   if (p1Score !== winningScore) {
  //   } else {
  //   }
};

// #LISTENERS
p1Button.addEventListener("click", (e) => {
  updateScores(p1, p2);
});

p2Button.addEventListener("click", (e) => {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  console.log(`changed winningScore to ${this.value}`);
  reset();
});

resetButton.addEventListener("click", reset);
