import { IShape } from "./IShape";

export abstract class AbstractFactory {
  public abstract getShape(shapeType: string): IShape;
}
