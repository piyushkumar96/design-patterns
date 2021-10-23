import SingletonObject from "./SingletonObject";

class SingletonPatternDemo {
  public static main(): void {
    let instance1: SingletonObject = SingletonObject.getInstance();
    instance1.showMessage();

    let instance2: SingletonObject = SingletonObject.getInstance();
    instance2.showMessage();

    if (instance1 === instance2) {
      console.log("Singleton works!");
    } else {
      console.log("Singleton failed");
    }
  }
}

SingletonPatternDemo.main();
