import { Cell } from "./Cell";
import { Game } from "../Game";
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

  private game: Game | undefined;
  // private width:

  constructor(game?: Game) {
    // this.width = configuration.width;
    this.width = configuration.nbCellsX;
    this.height = configuration.nbCellsY;
    this.game = game;
    this.seed();
  }

  seed(): void {
    // const width = 45;
    // const height = 25;

    // Code if you want to increase number of apples for each level:
    // let level = 0;
    // if (this.game) {
    //   level = this.game.runtimeConfiguration.level;
    // }
    // const numOfApples = level + 5;

    const numOfApples = 5;
    this.apples = [];
    for (let i = 0; i < numOfApples; i++) {
      let x = Math.floor(Math.random() * this.width);
      let y = Math.floor(Math.random() * this.height);
      this.apples.push(new Cell(x, y));
    }
  }

  // while (this.isSnakeInside(new Cell(x, y))) {
  //   x = Math.floor(Math.random() * width);
  //   y = Math.floor(Math.random() * height);
  // }

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
