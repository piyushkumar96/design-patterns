## Creational Patterns

[1. Singleton Pattern](1.%20Singleton)

- Singleton ensures that only one object of its kind exists and provides a single point of access to it for any other code.

[2. Factory Pattern](2.%20Factory)
- In this pattern, we create object **without exposing the creation logic to the client** and refer to newly created object using a common interface.
- Applicability 
  * Use the Factory Method **when you don’t know beforehand the exact types** and **dependencies of the objects** your code should work with.
    * The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code
  * Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.
  * Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.
    
[3. Abstract Factory Pattern](3.%20Abstract%20Factory)
- Abstract Factory patterns work around a super-factory which creates other factories. This factory is also **called as factory of factories**.

- In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes. Each generated factory can give the objects as per the Factory pattern.

[4. Builder Pattern](4.%20Builder)
- Builder pattern builds a complex object using simple objects and using a step by step approach.
  This builder is independent of other objects.
- There’s another approach that doesn’t involve breeding subclasses. You **can create a giant constructor right** in the base class with all possible parameters that control the object. 
  * <i>While this approach indeed eliminates the need for subclasses, it creates another problem.</i>  
  * In most cases most of the **parameters will be unused**, making the **constructor calls pretty ugly**. 