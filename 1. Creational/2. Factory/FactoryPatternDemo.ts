import {ShapeFactory} from './ShapeFactory';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';
import {Square} from './Square';

class FactoryPatternDemo {
    public static main(): void {
        const shapeFactory: ShapeFactory = new ShapeFactory()

        const circle: Circle = shapeFactory.getShape("circle")
        const rectangle: Rectangle = shapeFactory.getShape("rectangle")
        const square: Square = shapeFactory.getShape("square")

        circle.draw()
        rectangle.draw()
        square.draw()
    }
}

FactoryPatternDemo.main()