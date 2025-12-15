// ============================================
// FOREACH FUNCTION - LEVEL 2
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

Use forEach() to print each person's name and age in the format: 
"Name is Age years old".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Your solution here (one-line arrow function):
exercise1Array.forEach(person => console.log(`${person.name} is ${person.age} years old`));

// Your solution here (regular arrow function):
exercise1Array.forEach(function(person) {
  console.log(`${person.name} is ${person.age} years old`);
});

// Expected output:
// "Alice is 25 years old"
// "Bob is 30 years old"
// "Charlie is 35 years old"


/*
EXERCISE 2
----------
Given the array [1, 2, 3, 4, 5], use forEach() to print only the 
even numbers (2, 4).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [1, 2, 3, 4, 5];

// Your solution here (one-line arrow function):
exercise2Array.forEach(n => {
  if (n % 2 === 0) {
    console.log(n);
  }
});

// Your solution here (regular arrow function):
exercise2Array.forEach(function(n) {
  if (n % 2 === 0) {
    console.log(n);
  }
});

// Expected output: 
// 2
// 4


/*
EXERCISE 3
----------
Given the array ["apple", "banana", "cherry", "date"], use forEach() 
to print each fruit name with its index in the format: 
"Index 0: apple", "Index 1: banana", etc.

Hint: forEach can take a second parameter for the index.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["apple", "banana", "cherry", "date"];

// Your solution here (one-line arrow function):
exercise3Array.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// Your solution here (regular arrow function):
exercise3Array.forEach(function(fruit, index) {
  console.log(`Index ${index}: ${fruit}`);
});

// Expected output:
// "Index 0: apple"
// "Index 1: banana"
// "Index 2: cherry"
// "Index 3: date"


/*
EXERCISE 4
----------
Given the array [10, 20, 30, 40], use forEach() to build a string that 
contains all numbers separated by " -> ". Store the result in a variable 
and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [10, 20, 30, 40];
let exercise4Result = "";

// Your solution here (one-line arrow function):
exercise4Array.forEach((num, index) => {
  exercise4Result += index < exercise4Array.length - 1 ? `${num} -> ` : `${num}`;
});

// Your solution here (regular arrow function):
exercise4Array.forEach(function(num, index) {
  exercise4Result += index < exercise4Array.length - 1 ? `${num} -> ` : `${num}`;
});

// Uncomment to test:
console.log("Exercise 4 - Result:", exercise4Result);
// Expected: "10 -> 20 -> 30 -> 40"


/*
EXERCISE 5
----------
Given the array [5, 15, 25, 35], use forEach() to count how many numbers 
are greater than 20. Store the count in a variable and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [5, 15, 25, 35];
let exercise5Count = 0;

// Your solution here (one-line arrow function):
exercise5Array.forEach(n => {
  if (n > 20) {
    exercise5Count++;
  }
});

// Your solution here (regular arrow function):
exercise5Array.forEach(function(n) {
  if (n > 20) {
    exercise5Count++;
  }
});

// Uncomment to test:
console.log("Exercise 5 - Count:", exercise5Count);
// Expected: 2


