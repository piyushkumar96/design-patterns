import { IItem } from "./IItem";
import { Bottle } from "./Bottle";
import { IPacking } from "./IPacking";

export abstract class ColdDrink implements IItem {
  public packing(): IPacking {
    return new Bottle();
  }

  public abstract name(): string;

  public abstract price(): number;
}
