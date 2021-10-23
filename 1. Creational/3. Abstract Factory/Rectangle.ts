import { IShape } from "./IShape";

export class Rectangle implements IShape {
  public draw(): void {
    console.log("Inside Rectangle: draw() method");
  }
}
