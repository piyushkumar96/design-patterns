import { IColor } from "./IColor";
import { ISize } from "./ISize";

export abstract class Shape {
  protected colored: IColor;
  protected size: ISize;

  constructor(c: IColor, s: ISize) {
    this.colored = c;
    this.size = s;
  }

  public abstract draw(): void;
}
