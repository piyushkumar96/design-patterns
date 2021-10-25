import { Burger } from "./Burger";

export class VegBurger extends Burger {
  public name(): string {
    return "VegBurger";
  }

  public price(): number {
    return 25.0;
  }
}
