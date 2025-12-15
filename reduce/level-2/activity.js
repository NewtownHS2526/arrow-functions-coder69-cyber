
// ============================================
// REDUCE FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use reduce() to calculate 
the sum of only the even numbers.

Hint: You can check if a number is even inside the reduce function.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// One-line arrow function:
const exercise1Result1 = exercise1Array.reduce((acc, n) => n % 2 === 0 ? acc + n : acc, 0);

// Regular arrow function:
const exercise1Result2 = exercise1Array.reduce((acc, n) => {
  if (n % 2 === 0) {
    return acc + n;
  }
  return acc;
}, 0);

console.log("Exercise 1 - One-line:", exercise1Result1); // Expected: 30 (2 + 4 + 6 + 8 + 10)
console.log("Exercise 1 - Regular:", exercise1Result2); // Expected: 30


/*
EXERCISE 2
----------
Given the array of objects:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

Use reduce() to calculate the total age of all people.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// One-line arrow function:
const exercise2Result1 = exercise2Array.reduce((acc, person) => acc + person.age, 0);

// Regular arrow function:
const exercise2Result2 = exercise2Array.reduce((acc, person) => {
  return acc + person.age;
}, 0);

console.log("Exercise 2 - One-line:", exercise2Result1); // Expected: 90
console.log("Exercise 2 - Regular:", exercise2Result2); // Expected: 90


/*
EXERCISE 3
----------
Given the array ["hello", "world", "javascript"], use reduce() to create 
a single string with all words in uppercase, separated by " - ": 
"HELLO - WORLD - JAVASCRIPT".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["hello", "world", "javascript"];

// One-line arrow function:
const exercise3Result1 = exercise3Array.reduce((acc, word) => acc + " - " + word.toUpperCase(), "").slice(3); // Slice removes the first " - "

// Regular arrow function:
const exercise3Result2 = exercise3Array.reduce((acc, word) => {
  return acc + " - " + word.toUpperCase();
}, "").slice(3); // Slice removes the first " - "

console.log("Exercise 3 - One-line:", exercise3Result1); // Expected: "HELLO - WORLD - JAVASCRIPT"
console.log("Exercise 3 - Regular:", exercise3Result2); // Expected: "HELLO - WORLD - JAVASCRIPT"


/*
EXERCISE 4
----------
Given the array [12, 45, 8, 23, 56, 9], use reduce() to find the minimum number.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [12, 45, 8, 23, 56, 9];

// One-line arrow function:
const exercise4Result1 = exercise4Array.reduce((acc, n) => (n < acc ? n : acc), exercise4Array[0]);

// Regular arrow function:
const exercise4Result2 = exercise4Array.reduce((acc, n) => {
  return n < acc ? n : acc;
}, exercise4Array[0]);

console.log("Exercise 4 - One-line:", exercise4Result1); // Expected: 8
console.log("Exercise 4 - Regular:", exercise4Result2); // Expected: 8


/*
EXERCISE 5
----------
Given the array [1, 2, 3, 4, 5], use reduce() to count how many numbers 
are greater than 2.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [1, 2, 3, 4, 5];

// One-line arrow function:
const exercise5Result1 = exercise5Array.reduce((acc, n) => (n > 2 ? acc + 1 : acc), 0);

// Regular arrow function:
const exercise5Result2 = exercise5Array.reduce((acc, n) => {
  if (n > 2) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log("Exercise 5 - One-line:", exercise5Result1); // Expected: 3
console.log("Exercise 5 - Regular:", exercise5Result2); // Expected: 3
