import {Shape} from './Shape';

export class Square extends Shape {
    public draw() {
        console.log("Drawing Square: ")
        this.colored.drawColor()
        this.size.drawSizeBased()
    }
}