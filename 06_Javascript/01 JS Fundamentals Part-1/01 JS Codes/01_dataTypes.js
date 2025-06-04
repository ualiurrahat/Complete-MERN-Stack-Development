// ======================================================================
// 01_dataType.js
// Topic: JavaScript Data Types
// Description: Demonstrates primitive and non-primitive data types in JS.
// ======================================================================

/*
  In JavaScript, every value is either:
  - A **primitive type** (immutable)
  - Or a **non-primitive type** (objects, mutable)
*/

/* ----------------------------------------------------------------------
   PRIMITIVE DATA TYPES (7 types): 
   Mnemonic: nn ss bb u
   -> null, number, string, symbol, boolean, bigInt, undefined
---------------------------------------------------------------------- */

let a = null; // Null (intentional absence of any value)
let b = 25; // Number
let c = Symbol("#billionDollar"); // Symbol (unique identifier)
let d = "murr"; // String
let e = true; // Boolean
let f = BigInt("25") + BigInt("08"); // BigInt (for large integers)
let g; // Undefined (declared but not assigned)

console.log(a, b, c, d, e, f, g); // Output all values
console.log(typeof f); // Check the type of BigInt

/* ----------------------------------------------------------------------
   NON-PRIMITIVE DATA TYPES:
   -> object, array, function
---------------------------------------------------------------------- */

// Example: Object literal
const murr = {
  name: "rahat", // string property
  age: 24, // number property
  college: "bsmrstu",
  status: "learner", // string property
  // Note: Keys can also be written as "name", "age", etc.
};

console.log(murr); // Print the whole object
console.log(murr.age); // Access a specific property using dot notation

/* ----------------------------------------------------------------------
   Additional Notes:
   - Objects are reference types and mutable.
   - Arrays and functions are also objects under the hood.
---------------------------------------------------------------------- */
