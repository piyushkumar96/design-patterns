import { IShape } from "./IShape";

export class RoundedSquare implements IShape {
  public draw(): void {
    console.log("Inside RoundedSquare: draw() method");
  }
}
