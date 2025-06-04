/**
 * 11_ternaryOperator.js
 *
 * The ternary operator is a concise way to write conditional expressions.
 *
 * Syntax:
 * condition ? expressionIfTrue : expressionIfFalse
 *
 * It evaluates the condition. If true, it returns expressionIfTrue; otherwise, expressionIfFalse.
 */

// Example:
const age = 20;
const message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // Output: "You are an adult"

// Explanation:
// The condition (age >= 18) evaluates to true or false.
// If true, the value after '?' is returned ("You are an adult").
// If false, the value after ':' is returned ("You are a minor").
// This allows assignment or use of conditional logic in a single line.

// Ternary operators can also be nested, but be cautious as it may reduce readability.
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(`Grade: ${grade}`);
