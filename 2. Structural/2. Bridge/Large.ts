import {ISize} from './ISize';

export class Large implements ISize {
    public drawSizeBased(): void {
        console.log("large size")
    }
}