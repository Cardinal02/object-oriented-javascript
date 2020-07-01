//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    return this.purpose;
  }
  pieces() {
    return "Classes are special functions with which we can create object instances — objects that contain the data and functionality. Members of a class are the constructor function and methods. Constructor function is a special function for creating and initializing an object created with a class. There can only be one special method with the name \"constructor\" in a class.Class methods are functionality of the class.\n 1. Create a class with 'class' keyword. \n 2.Add constructor() method. A constructor method is where we initialize the properties and is automatically called when a class is initiated.\n 3. Create a new instance of the class with 'new' keyword and instantiate the class. \n4. Invoke the class methods with '.' operator.";
  }
}
const print = new WhyClass(
  "Classes are special functions with we can create object instances"
);
console.log(print.explain());
console.log(print.pieces());

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class WildLife {
  constructor(name, family, diet) {
    this.name = name;
    this.family = family;
    this.diet = diet;
  }
  eat() {
    return `\nThe ${this.name} belongs to the ${this.family} family and eats ${this.diet}.\n`;
  }
  endangered() {
    return `The  ${this.name}s are endangered ${this.family}s.`;
  }
}
const macaw = new WildLife("Hyacinth Macaw", "bird", "fruits and nuts");
console.log(macaw, macaw.eat(), macaw.endangered());

const capybara = new WildLife("Capybara", "mammal", "grass");
console.log(capybara, capybara.eat(), capybara.endangered());

const anaconda = new WildLife("Green Anaconda", "reptile", "large animals");
console.log(anaconda, anaconda.eat(), anaconda.endangered());

const toucan = new WildLife(
  "Toco Toucan",
  "bird",
  "fruits, insects and small animals "
);
console.log(toucan, toucan.eat(), toucan.endangered());

const owl = new WildLife("Spectacled Owl", "bird", "rodents and small mammals");
console.log(owl, owl.eat(), owl.endangered());

const marmoset = new WildLife(
  "Pygmy Marmoset",
  "mammal",
  "tree sap, insects, small fruit and nectar"
);
console.log(marmoset, marmoset.eat(), marmoset.endangered());

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */
class Shape {
  constuctor(name, numOfSides) {
    this.name = name;
    this.numOfSides = numOfSides;
  }
}
//Triangle
class Triangle extends Shape {
  constructor(name, numOfSides, sides) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.sides = sides;
    this.base = sides[0];
    this.height = Math.sqrt(
      Math.pow(this.sides[1], 2) - Math.pow(this.sides[0] / 2, 2)
    ).toFixed(2);
  }
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      } sq.units`
    );
  }
  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  }
}
const triangle = new Triangle("triangle", 3, [4, 7, 7]);
console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();
//Rectangle
class Rectangle extends Shape {
  constructor(name, numOfSides, length, width) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.length = length;
    this.width = width;
  }
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${
        this.length * this.width
      } sq. units`
    );
  }

  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      } units`
    );
  }
}
const rectangle = new Rectangle("rectangle", 4, 2, 5);
console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();
//Circle
class Circle extends Shape {
  constructor(name, numOfSides, radius) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.radius = radius;
  }
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)} sq.units`
    );
  }
  calcCircumference() {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)} units`
    );
  }
}

const circle = new Circle("circle", 1, 5);
console.log(circle);
circle.calcCircumference();
circle.calcArea();
//Bonus:Pentagon
class Pentagon extends Shape {
  constructor(name, numOfSides, side) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.side = side;
    this.base = side;
    this.height = (this.base / (2 * Math.tan((36 * Math.PI) / 180))).toFixed(2);
  }
  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be: ${
        this.numOfSides * this.side
      } units`
    );
  }
  // Pentagon :area=5* area of small isosceles triangles= 5*1/2*base*height; base = side; height=(side/2)/tan 36
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        this.numOfSides *
        0.5 *
        this.base *
        this.height
      ).toFixed(2)} sq.units`
    );
  }
}

const pentagon = new Pentagon("pentagon", 5, 5);
console.log(pentagon);
pentagon.calcArea();
pentagon.calcPerimeter();

//Hexagon
class Hexagon extends Shape {
  constructor(name, numOfSides, side) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.side = side;
  }
  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be: ${
        this.numOfSides * this.side
      } units`
    );
  }
  //area of hexagon = 3.sqrt(3).pow(side,2)/2
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be: ${(
        (3 * Math.sqrt(3) * Math.pow(this.side, 2)) /
        2
      ).toFixed(2)} sq. units`
    );
  }
}
const hexagon = new Hexagon("hexagon", 6, 5);
console.log(hexagon);
hexagon.calcArea();
hexagon.calcPerimeter();

//Octagon
class Octagon extends Shape {
  constructor(name, numOfSides, side) {
    super(name, numOfSides);
    this.name = name;
    this.numOfSides = numOfSides;
    this.side = side;
  }
  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be: ${
        this.numOfSides * this.side
      } units`
    );
  }
  //area of octagon = 2.(1+sqrt(2)).pow(side,2)
  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be: ${(
        2 *
        (1 + Math.sqrt(2)) *
        Math.pow(this.side, 2)
      ).toFixed(2)} sq. units`
    );
  }
}
const octagon = new Octagon("octagon", 8, 5);
console.log(octagon);
octagon.calcArea();
octagon.calcPerimeter();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

*/

class Earth {
  static info(name, num) {
    return `${name} is at position ${num} from Sun`;
  }
}

//const earth = new Earth("earth", 3);
console.log(Earth.info("earth", 3));
