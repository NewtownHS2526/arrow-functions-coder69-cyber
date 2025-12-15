

// ============================================
// MAP FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

Use map() to create a new array containing only the names.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// One-line arrow function:
const exercise1Result1 = exercise1Array.map(person => person.name);

// Regular arrow function:
const exercise1Result2 = exercise1Array.map((person) => {
  return person.name;
});

console.log("Exercise 1 - One-line:", exercise1Result1); // ["Alice", "Bob", "Charlie"]
console.log("Exercise 1 - Regular:", exercise1Result2); // ["Alice", "Bob", "Charlie"]


/*
EXERCISE 2
----------
Given the array [5, 10, 15, 20], use map() to create a new array 
where each number is converted to a string with " dollars" added.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [5, 10, 15, 20];

// One-line arrow function:
const exercise2Result1 = exercise2Array.map(amount => `${amount} dollars`);

// Regular arrow function:
const exercise2Result2 = exercise2Array.map((amount) => {
  return `${amount} dollars`;
});

console.log("Exercise 2 - One-line:", exercise2Result1); // ["5 dollars", "10 dollars", "15 dollars", "20 dollars"]
console.log("Exercise 2 - Regular:", exercise2Result2); // ["5 dollars", "10 dollars", "15 dollars", "20 dollars"]


/*
EXERCISE 3
----------
Given the array ["red", "green", "blue"], use map() to create a new array 
where each color is wrapped in HTML tags like "<div>color</div>".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["red", "green", "blue"];

// One-line arrow function:
const exercise3Result1 = exercise3Array.map(color => `<div>${color}</div>`);

// Regular arrow function:
const exercise3Result2 = exercise3Array.map((color) => {
  return `<div>${color}</div>`;
});

console.log("Exercise 3 - One-line:", exercise3Result1); // ["<div>red</div>", "<div>green</div>", "<div>blue</div>"]
console.log("Exercise 3 - Regular:", exercise3Result2); // ["<div>red</div>", "<div>green</div>", "<div>blue</div>"]


/*
EXERCISE 4
----------
Given the array [1, 2, 3, 4, 5], use map() to create a new array 
where each number is multiplied by itself and then added 10.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [1, 2, 3, 4, 5];

// One-line arrow function:
const exercise4Result1 = exercise4Array.map(n => (n * n) + 10);

// Regular arrow function:
const exercise4Result2 = exercise4Array.map((n) => {
  return (n * n) + 10;
});

console.log("Exercise 4 - One-line:", exercise4Result1); // [11, 14, 19, 26, 35]
console.log("Exercise 4 - Regular:", exercise4Result2); // [11, 14, 19, 26, 35]


/*
EXERCISE 5
----------
Given the array ["apple", "banana", "cherry"], use map() to create a new array 
where each fruit name is reversed (e.g., "apple" becomes "elppa").

Hint: You can use split(''), reverse(), and join('') methods.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = ["apple", "banana", "cherry"];

// One-line arrow function:
const exercise5Result1 = exercise5Array.map(fruit => fruit.split('').reverse().join(''));

// Regular arrow function:
const exercise5Result2 = exercise5Array.map((fruit) => {
  return fruit.split('').reverse().join('');
});

console.log("Exercise 5 - One-line:", exercise5Result1); // ["elppa", "ananab", "yrrehc"]
console.log("Exercise 5 - Regular:", exercise5Result2); // ["elppa", "ananab", "yrrehc"]
