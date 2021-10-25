import { ColdDrink } from "./ColdDrink";

export class Pepsi extends ColdDrink {
  public name(): string {
    return "Pepsi";
  }

  public price(): number {
    return 20.0;
  }
}
