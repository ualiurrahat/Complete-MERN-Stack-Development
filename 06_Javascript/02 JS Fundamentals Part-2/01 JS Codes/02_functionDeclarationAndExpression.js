/**
 * Demonstrates the difference between Function Declarations and Function Expressions
 * in JavaScript. Covers concepts such as hoisting, anonymous functions, and best practices.
 */

// Function Declaration
// Can be called before it is declared due to hoisting
console.log(greetDeclaration("Nabila"));

function greetDeclaration(name) {
  return "Hello, " + name + "!";
}

// Function Expression
// Cannot be called before declaration (not hoisted)
// Uncommenting the following line will throw an error:
// console.log(greetExpression("Murr"));

const greetExpression = function (name) {
  return "Hello, " + name + "!";
};

// Function calls
console.log(greetDeclaration("Rahat"));
console.log(greetExpression("Sarah"));

/*
Summary:
---------
Function Declaration:
- Uses the `function` keyword with a name.
- Hoisted: Can be called before definition.

Function Expression:
- A function assigned to a variable.
- Not hoisted: Must be defined before use.
- Can be anonymous or named.

Usage Tip:
Use function expressions when defining functions inside other functions or callbacks,
and function declarations for reusable top-level logic.
*/
