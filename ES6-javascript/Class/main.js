//4ways of creating objects

//1. literal notation : not inheritable and not reusable but readily available for use

const student = {
  name: "soliu",
  age: 10,
  printAge: function () {
    console.log(`${this.name}'s age is ${this.age}`);
  },
};

console.log(student.printAge());

//2. Object contructor: It is same as literal notation just that it helps to create object dynamically using "new Object()"

const person = new Object();

person.name = "feranmi";
person.age = 30;

console.log(person);

person.age = 40;

console.log(person);

//3. Construction function : This creates a blueprint and is resuable. But inheritance is likely complex to structure.

function car(name, colour, brand, horsePower) {
  this.name = name;
  this.colour = colour;
  this.brand = brand;
  this.horsePower = horsePower;
}

car.prototype.printName = function () {
  console.log(`the car name is ${this.name}`);
};

car.prototype.printColour = function () {
  console.log(`${this.colour}`);
};

const car1 = new car("toyota camry", "white", "toyota", 200);

console.log(car1);

console.log(car1.printColour());
console.log(car1.printName());

//class : It is inheritable and also reusable. It extends the functionality of contructor function

class House {
  constructor(type, colour, address) {
    this.type = type;

    this.colour = colour;

    this.address = address;
  }

  printHouseAddress() {
    console.log(
      `${this.address} is the address of the house with the ${this.colour} colour`
    );
  }
}

const house1 = new House("storey", "Brown", "No 17, Pegamut Estate");

console.log(house1);
console.log(house1.printHouseAddress());

//Inheritance: It uses extend  and  super keyword

class storeyBuilding extends House {
  constructor(type, colour, address, height, windowSize) {
    super(type, colour, address);

    this.height = height;
    this.windowSize = windowSize;
  }

  printHouseAddress() {
    console.log(
      `${this.address} is the address of the house with  ${this.height} height `
    );
  }

  printType() {
    console.log(`${this.type} is the house type `);
  }
}

const newStoreyBuilding = new storeyBuilding(
  "storey",
  "white",
  "Ijagbo, offa road",
  200,
  16
);


console.log(newStoreyBuilding)

console.log(newStoreyBuilding.printHouseAddress())
console.log(newStoreyBuilding.printType())



// classwork

// using js ES6 class and modules, create three separate modules (Person.js, Student.js, Classroom.js), and create your primary javascript file (main,js). The person property should be just "name" and "age". Student class should extend Person. The property of a student is name, age and grade.
//1. use array.push to add new students into array of students
//2. use array.filter to filter students whose grades exceed 50 and also have their names start with uppercase
//3. use array.map to return the student's name and their coresponding grades
