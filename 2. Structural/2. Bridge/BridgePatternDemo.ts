import { Circle } from "./Circle";
import { Green } from "./Green";
import { Small } from "./Small";
import { Square } from "./Square";
import { Red } from "./Red";
import { Large } from "./Large";

class BridgePatternDemo {
  public static main(): void {
    console.log("Shape 1");
    const circle = new Circle(new Green(), new Small());
    circle.draw();

    console.log("\nShape 2");
    const square = new Square(new Red(), new Large());
    square.draw();
  }
}

BridgePatternDemo.main();
