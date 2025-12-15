

// ============================================
// FOREACH FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
]

Use forEach() to print each product's total value (price * quantity) 
in the format: "Laptop: $2000 total".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
];

// Your solution here (one-line arrow function):
exercise1Array.forEach(product => console.log(`${product.product}: $${product.price * product.quantity} total`));

// Your solution here (regular arrow function):
exercise1Array.forEach(function(product) {
  console.log(`${product.product}: $${product.price * product.quantity} total`);
});

// Expected output:
// "Laptop: $2000 total"
// "Mouse: $125 total"
// "Keyboard: $225 total"


/*
EXERCISE 2
----------
Given the array ["hello", "world", "javascript", "coding"], use forEach() 
to print only the words that have more than 5 characters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["hello", "world", "javascript", "coding"];

// Your solution here (one-line arrow function):
exercise2Array.forEach(word => {
  if (word.length > 5) {
    console.log(word);
  }
});

// Your solution here (regular arrow function):
exercise2Array.forEach(function(word) {
  if (word.length > 5) {
    console.log(word);
  }
});

// Expected output:
// "javascript"
// "coding"


/*
EXERCISE 3
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach() to calculate 
the product (multiplication) of all numbers. Store the result in a variable 
and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let exercise3Product = 1;

// Your solution here (one-line arrow function):
exercise3Array.forEach(n => {
  exercise3Product *= n;
});

// Your solution here (regular arrow function):
exercise3Array.forEach(function(n) {
  exercise3Product *= n;
});

// Uncomment to test:
console.log("Exercise 3 - Product:", exercise3Product);
// Expected: 3628800


/*
EXERCISE 4
----------
Given the array of strings ["apple", "banana", "cherry"], use forEach() 
to print each word reversed. For example, "apple" becomes "elppa".

Hint: You can use split(''), reverse(), and join('') methods.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["apple", "banana", "cherry"];

// Your solution here (one-line arrow function):
exercise4Array.forEach(word => console.log(word.split('').reverse().join('')));

// Your solution here (regular arrow function):
exercise4Array.forEach(function(word) {
  console.log(word.split('').reverse().join(''));
});

// Expected output:
// "elppa"
// "ananab"
// "yrrehc"


/*
EXERCISE 5
----------
Given the array [12, 45, 8, 23, 56, 9], use forEach() to find and print 
the maximum number. Store the maximum in a variable and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [12, 45, 8, 23, 56, 9];
let exercise5Max = exercise5Array[0]; // Start with first element

// Your solution here (one-line arrow function):
exercise5Array.forEach(n => {
  if (n > exercise5Max) {
    exercise5Max = n;
  }
});

// Your solution here (regular arrow function):
exercise5Array.forEach(function(n) {
  if (n > exercise5Max) {
    exercise5Max = n;
  }
});

// Uncomment to test:
console.log("Exercise 5 - Maximum:", exercise5Max);
// Expected: 56
