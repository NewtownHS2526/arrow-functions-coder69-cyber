
// ============================================
// REDUCE FUNCTION - LEVEL 1
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5], use reduce() to calculate the sum of 
all numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5];

// One-line arrow function:
const exercise1Result1 = exercise1Array.reduce((acc, n) => acc + n, 0);

// Regular arrow function:
const exercise1Result2 = exercise1Array.reduce((acc, n) => {
  return acc + n;
}, 0);

console.log("Exercise 1 - One-line:", exercise1Result1); // Expected: 15
console.log("Exercise 1 - Regular:", exercise1Result2); // Expected: 15


/*
EXERCISE 2
----------
Given the array [10, 20, 30, 40], use reduce() to calculate the product 
(multiplication) of all numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [10, 20, 30, 40];

// One-line arrow function:
const exercise2Result1 = exercise2Array.reduce((acc, n) => acc * n, 1);

// Regular arrow function:
const exercise2Result2 = exercise2Array.reduce((acc, n) => {
  return acc * n;
}, 1);

console.log("Exercise 2 - One-line:", exercise2Result1); // Expected: 240000
console.log("Exercise 2 - Regular:", exercise2Result2); // Expected: 240000


/*
EXERCISE 3
----------
Given the array ["apple", "banana", "orange"], use reduce() to concatenate 
all strings into one string separated by commas: "apple,banana,orange".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["apple", "banana", "orange"];

// One-line arrow function:
const exercise3Result1 = exercise3Array.reduce((acc, word) => acc + "," + word);

// Regular arrow function:
const exercise3Result2 = exercise3Array.reduce((acc, word) => {
  return acc + "," + word;
});

console.log("Exercise 3 - One-line:", exercise3Result1); // Expected: "apple,banana,orange"
console.log("Exercise 3 - Regular:", exercise3Result2); // Expected: "apple,banana,orange"


/*
EXERCISE 4
----------
Given the array [5, 15, 25, 35], use reduce() to find the maximum number.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [5, 15, 25, 35];

// One-line arrow function:
const exercise4Result1 = exercise4Array.reduce((acc, n) => (n > acc ? n : acc));

// Regular arrow function:
const exercise4Result2 = exercise4Array.reduce((acc, n) => {
  return n > acc ? n : acc;
});

console.log("Exercise 4 - One-line:", exercise4Result1); // Expected: 35
console.log("Exercise 4 - Regular:", exercise4Result2); // Expected: 35


/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8], use reduce() to calculate the sum of all 
numbers, starting with an initial value of 10.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8];

// One-line arrow function:
const exercise5Result1 = exercise5Array.reduce((acc, n) => acc + n, 10);

// Regular arrow function:
const exercise5Result2 = exercise5Array.reduce((acc, n) => {
  return acc + n;
}, 10);

console.log("Exercise 5 - One-line:", exercise5Result1); // Expected: 30 (10 + 2 + 4 + 6 + 8)
console.log("Exercise 5 - Regular:", exercise5Result2); // Expected: 30 (10 + 2 + 4 + 6 + 8)
