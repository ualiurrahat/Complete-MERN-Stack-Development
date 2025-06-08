/**
 * Function Basics in JavaScript
 * -----------------------------------
 * Functions are reusable blocks of code that perform a specific task.
 * They are defined using the `function` keyword followed by a name, and
 * can accept parameters and return a value.
 *
 * There are different types of functions in JS:
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function (ES6+)
 */

// Function Declaration to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width; // returns area (length x width)
}

// Invoking the function with arguments 5 and 3
var area = calculateRectangleArea(5, 3);

// Output the result
console.log("Area of the rectangle:", area); // Output: 15

/**
 * Notes:
 * - Functions help to write modular, readable, and maintainable code.
 * - The return value can be stored in a variable or used directly.
 * - Function declaration is hoisted in JS (i.e., can be called before it's written).
 */
