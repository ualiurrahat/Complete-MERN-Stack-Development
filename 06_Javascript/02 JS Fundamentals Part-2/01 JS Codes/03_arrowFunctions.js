/**
 * Demonstrates how to use arrow functions in JavaScript.
 * Covers single-line, multi-line, single and multiple parameters.
 * Also includes a note on the special behavior of arrow functions with `this` keyword.
 */

// One-liner arrow function with multiple parameters
const multiply = (a, b) => a * b;

// Multiline arrow function with conditional logic
const greet = (name, timeOfDay) => {
  if (timeOfDay === "morning") {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
};

// Arrow function with multiple parameters
const add = (num1, num2) => {
  return num1 + num2;
};

// Arrow function with a single parameter
const double = (num) => num * 2;

// Example usage
console.log(multiply(2, 3)); // 6
console.log(greet("Sarah", "morning"));
console.log(add(5, 7)); // 12
console.log(double(4)); // 8

/*
Note:
-----
Arrow functions do not have their own `this` context.
They inherit `this` from their lexical environment.
This makes them unsuitable for object methods or constructors.
*/
