import { IShape } from "./IShape";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { AbstractFactory } from "./AbstractFactory";

export class ShapeFactory implements AbstractFactory {
  public getShape(shapeType: string): IShape {
    if (shapeType === null) {
      return null;
    }

    if (shapeType.toUpperCase() === "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType.toUpperCase() === "SQUARE") {
      return new Square();
    }

    return null;
  }
}
