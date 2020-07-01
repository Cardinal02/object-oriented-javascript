/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
*/

// Book class. It should have an author and publisher property.

class Book {
  #author = "";
  #publisher = "";
  constructor(author, publisher) {
    this.#author = author;
    this.#publisher = publisher;
  }

  get author() {
    return this.#author;
  }
  get publisher() {
    return this.#publisher;
  }
}

//Author class. It should have a name and books property.
class Author {
  #name = "";
  #books = [];
  constructor(name, books) {
    this.#name = name;
    this.#books = books;
  }
  get name() {
    return this.#name;
  }
  get books() {
    return this.#books;
  }
}

// Publisher class.  It should have an authors and books property.
class Publisher {
  #authors = [];
  #books = [];
  constructor(authors, books) {
    this.#authors = authors;
    this.#books = books;
  }
  get author() {
    return this.#authors;
  }
  get books() {
    return this.#books;
  }
}

// Review class.  It should have a rating and user property.

class Review {
  #rating = 0;
  #user = "";
  constructor(rating, user) {
    this.#rating = rating;
    this.#user = user;
  }
  get rating() {
    return this.#rating;
  }
  get user() {
    return this.#user;
  }
}

/*2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.*/

//your code here...
class Umbrella {
  constructor() {
    this.organization = "Johnson & Johnson";
    this.numOfBrands = 9;
  }
  info() {
    console.log(`${this.organization} owns ${this.numOfBrands} beauty brands.`);
  }
  welcome() {
    console.log(`Welcome to ${this.organization} home to ${this.brand}`);
  }
}
const johnson = new Umbrella();
console.log(johnson);

class Company extends Umbrella {
  constructor(brand, numOfEmployees) {
    super();
    this.brand = brand;
    this.numOfEmployees = numOfEmployees;
  }
  info() {
    console.log(
      ` ${this.brand} has sites at ${this.location1}, ${this.location2} and ${this.location3}`
    );
  }
  employeeinfo() {
    console.log(
      `There are ${this.numOfEmployees} people working in ${this.brand} for the company ${this.organization}`
    );
  }
}
class Site extends Company {
  constructor(name, numOfemployees, locations) {
    super(name, numOfemployees);
    this.location1 = locations[0];
    this.location2 = locations[1];
    this.location3 = locations[2];
  }
  display() {
    this.info();
    this.employeeinfo();
  }
  displayOrg() {
    this.welcome();
  }
}

const aveenoSites = new Site("Aveeno", 100, ["Dallas", "Boston", "Cleveland"]);
console.log(aveenoSites);
aveenoSites.welcome();
aveenoSites.info();
aveenoSites.display();

aveenoSites.employeeinfo();

const neutrogenaSites = new Site("Neutrogena", 150, [
  "Addison",
  "Plano",
  "Frisco",
]);
console.log(neutrogenaSites);
neutrogenaSites.welcome();
neutrogenaSites.info();
neutrogenaSites.employeeinfo();

const cleannClearSites = new Site("Clean & Clear", 200, [
  "London",
  "Washington",
  "New Delhi",
]);
console.log(cleannClearSites);
cleannClearSites.welcome();
cleannClearSites.info();
cleannClearSites.employeeinfo();

class Employee extends Umbrella {
  // employee name, job title, and salary
  constructor(name, title, salary) {
    super();
    this.name = name;
    this.title = title;
    this.salary = salary;
  }
  employeeData() {
    console.log(`${this.name} works for ${this.organization} as ${this.title}`);
  }
  employeeSalary() {
    console.log(`${this.name} earns ${this.salary} per year`);
  }
}
const ceo = new Employee("Katherine Applegate", "CEO", "$200000");
ceo.employeeData();
ceo.employeeSalary();
console.log(ceo);

const vpHR = new Employee("Peter Rabbit", "Vice President-HR", "$180000");
vpHR.employeeData();
vpHR.employeeSalary();
console.log(vpHR);

const vpFinance = new Employee(
  "Bugs Bunny",
  "Vice President-Finance",
  "$180000"
);
vpFinance.employeeData();
vpFinance.employeeSalary();
console.log(vpFinance);

const regionalManager1 = new Employee(
  "Rebecca Rabbit",
  "Regional Manager",
  "$150000"
);
regionalManager1.employeeData();
regionalManager1.employeeSalary();
console.log(regionalManager1);

const regionalManager2 = new Employee(
  "Nancy Drew",
  "Regional Manager",
  "$150000"
);
regionalManager2.employeeData();
regionalManager2.employeeSalary();
console.log(regionalManager2);

const regionalManager3 = new Employee(
  "Harry Potter",
  "Regional Manager",
  "$150000"
);
regionalManager3.employeeData();
regionalManager3.employeeSalary();
console.log(regionalManager3);

const regionalManager4 = new Employee(
  "Donald Duck",
  "Regional Manager",
  "$150000"
);
regionalManager4.employeeData();
regionalManager4.employeeSalary();
console.log(regionalManager4);

const storeManager1 = new Employee("Mickey Mouse", " Store Manager", "$100000");
storeManager1.employeeData();
storeManager1.employeeSalary();
console.log(storeManager1);

const storeManager2 = new Employee("Minney Mouse", " Store Manager", "$100000");
storeManager2.employeeData();
storeManager2.employeeSalary();
console.log(storeManager2);

const storeManager3 = new Employee("Daisy Duck", " Store Manager", "$100000");
storeManager3.employeeData();
storeManager3.employeeSalary();
console.log(storeManager3);

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...

function title({books}){
  return{
    title:()=> console.log(`${books.title}`)
 }
}
function author ({books}){
  return{
    author:()=> console.log(`${books.author}`)
  }
}
function publisher({books}){
  return{
    publisher:()=> console.log(`${books.publisher}`)
 }
}

function reviews ({books}){
  return{
    reviews:()=> console.log(`${books.title}`)
 }
}

function bookcreator (books){
  const book ={title:title}

  return{
    ...book,
    ...
  }
}