import { Shape } from "./Shape";
import { IColor } from "./IColor";
import { ISize } from "./ISize";

export class Circle extends Shape {
  constructor(c: IColor, r: ISize) {
    super(c, r);
  }

  public draw(): void {
    console.log("Drawing Circle: ");
    this.colored.drawColor();
    this.size.drawSizeBased();
  }
}
