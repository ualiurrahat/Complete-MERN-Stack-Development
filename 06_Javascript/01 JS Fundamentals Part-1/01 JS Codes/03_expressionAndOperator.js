// ===============================================
// 📁 File: 03_operators.js
// ✅ Description: Covers JavaScript expressions, types of operators, operator precedence, and best practices.
// ===============================================

// ============================
// 🔹 Expressions in JavaScript
// ============================
// ➤ An expression is any valid unit of code that resolves to a value.
// Examples of simple expressions:
"rahat";
25;

// ===========================
// 🔹 Arithmetic Operators
// ===========================
let a = 25;
let b = 8;
console.log("a + b =", a + b); // ➕ Addition
console.log("a - b =", a - b); // ➖ Subtraction
console.log("a * b =", a * b); // ✖️ Multiplication
console.log("a / b =", a / b); // ➗ Division
console.log("a % b =", a % b); // 🔢 Modulus (Remainder)
console.log("a ** b =", a ** b); // 🧮 Exponentiation: a^b

console.log("a++ =", a++); // Post-increment: returns a, then a+1
console.log("++a =", ++a); // Pre-increment: increments, then returns
console.log("--a =", --a); // Pre-decrement
console.log("a-- =", a--); // Post-decrement

// ============================
// 🔹 Assignment Operators
// ============================
let c = 10;
c += 5;
console.log(c); // c = c + 5 = 15
c -= 20;
console.log(c); // c = c - 20 = -5
c *= 2;
console.log(c); // c = c * 2 = -10
c /= -2;
console.log(c); // c = c / -2 = 5
c **= 2;
console.log(c); // c = c^2 = 25
c %= 5;
console.log(c); // c = c % 5 = 0

// ============================
// 🔹 Comparison Operators
// ============================
let d = 25;
let e = 8;
console.log("d == e:", d == e); // Value equality
console.log("d != e:", d != e); // Value inequality
console.log("d === e:", d === e); // Value and type equality
console.log("d !== e:", d !== e); // Not equal value or type

// Type coercion example:
let f = 10;
let g = "10";
console.log("f == g:", f == g); // true (string coerced to number)
console.log("f != g:", f != g); // false
console.log("f === g:", f === g); // false (number vs string)
console.log("f !== g:", f !== g); // true

// ============================
// 🔹 typeof Operator
// ============================
console.log(typeof a); // number
d = null;
console.log(typeof d); // object (special case in JS)

// =====================================
// 🔹 Operator Precedence (Brief Notes)
// =====================================
// ➤ Operator precedence determines the order in which operators are evaluated.
// ➤ Example: `let x = 2 + 3 * 4;` → multiplication has higher precedence than addition.
// ➤ Use parentheses () to override precedence and increase readability.
//
// Precedence (High to Low):
// 1. () Grouping
// 2. ++, -- (postfix)
// 3. **
// 4. *, /, %
// 5. +, -
// 6. <, <=, >, >=
// 7. ==, !=, ===, !==
// 8. &&, || (logical operators - moved to separate file)
// 9. =, +=, -= (assignment)

// Note: Logical operators (&&, ||, !) are explained in a separate file.

// ===============================================
// 🧠 Summary:
// - Understand different types of expressions
// - Learn arithmetic, assignment, and comparison operators
// - Know when JavaScript uses type coercion
// - Be aware of operator precedence and group using () when needed
// ===============================================
