import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });

  it("snake should be able to move", () => {
    const snake = new Snake();
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("snake should be able to change direction", () => {
    const snake = new Snake();

    snake.setDirection("Down");
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("snake should be able to grow", () => {
    const snake = new Snake();
    snake.setDirection("Right");
    snake.move();
    snake.grow(1);
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([
      new Cell(1, 0),
      new Cell(2, 0),
      new Cell(2, 0),
    ]);
  });
});
