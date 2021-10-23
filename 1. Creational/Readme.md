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
    