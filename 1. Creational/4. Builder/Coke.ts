import { ColdDrink } from "./ColdDrink";

export class Coke extends ColdDrink {
  public name(): string {
    return "Coke";
  }

  public price(): number {
    return 10.5;
  }
}
