import { ShapeFactory } from "./ShapeFactory";
import { RoundedShapeFactory } from "./RoundedShapeFactory";
import { IShape } from "./IShape";

class AbstractFactoryPatternDemo {
  public static main(): void {
    const shapeFactory: ShapeFactory = new ShapeFactory();
    const roundedShapeFactory: RoundedShapeFactory = new RoundedShapeFactory();

    const rectangle: IShape = shapeFactory.getShape("rectangle");
    const square: IShape = shapeFactory.getShape("square");

    rectangle.draw();
    square.draw();

    const roundedRectangle: IShape = roundedShapeFactory.getShape("rectangle");
    const roundedSquare: IShape = roundedShapeFactory.getShape("square");

    roundedRectangle.draw();
    roundedSquare.draw();
  }
}

AbstractFactoryPatternDemo.main();
