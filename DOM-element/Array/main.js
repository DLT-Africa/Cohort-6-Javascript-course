const cohorts = ["Lateefat", "Feranmi", "Muiz", "Ridwan", "Damilare"];
console.log(cohorts);

const nested = [
  [1, 5],
  [3, 4],
  [5, 6],
];
console.log(nested);

const newArray = nested[0][1];
console.log(newArray);
console.log(nested.length);

const replaceEl = (cohorts[1] = "Abdullah");
console.log(replaceEl);
console.log(typeof replaceEl);

// To add a new element to last index  of an array
cohorts[5] = "Olodo";
console.log(cohorts);

cohorts.forEach((names) => {
  console.log(names.toUpperCase());
});

const students = ["Yemi", "Soliu", "Zimbi", "Fatimoh", "Maryam", "Deborah"];
console.log(students);

// **************PUSH() METHOD****************
// To add a new element to the end of an array

const pushed = students.push("Bisola", "Lateefa");
console.log(pushed); // To print new array length

// **************POP() METHOD****************
// To remove the last element in a array

const number = [3, 2, 1, 4, 5, 8, 7, 0, 9];
console.log(number);

const popped = number.pop(); // To save the removed element in a variable
console.log(popped); // To view  the removed element
console.log(number);

// **************shift() METHOD****************
// To remove the first element from an array
const colors = ["Green", "Red", "Black", "white"];
console.log(colors);

const remEl = colors.shift(); //  To save the removed element in a variable
console.log(colors);
console.log(remEl);

const foods = ["Semo", "Amala", "Beans", "Rice", "Eba", "pounded yam"];

console.log(foods);

// Splice method

foods.splice(1, 3, "Tuwo", "Yam");
console.log(foods);

const wears = ["Gucci", "D&G", "Amani", "Versace", "Nike"];
wears.splice(2);
console.log(wears);

const male = [
  "Daodu",
  "Gbojita",
  "Gbajumo",
  "Ogundiji",
  "Afunnimawobe",
  "Animashaun",
];
console.log(male);

const newString = "Adeyemi";
console.log(newString.length);
const slicedString = newString.slice(2, 6);
console.log(slicedString);

const warriors = male.slice(1, 4);
console.log(warriors);

const stakeHolders = male.slice(4);
console.log(stakeHolders);

// Or using negative parameter

const stakeHolders2 = male.slice(-2); // Start counting from  element(-1)
console.log(stakeHolders2);

// String
const string = male.toString();
console.log(string);

//          .includes()

const blean = male.includes("Dadu");
console.log(blean); // false
const blean2 = male.includes("Ogundiji");
console.log(blean2);

// Sorts

const sorted = male.sort();
console.log(sorted);

// indexOf()

const num = [1, 2, 3, 4, 9, 1, 2, 9, 8, 7, 12, 11, 1, 2];
console.log(num);
const index1 = num.indexOf(2);
const index2 = num.indexOf(5);
// console.log(index1)
console.log(index1);
console.log(index2);

// LastIndexOf()

const lastIndexOf = num.lastIndexOf(4, num.length);
console.log(lastIndexOf);

//forEach method

const names = ["Alao", "Alaba", "Alamu"];
// names.forEach(function(){
//     console.log(names)
// })

// names.forEach(() => {
//     console.log(names)
// })

names.forEach((value, i, arr) => {
  console.log(value);
  console.log(i);
  console.log(arr);
});

let totalval = 0;
const trns = [42, 45, 26, 4, 13, 16];
trns.forEach((trn) => {
  console.log(totalval, (totalval += trn), trn);
});

console.log(totalval);

names.forEach((name) =>
  console.log(`congratulationn 
    ${name}, You will be representing the team in the UK next month`)
);

const investory = [
  { name: "Rice", price: 50000 },
  { name: "Beans", price: 500 },
  { name: "Gari", price: 3000 },
  { name: "Semo", price: 4000 },
  { name: "Yam", price: 5000 },
];

const prices = investory.map((value) => {
  return value.price;
});

console.log(prices);

const commodities = investory.map((value) => value.name);
console.log(commodities);

// Map method --> create a new array and apply function to each element without modifying the original array.
const arr = [1, 2, 3, 4, 5, 6];
const multipliedVal = arr.map((el) => el * 2);
console.log(multipliedVal);

const words = ["hello", "world", "javascript"];
console.log(words.map((word) => word.toUpperCase()));

const pricesInUSD = [200, 120, 360, 90];
const xchangeRate = 1490;

console.log(pricesInUSD.map((usd) => usd * xchangeRate));

const users = [
  { name: "Lateefah", age: 300 },
  { name: "Abdullah", age: 950 },
  { name: "Muiz Banire", age: 1450 },
  { name: "Abdul Kabeer", age: 1950 },
];

const nameOnly = users.map((value) => value.name);
console.log(nameOnly);

const products = [
  { name: "Laptop", price: 300 },
  { name: "Desktop", price: 950 },
  { name: "Mouse", price: 1450 },
  { name: "Keyboard", price: 1950 },
];

const productWithId = products.map((product, index) => ({
  id: index + 1,
  ...product,
}));

console.log(productWithId);
// console.log(products)

const nummies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const discoveries = nummies.map((i) => {
  if (i < 6) {
    return i;
  }
});

console.log(discoveries);

// Filter method.
const evenNumber = nummies.filter((i) => i % 2 === 0);
console.log(evenNumber);

const below = productWithId.filter((product) => product.price <= 1000);
console.log(below);

const seven = productWithId.filter((sevenChars) => sevenChars.name.length < 7);

console.log(seven);

let newArr = [100, "Pelumi", false, {}, null, undefined]

const filteredString = newArr.filter((data) => typeof data === "string")

console.log(filteredString)