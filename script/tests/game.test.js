const { beforeAll } = require("@jest/globals");
const { game, newGame, showScore, addTurn } = require("../game");

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game oblect contains correct keys", () => {
  test("score keys exists", () => {
    expect("score" in game).toBe(true);
  });
  test("currentGame keys exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMoves keys exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices contain correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3"]);
  });
});

describe("newGame works correctly", () => {
  beforeAll(() => {
    game.score = 42;
    game.currentGame = ["button1, button2"];
    game.playerMoves = ["button1, button2"];
    document.getElementById("score").innerText = "42";
    newGame();
    showScore();
  });
  test("should set game score to zero", () => {
    expect(game.score).toEqual(0);
  });
  test("should be one mpove in the computer's game array", () => {
    expect(game.currentGame.length).toBe(1);
  });
  test("should clear the player moves array", () => {
    expect(game.playerMoves.length).toBe(0);
  });
  test("should display 0 for the element with id of score ", () => {
    expect(document.getElementById("score").innerText).toBe(0);
  });
});
