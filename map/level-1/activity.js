// ============================================
// MAP FUNCTION - LEVEL 1
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5], use map() to create a new array 
where each number is multiplied by 3.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5];

// One-line arrow function:
const exercise1Result1 = exercise1Array.map(n => n * 3);

// Regular arrow function:
const exercise1Result2 = exercise1Array.map((n) => {
  return n * 3;
});

console.log("Exercise 1 - One-line:", exercise1Result1); // [3, 6, 9, 12, 15]
console.log("Exercise 1 - Regular:", exercise1Result2); // [3, 6, 9, 12, 15]


/*
EXERCISE 2
----------
Given the array ["hello", "world", "javascript"], use map() to create 
a new array where each string has "!" added at the end.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["hello", "world", "javascript"];

// One-line arrow function:
const exercise2Result1 = exercise2Array.map(word => word + "!");

// Regular arrow function:
const exercise2Result2 = exercise2Array.map((word) => {
  return word + "!";
});

console.log("Exercise 2 - One-line:", exercise2Result1); // ["hello!", "world!", "javascript!"]
console.log("Exercise 2 - Regular:", exercise2Result2); // ["hello!", "world!", "javascript!"]


/*
EXERCISE 3
----------
Given the array [10, 20, 30, 40], use map() to create a new array 
where each number is divided by 2.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [10, 20, 30, 40];

// One-line arrow function:
const exercise3Result1 = exercise3Array.map(n => n / 2);

// Regular arrow function:
const exercise3Result2 = exercise3Array.map((n) => {
  return n / 2;
});

console.log("Exercise 3 - One-line:", exercise3Result1); // [5, 10, 15, 20]
console.log("Exercise 3 - Regular:", exercise3Result2); // [5, 10, 15, 20]


/*
EXERCISE 4
----------
Given the array ["cat", "dog", "bird"], use map() to create a new array 
where each string is converted to uppercase and has "s" added at the end 
(making them plural).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["cat", "dog", "bird"];

// One-line arrow function:
const exercise4Result1 = exercise4Array.map(word => word.toUpperCase() + "S");

// Regular arrow function:
const exercise4Result2 = exercise4Array.map((word) => {
  return word.toUpperCase() + "S";
});

console.log("Exercise 4 - One-line:", exercise4Result1); // ["CATS", "DOGS", "BIRDS"]
console.log("Exercise 4 - Regular:", exercise4Result2); // ["CATS", "DOGS", "BIRDS"]


/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8], use map() to create a new array where 
each number is squared (multiplied by itself).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8];

// One-line arrow function:
const exercise5Result1 = exercise5Array.map(n => n * n);

// Regular arrow function:
const exercise5Result2 = exercise5Array.map((n) => {
  return n * n;
});

console.log("Exercise 5 - One-line:", exercise5Result1); // [4, 16, 36, 64]
console.log("Exercise 5 - Regular:", exercise5Result2); // [4, 16, 36, 64]
