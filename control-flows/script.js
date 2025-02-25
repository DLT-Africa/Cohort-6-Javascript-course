console.log("Hello world!");

// Control flows --> determines how programmes are executed based on conditions and iteration.

// Conditionals -- if, else-if, else, ternary operator.

if ("condition") {
  // code to execute if condition is met
}

let age = 30;

if (age === 25) {
  console.log("Age is greater than 25");
} else if (age < 25) {
  console.log("Age is lesser than 25");
} else {
  console.log("Age is 30");
}

let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("You are not logged in");
} else {
  console.log("You are logged in.");
}

let balance = 500;
let withdrawalAmount = 1000;

if (withdrawalAmount > balance) {
  console.log("insufficient Funds");
} else if (withdrawalAmount == balance) {
  console.log("You can not empty your wallet! Pity yourself.");
} else {
  console.log("Successful.. Owo ti tan");
}

let purchaseAmount = 100;
let discount;

if (purchaseAmount >= 250) {
  discount = 10;
} else if (purchaseAmount >= 150) {
  discount = 5;
} else if (purchaseAmount === 100) {
  discount = 1.5;
} else {
  discount = 0;
}

console.log(`You got a discount of ${discount}`);

// Ternary Operator.
// condition ? expression_if_true : expression_if_false.

let threashold = 40;

threashold >= 40 ? console.log("Marry") : console.log("You are still a minor");

const number = 9;

const result = number % 2 === 0 ? "even" : "odd";

console.log(result);

let temperature = 40;

const entry = temperature < 12 ? "It is a cool 😎 day" : "It is a hot ☀️ day!";

console.log(entry);

// Switch statement -- used when there a multiple possible value for a variable.

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Today is bright!");
    break;
  case "Friday":
    console.log("Jimoh Oloyin");
    break;
  case "Tuesday":
    console.log("Today is Tuesday!");
    break;
  default:
    console.log("It is a normal day");
}

let order = "Pizza";

switch (order) {
  case "Burger":
    console.log("This is burger");
    break;

  case "Pizza":
    console.log("You ordered a pizza");
    break;

  case "Doughnut":
    console.log("You ordered a D.....");
    break;

  default:
    console.log("invalid order, Please select from the menu");
}

let dayNumber = 0;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "😉";
}

console.log(`Day ${dayNumber} is ${dayName}`);

// Loops are used to execute a block of code multiple times.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let table = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}
