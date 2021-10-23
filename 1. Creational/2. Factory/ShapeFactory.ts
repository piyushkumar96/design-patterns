import { IShape } from "./IShape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Square } from "./Square";

export class ShapeFactory {
  public getShape(shapeType: string): IShape {
    if (shapeType === null) {
      return null;
    }

    if (shapeType.toUpperCase() === "CIRCLE") {
      return new Circle();
    } else if (shapeType.toUpperCase() === "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType.toUpperCase() === "SQUARE") {
      return new Square();
    }

    return null;
  }
}
