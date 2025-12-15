// ============================================
// MAP FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" }
]

Use map() to create a new array with full names in the format "FirstName LastName".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" }
];

// One-line arrow function:
const exercise1Result1 = exercise1Array.map(person => `${person.firstName} ${person.lastName}`);

// Regular arrow function:
const exercise1Result2 = exercise1Array.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});

console.log("Exercise 1 - One-line:", exercise1Result1); // ["John Doe", "Jane Smith", "Bob Johnson"]
console.log("Exercise 1 - Regular:", exercise1Result2); // ["John Doe", "Jane Smith", "Bob Johnson"]


/*
EXERCISE 2
----------
Given the array [3, 7, 2, 9, 5], use map() to create a new array 
where each number is converted to a string and formatted as "Number: X".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [3, 7, 2, 9, 5];

// One-line arrow function:
const exercise2Result1 = exercise2Array.map(num => `Number: ${num}`);

// Regular arrow function:
const exercise2Result2 = exercise2Array.map((num) => {
  return `Number: ${num}`;
});

console.log("Exercise 2 - One-line:", exercise2Result1); // ["Number: 3", "Number: 7", "Number: 2", "Number: 9", "Number: 5"]
console.log("Exercise 2 - Regular:", exercise2Result2); // ["Number: 3", "Number: 7", "Number: 2", "Number: 9", "Number: 5"]


/*
EXERCISE 3
----------
Given the array of numbers [10, 25, 30, 45], use map() to create a new array 
where each number is converted to a percentage string (e.g., 10 becomes "10%").

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [10, 25, 30, 45];

// One-line arrow function:
const exercise3Result1 = exercise3Array.map(num => `${num}%`);

// Regular arrow function:
const exercise3Result2 = exercise3Array.map((num) => {
  return `${num}%`;
});

console.log("Exercise 3 - One-line:", exercise3Result1); // ["10%", "25%", "30%", "45%"]
console.log("Exercise 3 - Regular:", exercise3Result2); // ["10%", "25%", "30%", "45%"]


/*
EXERCISE 4
----------
Given the array ["hello world", "javascript is fun", "coding rocks"], 
use map() to create a new array where each string's first letter of each 
word is capitalized (e.g., "hello world" becomes "Hello World").

Hint: You might need to split, map each word, capitalize, and join.

Write your solution using:
- One-line arrow function (if possible, or regular)
- Regular arrow function
*/

const exercise4Array = ["hello world", "javascript is fun", "coding rocks"];

// One-line arrow function:
const exercise4Result1 = exercise4Array.map(str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

// Regular arrow function:
const exercise4Result2 = exercise4Array.map((str) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
});

console.log("Exercise 4 - One-line:", exercise4Result1); // ["Hello World", "Javascript Is Fun", "Coding Rocks"]
console.log("Exercise 4 - Regular:", exercise4Result2); // ["Hello World", "Javascript Is Fun", "Coding Rocks"]


/*
EXERCISE 5
----------
Given the array of objects:
[
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 },
  { price: 8, quantity: 3 }
]

Use map() to create a new array with the total cost (price * quantity) for each item.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 },
  { price: 8, quantity: 3 }
];

// One-line arrow function:
const exercise5Result1 = exercise5Array.map(item => item.price * item.quantity);

// Regular arrow function:
const exercise5Result2 = exercise5Array.map((item) => {
  return item.price * item.quantity;
});

console.log("Exercise 5 - One-line:", exercise5Result1); // [20, 20, 24]
console.log("Exercise 5 - Regular:", exercise5Result2); // [20, 20, 24]
