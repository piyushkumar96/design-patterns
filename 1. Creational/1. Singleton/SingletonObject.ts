export default class SingletonObject {
  //create an object of SingleObject
  private static instance: SingletonObject = new SingletonObject();

  //make the constructor private so that this class cannot be
  //instantiated
  private SingletonObject() {}

  //Get the only object available
  public static getInstance(): SingletonObject {
    return this.instance;
  }

  public showMessage(): void {
    console.log("Hello Piyush");
  }
}
