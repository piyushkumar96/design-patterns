import { IShape } from "./IShape";
import { AbstractFactory } from "./AbstractFactory";
import {RoundedRectangle} from './RoundedRectangle';
import {RoundedSquare} from './RoundedSquare';

export class RoundedShapeFactory implements AbstractFactory {
  public getShape(shapeType: string): IShape {
    if (shapeType === null) {
      return null;
    }

    if (shapeType.toUpperCase() === "RECTANGLE") {
      return new RoundedRectangle();
    } else if (shapeType.toUpperCase() === "SQUARE") {
      return new RoundedSquare();
    }

    return null;
  }
}
