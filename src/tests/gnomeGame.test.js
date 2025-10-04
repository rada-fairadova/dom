jest.mock("../styles.css", () => ({}));
jest.mock("../assets/gnome.png", () => "gnome.png");

const GnomeGame = require("../index.js").default;

describe("GnomeGame", () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="gameBoard"></div>
    `;

    game = new GnomeGame();
  });

  afterEach(() => {
    if (game.stopMovement) {
      game.stopMovement();
    }
  });

  test("should create game board with 16 cells", () => {
    const cells = document.querySelectorAll(".cell");
    expect(cells.length).toBe(16);
  });

  test("should create gnome element", () => {
    expect(game.gnomeElement).toBeDefined();
    expect(game.gnomeElement.tagName).toBe("IMG");
    expect(game.gnomeElement.className).toBe("gnome");
  });

  test("should set initial random position", () => {
    expect(game.currentPosition).toBeDefined();
    expect(game.currentPosition).toBeGreaterThanOrEqual(0);
    expect(game.currentPosition).toBeLessThan(16);
  });

  test("should move to different position", () => {
    const initialPosition = game.currentPosition;
    game.moveToRandomPosition();
    expect(game.currentPosition).not.toBe(initialPosition);
  });

  test("should place gnome in correct cell", () => {
    const testPosition = 5;
    game.placeGnome(testPosition);

    const cells = document.querySelectorAll(".cell");
    const targetCell = cells[testPosition];

    expect(targetCell.classList.contains("with-gnome")).toBe(true);
    expect(targetCell.contains(game.gnomeElement)).toBe(true);
  });
});
