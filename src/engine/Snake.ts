import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
  setDirection(newDirection: Direction) {
    this.direction = newDirection;
  }

  move() {
    const oldHeadPosition = this.getHead();
    this.tail.shift();
    this.tail.push(new Cell(oldHeadPosition.x, oldHeadPosition.y));
    const head = this.getHead();
    if (this.direction === "Right") {
      this.head = new Cell(head.x + 1, head.y);
    }
    if (this.direction === "Down") {
      this.head = new Cell(head.x, head.y + 1);
    }
    if (this.direction === "Left") {
      this.head = new Cell(head.x - 1, head.y);
    }
    if (this.direction === "Up") {
      this.head = new Cell(head.x, head.y - 1);
    }
  }

  grow(numToGrow: number) {
    const tailEnd = this.tail[this.tail.length - 1];
    for (let i = 0; i < numToGrow; i++) {
      const newTailCell = new Cell(tailEnd.x, tailEnd.y);
      this.tail.push(newTailCell);
    }
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    // return "Right";
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
