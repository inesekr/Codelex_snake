import { Cell } from "./Cell";
import { Game } from "../Game";
import { Snake } from "./Snake";
import configuration from "../configuration";

export class GameField {
  /**
   * Called when level completed
   */

  private apples: Cell[] = [
    // new Cell(3, 0),
    // new Cell(20, 16),
    // new Cell(22, 16),
    // new Cell(24, 16),
    // new Cell(26, 16),
  ];

  private readonly width: number;
  private readonly height: number;

  private game?: Game;
  snake = new Snake();
  // private snake: Snake;

  constructor(game?: Game) {
    this.width = configuration.nbCellsX;
    this.height = configuration.nbCellsY;
    this.game = game;
    this.snake = new Snake();
    // this.snake = this.snake;
    this.seed();
  }

  // const width = 45;
  // const height = 25;

  // Code if you want to increase number of apples for each level:
  // let level = 0;
  // if (this.game) {
  //   level = this.game.runtimeConfiguration.level;
  // }
  // const numOfApples = level + 5;
  seed(): void {
    const numOfApples = 5;
    this.apples = [];
    for (let i = 1; i <= numOfApples; i++) {
      // let x = Math.floor(Math.random() * this.width);
      // let y = Math.floor(Math.random() * this.height);

      while (true) {
        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);
        const cell = new Cell(x, y);
        if (!this.snake.isTakenBySnake(cell)) {
          if (this.snake.head.x !== cell.x && this.snake.head.y !== cell.y) {
            if (!this.apples.some((apple) => apple.equals(cell))) {
              this.apples.push(cell);
              break;
            }
          }
        }
      }
    }
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    for (const apple of this.apples) {
      if (apple.x === cell.x && apple.y === cell.y) {
        return true;
      }
    }
    return false;
  }

  removeApple(cell: Cell): void {
    const index = this.apples.findIndex(
      (apple) => apple.x === cell.x && apple.y === cell.y
    );
    if (index !== -1) {
      this.apples.splice(index, 1);
    }
  }

  isEmpty(): boolean {
    return this.apples.length === 0;
  }
}
