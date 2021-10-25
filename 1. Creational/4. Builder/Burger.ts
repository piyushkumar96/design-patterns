import { IItem } from "./IItem";
import { Wrapper } from "./Wrapper";
import { IPacking } from "./IPacking";

export abstract class Burger implements IItem {
  public packing(): IPacking {
    return new Wrapper();
  }

  public abstract price(): number;

  public abstract name(): string;
}
