// ==========================================================================
// 02_variableDeclaration.js
// Topic: Difference Between var, let, and const in JavaScript
// Description: Demonstrates scope, redeclaration, and reassignment behavior.
// ==========================================================================

/*
  JavaScript is a **dynamically typed language**:
  - Variable types are determined at runtime based on the assigned value.
  - A variable can hold a number, then later a string, etc.
  - Variable types are tied to the *value*, not the *variable*.
*/

/* --------------------------------------------------------------------------
   VAR: Function-scoped, can be redeclared and reassigned
--------------------------------------------------------------------------- */
var a = "rahat"; // initial declaration
var a = "minul"; // redeclaration allowed with var
console.log(a); // Output: minul

/*
  ⚠️ Avoid using `var` in modern JavaScript:
  - It can lead to unexpected bugs due to hoisting and redeclaration.
  - Prefer `let` and `const` instead.
*/

/* --------------------------------------------------------------------------
   LET: Block-scoped, can be reassigned but not redeclared in the same scope
--------------------------------------------------------------------------- */
let b = 25;
// let b = "rahat"; ❌ Error: Cannot redeclare `b` in the same scope
console.log(b); // Output: 25

{
  let b = 2; // This `b` is scoped to this block only
  console.log(b); // Output: 2 (inner block scope)
}

console.log(b); // Output: 25 (outer scope)

// Reassigning `let` is allowed
b = "eee";
console.log(b); // Output: eee

/* --------------------------------------------------------------------------
   CONST: Block-scoped, cannot be redeclared or reassigned
--------------------------------------------------------------------------- */
const n = 2022;
console.log(n); // Output: 2022

// const n = "rahat";  ❌ Error: Identifier 'n' has already been declared
// n = "twin tower";   ❌ Error: Assignment to constant variable

/*
  ✅ Use `const` by default unless you know the value will change.
  ✅ Use `let` when you need to reassign.
  ❌ Avoid `var` in modern JavaScript.
*/

/* --------------------------------------------------------------------------
   Summary:
   - Use `const` when the value should never change.
   - Use `let` when the value may change.
   - Avoid `var` for predictable, clean code.
--------------------------------------------------------------------------- */
