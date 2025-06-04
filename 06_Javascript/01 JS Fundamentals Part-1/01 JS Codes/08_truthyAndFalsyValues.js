/**
 * Truthy and Falsy Values in JavaScript
 *
 * In JavaScript, values are either "truthy" or "falsy" when converted to a boolean.
 * This is important because JavaScript performs type coercion in conditions.
 *
 * Falsy values evaluate to false in a boolean context.
 * Truthy values evaluate to true.
 */

// Falsy values: These values convert to false when used in boolean contexts.
// There are exactly 6 falsy values in JS:
// 1. false        - the boolean false
// 2. 0            - the number zero
// 3. ""           - empty string (length 0)
// 4. null         - intentional absence of any value
// 5. undefined    - variable not assigned a value
// 6. NaN          - Not a Number, result of invalid number operations

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy values: All values other than the above falsy ones.
// Examples of truthy values:
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("rahat")); // true (non-empty string)
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)
console.log(Boolean(function () {})); // true (functions)

// Why this matters:
// Conditions like `if(value)` rely on truthy/falsy evaluation,
// so understanding these is crucial for writing correct conditional logic.
