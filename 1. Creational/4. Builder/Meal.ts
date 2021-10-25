import { IItem } from "./IItem";

export class Meal {
  private ItemList: Array<IItem> = new Array<IItem>();

  public addItem(item: IItem) {
    this.ItemList.push(item);
  }

  public getCost(): number {
    let cost: number = 0;
    this.ItemList.forEach((item) => {
      cost += item.price();
    });

    return cost;
  }

  public showItems(): void {
    this.ItemList.forEach((item) => {
      console.log("Item: ", item.name(), ", Packing: ", item.packing().pack(), ", Price: ", item.price());
    });
  }
}
