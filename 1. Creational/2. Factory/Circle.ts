import { IShape } from "./IShape";

export class Circle implements IShape {
  public draw(): void {
    console.log("Inside Circle: draw() method");
  }
}
