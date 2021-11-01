## Structural Pattern

[1. Adapter Pattern](1.%20Adapter)
- It allows objects with incompatible interfaces to collaborate.
- Applicability
  * Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.
  * Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.
    * The much more elegant solution would be to put the missing functionality into an adapter class.
    * This approach looks very similar to the Decorator pattern.
- [Reference](https://refactoring.guru/design-patterns/adapter)    

[2. Bridge Pattern](2.%20Bridge)
- It  lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
- It attempts to solve this problem by switching from inheritance to the object composition. 
  * What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.
- Applicability
  * Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality (for example, if the class can work with various database servers).
  * Use the pattern when you need to extend a class in several orthogonal (independent) dimensions.
    
- [Reference](https://refactoring.guru/design-patterns/bridge)    