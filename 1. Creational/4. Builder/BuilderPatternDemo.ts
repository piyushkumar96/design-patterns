import { Meal } from "./Meal";
import { MealBuilder } from "./MealBuilder";

class BuilderPatternDemo {
  public static main(): void {
    const mealB: MealBuilder = new MealBuilder();

    const vegMeal: Meal = mealB.prepareVegMeal();
    vegMeal.showItems();
    console.log("Total cost:- ", vegMeal.getCost());
    console.log();

    const nonVegMeal: Meal = mealB.prepareNonVegMeal();
    nonVegMeal.showItems();
    console.log("Total cost:- ", nonVegMeal.getCost());
    console.log();
  }
}

BuilderPatternDemo.main();
