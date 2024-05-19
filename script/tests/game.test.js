const { game } = require("../game");

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
