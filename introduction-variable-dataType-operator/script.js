// Javascript Variables, Data Types, and Operators

// variable keywords: const and let

let a = 2;

console.log(a)

a = 25;
console.log(a)

const myNumber = 30;

console.log(myNumber)


console.log(a)

let b = 3;
let c = 4;
let temp;

temp = b;
b = c;
c = temp;

console.log(`b: ${b}, c: ${c}`)



// Javascript Data types: Primitive and Non-Primitive Data types

let studentNames = ["Dolapo", "Ridwan", "Mueez", "Feranmi"]; //non-primitive

// Primitive Data types
let primitive = 10; // primitive
let anotherPrimitive = primitive;

primitive = 30;

console.log({primitive, anotherPrimitive})


//Non-primitive Data types

let newStudentNames = studentNames;


// studentNames = ["Soliu", "Abdullahi"];

// console.log({studentNames, newStudentNames})

newStudentNames[0] = "Amodu"

console.log({studentNames, newStudentNames});


// Javascript operators

// Logical operator;

const num1 = 0;

const name1 = 0;

// const trueValue = num1 && name1 ? "It is truthy value": "It is false"
const trueValue = num1 || name1 ? "It is truthy value": "It is false"

// console.log(`${trueValue}`)


//comparison operator

let num2 = 10;
const num3 = 10;

const result = num2 == num3 ? "yes": "no"

console.log(++num2);











