let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ["button1", "button2", "button3"],
};

function newGame() {
  game.score = 0;
  game.currentGame = [];
  game.playerMoves = [];
  showScore();
  addTurn();
}

function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
  //   showTurns();
}

function showScore() {
  document.getElementById("score").innerText = game.score;
}

function LightsOn(circl) {
  document.getElementById(circl).classList.add("light");
  setTimeout(() => {
    document.getElementById("circle").classList.remove("light");
  }, 400);
}

module.exports = { game, newGame, showScore, addTurn, LightsOn };
