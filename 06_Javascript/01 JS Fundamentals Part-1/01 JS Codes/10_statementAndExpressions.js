/**
 * Understanding Statements and Expressions in JavaScript
 *
 * Expression:
 * - Produces a value.
 * - Can be used wherever a value is expected.
 * - Examples: arithmetic operations, function calls, variables.
 *
 * Statement:
 * - Performs an action.
 * - Does not necessarily produce a value.
 * - Examples: if-else, loops, variable declarations.
 */

// Example of a statement: Conditional statement
let time = 14;
let greeting;

if (time < 12) {
  greeting = "Good morning!";
} else {
  greeting = "Good afternoon!";
}

// Example of an expression: Arithmetic expression producing a value
let sum = 5 * (10 - 3) + 2; // sum equals 37

// Template literals accept expressions (not statements) inside `${}`
// Expressions produce values; statements do not.
let me = "rahat";
let age = 2024 - 1998;
let myself = `Hi, I am ${me}. I am ${age} years old.`;

console.log(myself);

// The following is invalid because you cannot place statements inside `${}`
// It will cause a syntax error if uncommented:
// console.log(`I am ${230 - 204} years old ${if (23 < 15) {}}`);
