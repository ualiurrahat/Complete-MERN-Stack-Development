// ======================================================================
// 05_conditionalExpression.js
// Topic: Conditional Expressions in JavaScript
// Description: Demonstrates usage of `if`, `else if`, and `else` statements,
//              input handling with `prompt`, and type conversions.
// ======================================================================

// ------------------------------
// Example 1: Prompt Input Handling
// ------------------------------

// The `prompt()` function always returns a string
// Uncomment the lines below to test in a browser environment
// let age = prompt("What is your age?");
// console.log(typeof age); // Output: 'string'

// ------------------------------
// Example 2: Manual Type Assignment & Conversion
// ------------------------------

// Initialize `age` with a number
let age = 25;

// Convert `age` to integer (if it were a string)
// `Number.parseInt()` or `parseInt()` are equivalent
age = Number.parseInt(age);
console.log(typeof age); // Output: 'number'

// Initialize a name variable (not used in this logic, but declared)
let name = "unknown";

// ------------------------------
// Example 3: Conditional Checks
// ------------------------------
// Use `if`, `else if`, and `else` to perform logic based on age
// Always write conditions clearly and in logical order

if (age % 6 === 0) {
  console.log("Divisible by both 3 and 2"); // Most specific case
} else if (age % 3 === 0) {
  console.log("Divisible by 3 only");
} else if (age % 2 === 0) {
  console.log("Divisible by 2 only");
} else {
  console.log("Not divisible by 2 or 3");
}

// ------------------------------
// Example 4: Using Ternary Operator
// ------------------------------
// The ternary operator (`condition ? trueExpr : falseExpr`) is a concise way
// to write simple conditional logic

let isAdult = age >= 18 ? "Yes, adult" : "No, not an adult";
console.log(`Is adult? ${isAdult}`);

// ------------------------------
// Example 5: Nested Conditions
// ------------------------------
// Use nested conditions when logic depends on multiple layers

if (age >= 18) {
  if (age < 60) {
    console.log("You are an adult but not a senior citizen.");
  } else {
    console.log("You are a senior citizen.");
  }
} else {
  console.log("You are a minor.");
}
