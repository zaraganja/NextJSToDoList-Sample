---
tittle: "Overriding in Java "
subtitle: "All you need to know about Java.[Methods, Uses, Examples with Output]"
date: "12-02-2023"
---
## Overriding
Overriding is when a child class has its method implementation for the method already present in the parent class.

Technically, overriding is a function that requires a subclass or child class to provide a variety of method implementations, that are already provided by one of its superclasses or parent classes, in any object-oriented programming language. 

When a method in a subclass has the same name and signature as in its super-class, the subclass is originated from the super-class. 

One of the ways that Java manages Run Time Polymorphism is by method overriding. 

Become a Skilled Web Developer in Just 9 Months!
Caltech PGP Full Stack DevelopmentEXPLORE PROGRAM
The object that is used to trigger a method specifies the variant of the process that is executed. If it implements a method with an object from a parent class, the parent class's version will be used. But if the method is triggered with an object from a subclass, the child class's version will be used.

Also Read: The Best Java Programs for Beginners and Experienced Programmers to Practice and Upskill

## Example 1:
Code:
// here we declare vehicle as a parent class 

 class Vehicle{

// here we create a method as vehicle has engine

// but changing the output as vehicle engine

void engine(){

System.out.println("this is vehicle engine");

}

}

 // here we declare child class 

 // bike is based on vehicle category so its a child class

 // we use extends keyword to call parent class

 class Bike extends Vehicle{

// here we create method as same as in parent class

// but changing the output as bike engine

void engine(){

System.out.println ("this is bike engine");

}

}

 // here we declare child class 

 // car is based on vehicle category so it's a child class

 class Car extends Vehicle{

// here we create method as same as in parent class

// but changing the output as car engine

void engine(){

System.out.println ("this is car engine");

}

}

public class Code Example {

public static void main(String[] arg) {

// here we create object for bike

Bike honda = new Bike ();

honda.engine();// calling engine method

// here we create object for car

Car benz = new Car ();

benz.engine ();  //calling engine method

}

}

## Output:
this is bike engine

this is car engine

In the above code, void engine() within Vehicle class is called overridden method. The void engine() method within Bike Class and Car Class is called the overriding method.

OverridinginJavaEx1_1

OverridinginJavaEx1_2

OverridinginJavaEx1_3

Create and Showcase Your Portfolio from Scratch!
Caltech PGP Full Stack DevelopmentEXPLORE PROGRAM
Why Is Overriding in Java Useful?
As previously mentioned, overridden methods allow Java to accept polymorphism at runtime. Overridden methods are also another way Java embraces polymorphism's "one application, many methods" aspect.

The most effective object-oriented programming brings to bear on code reuse and robustness is Dynamic Process Execution. The ability to use existing code libraries to call methods on new class instances without re-compiling, while preserving a clean abstract interface, is an incredibly powerful weapon.

 Overridden methods allow one to call methods from any derived class object without identifying the form of the modified super-class.

When Is It Ideal to Apply Overriding in Java?
Identifying the parent classes and child classes form a hierarchy that passes from lesser to higher productivity is part of the secret to effectively applying polymorphism. 

The parent class, when used correctly, contains all the factors that a child class would access directly. It also defines which methods the child class must execute individually.

This provides the child class with the ability to convey its methods while preserving a standard interface. 

A parent class will determine the general form of the methods that are used by all of its child classes by merging inheritance and overridden methods. 

## Example 2:
Code:
//creating parent class

class Bank{  

//create function to calculate interest

int getRateOfInterest(){return 0;}  

}  

//Creating child classes.  

class SBI extends Bank{  

//create function to calculate interest for SBI

int getRateOfInterest(){return 8;}  

}  

class ICICI extends Bank{  

//create function to calculate interest for ICICI

int getRateOfInterest(){return 7;}  

}  

class AXIS extends Bank{  

//create function to calculate interest for AXIS

int getRateOfInterest(){return 9;}  

}  

public class CodeExample {

public static void main(String[] arg) {

Bank sbibank=new SBI();  // create object for SBI

Bank icicibank=new ICICI();  // create object for ICICI

Bank axisbank=new AXIS();  // create object for AXIS

System.out.println("SBI Rate of Interest: "+sbibank.getRateOfInterest());  

System.out.println("ICICI Rate of Interest: "+icicibank.getRateOfInterest());  

System.out.println("AXIS Rate of Interest: "+axisbank.getRateOfInterest());  

}

}

## Output
SBI Rate of Interest: 8

ICICI Rate of Interest: 7

AXIS Rate of Interest: 9

Screenshot
OverridinginJavaEx2_1

OverridinginJavaEx2_2.


What Are the Rules for Method Overriding in Java? 
Laws of Method Overriding in JAVA: 

The method name should be common and the same as it is in the parent class.
The method signature (parameter list, return type) in the method must be the same as in the parent class.
There must be an inheritance connection between classes.
All the abstract methods in the parent class should be overridden in the child class.
If it declared the methods as static or final, then those methods cannot be overridden.
Handle Access-Modifiers in Overriding:
An overriding method's activities increase will give more access than the overridden method. A protected method in the parent class may be made public but not private in the child class. If you force it to be done, it will cause a compile-time error.

The goal of Approach Overriding in Java is transparent in this situation. The child class has to have its implementation of this process.