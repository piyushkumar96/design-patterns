import { IShape } from "./IShape";

export class Square implements IShape {
  public draw(): void {
    console.log("Inside Square: draw() method");
  }
}
