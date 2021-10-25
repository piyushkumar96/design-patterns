import { IPacking } from "./IPacking";

export class Bottle implements IPacking {
  public pack(): string {
    return "Bottle";
  }
}
