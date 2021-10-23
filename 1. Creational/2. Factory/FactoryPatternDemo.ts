import { ShapeFactory } from "./ShapeFactory";
import { IShape } from "./IShape";

class FactoryPatternDemo {
  public static main(): void {
    const shapeFactory: ShapeFactory = new ShapeFactory();

    const circle: IShape = shapeFactory.getShape("circle");
    const rectangle: IShape = shapeFactory.getShape("rectangle");
    const square: IShape = shapeFactory.getShape("square");

    circle.draw();
    rectangle.draw();
    square.draw();
  }
}

FactoryPatternDemo.main();
