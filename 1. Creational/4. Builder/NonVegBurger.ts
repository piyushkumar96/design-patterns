import { Burger } from "./Burger";

export class NonVegBurger extends Burger {
  public name(): string {
    return "NonVegBurger";
  }

  public price(): number {
    return 50.0;
  }
}
