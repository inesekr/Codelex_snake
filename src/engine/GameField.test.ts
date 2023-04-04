import { GameField } from "./GameField";

describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();
    const apples = field.getApples();
    expect(apples.length).toBe(5);
  });
  it("on each new level there are 5 apples placed in random positions on the field", () => {
    const field = new GameField();
    field.seed();
    const apples = field.getApples();
    expect(apples.length).toBe(5);
  });
});
