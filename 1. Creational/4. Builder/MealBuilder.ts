import { Meal } from "./Meal";
import { VegBurger } from "./VegBurger";
import { Coke } from "./Coke";
import { NonVegBurger } from "./NonVegBurger";
import { Pepsi } from "./Pepsi";

export class MealBuilder {
  public prepareVegMeal(): Meal {
    let meal: Meal = new Meal();

    meal.addItem(new VegBurger());
    meal.addItem(new Coke());

    return meal;
  }

  public prepareNonVegMeal(): Meal {
    let meal: Meal = new Meal();

    meal.addItem(new NonVegBurger());
    meal.addItem(new Pepsi());

    return meal;
  }
}
