import { IShape } from "./IShape";

export class RoundedRectangle implements IShape {
  public draw(): void {
    console.log("Inside RoundedRectangle: draw() method");
  }
}
