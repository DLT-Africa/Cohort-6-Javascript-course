console.log("Welcome to string in details");

let item = "DLT Africa! ";

const length = item.length;
console.log(length);

const index = item.charAt(0);
console.log(index);

const firstOccurence = item.indexOf("Africa");
console.log(firstOccurence);

const extractE1 = item.substring(1, 5);
console.log(extractE1);

const extractE2 = item.slice(0, 7);
console.log(extractE2);

// console.log(item)
const split = item.split(" ");
console.log(split);

const join = split.join(" ");
console.log(join);

const upper = item.toUpperCase();
console.log(upper);

const lower = upper.toLowerCase();
console.log(lower);

const checkAvailability = item.includes("Africa");
console.log(checkAvailability);

const startWith = item.startsWith("DLT");
console.log(startWith);

const endWith = item.endsWith("Nigeria");
console.log(endWith);

const email = "   yourname@gmail.com  ";
console.log(email);
const trimmedEmail = email.trim();
console.log(trimmedEmail);

const repeat = item.repeat(2);
console.log(repeat);

const replaceEL = item.replace("!", "");
console.log(replaceEL);

const lastIndex = item.lastIndexOf("c");
console.log(lastIndex);

const concat = item.concat(trimmedEmail);
console.log(concat);

const example = 1 + "1";
console.log(example);

// End of String method

// Value and Reference in JS.
// Primitive [Passed by value].

let a = 6;
let b = a;
console.log(b);
console.log(a);
b = 10;
console.log(b);
console.log(a);

let firstName = "Oluwaferanmi";
let fullName = firstName;

console.log(fullName);

fullName = "Oluwaferanmi Alaba";
console.log(fullName);

// Non Primitive [Passed by reference].
let firstExample = { age: 12 };
let exampleTwo = firstExample;
exampleTwo.age = 20;

console.log(firstExample);
console.log(exampleTwo);

// Spread Operation.
// Shallow cloning/copy

const arr = [1, 2, 10, 405];
const arrClone = [...arr];
console.log(arrClone);
arrClone.push(4);
console.log(arr);

// merge Array
let arr1 = [1, 2];
let arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);

function sum(a, b, c) {
  return a + b + c;
}

const values = [12, 12, 12];

const result = sum(...values);

console.log(result);

// Destructuring
let person = { name: "Alhaji Agba", age: 102, status: "Dead" };
const { name, age } = person;
console.log(name);

let fruit = ["Apple", "Banana", "Cherry", "Date", "Egg Plant"];
const [first, second, third] = fruit;
console.log(first)