/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/
//Abstract parent class
class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error("Can't initate an Abstract Class");
    }
  }
  move() {
    throw new Error("I am an Abstract Method. Please don't call me");
  }

  acts() {
    throw new Error("I am an Abstract Method. Please don't call me");
  }
}

//Human Sub Class
class Human extends Creature {
  constructor(name, job) {
    super();
    this.name = name;
    this.job = job;
  }
  move() {
    console.log(`${this.name} moves on two feet as they belong to class Human`);
  }

  acts() {
    console.log(`${this.name} is a ${this.job}`);
  }

  sleep() {
    console.log(`${this.name} mostly sleeps during the night`);
  }
}
let shel = new Human("Shel Silverstein", "poet");
console.log(shel);
shel.move();
shel.acts();
shel.sleep();

class Dinosaur extends Creature {
  constructor(name, diet) {
    super();
    this.name = name;
    this.diet = diet;
  }
  move() {
    console.log(`${this.name} moves on land, water and air`);
  }

  acts() {
    console.log(`${this.name} can grow very big`);
  }

  eats() {
    console.log(`${this.name} was a ${this.diet}`);
  }
}
let bronty = new Dinosaur("Brontosaurus", "Carnivore");
console.log(bronty);
bronty.move();
bronty.acts();
bronty.eats();

class Fish extends Creature {
  constructor(name, habitat) {
    super();
    this.name = name;
    this.habitat = habitat;
  }
  move() {
    console.log(`${this.name} swims in water`);
  }

  acts() {
    console.log(`${this.name} can lay eggs`);
  }

  lives() {
    console.log(`${this.name} lives in ${this.habitat}`);
  }
}

let goldie = new Fish("Gold Fish", "freshwater");
console.log(goldie);
goldie.move();
goldie.acts();
goldie.lives();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + " is eating");
  }

  sleep() {
    console.log(this.name + " is sleeping");
  }

  code() {
    console.log(this.name + " is coding");
  }

  repeat() {
    console.log(this.name + " is repeating the above steps, yet another time");
  }

  explain() {
    console.log(
      "In order to exhibit Polymorphism the methods in child class should take precedence. If a method is called in the parent class as a class field it is created as a the property of the instance when instantiated and hence taking precedence over the child.prototype method."
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " loves to teach before eating");
  }

  sleep() {
    console.log(this.name + " sleeps after preparing the lesson plan");
  }

  code() {
    console.log(this.name + " codes first, then teaches it the next day.");
  }

  repeat() {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  }
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(`${this.name} studies, then eats `);
  }

  sleep() {
    console.log(
      `${this.name} studies coding so much, that they dream about it in their sleep`
    );
  }

  code() {
    console.log(
      `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`
    );
  }

  repeat() {
    console.log(
      `${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`
    );
  }
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare = function (food1, food2, food3) {
    this.food1 = food1;
    this.food2 = food2;
    this.food3 = food3;

    console.log(
      `The cook is cooking ${this.food1}, ${this.food2}, ${this.food3}`
    );
  };

  explain = () => {
    console.log(
      "what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method."
    );
    console.log(
      " Since the food items are passed as aruguments to the prepare function, the prepare function in parent class should accept them as parameters and create a this pointer referencing them instead of receiving them as object properties"
    );
  };
}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();
