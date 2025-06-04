// =====================================
// 🚀 Logical Operators in JavaScript
// =====================================
// Logical operators allow you to combine or invert boolean expressions.
// They are often used in conditional statements and loops.

// =============== 🧠 Variables Setup ===============
let x = 5;
let y = 10;

// ====================== ✅ Logical AND (&&) =======================
// Returns true only if BOTH conditions are true
console.log("\nLogical AND (&&):");
console.log(x < 10 && y > 5); // true: both are true
console.log(x < 10 && y < 5); // false: y < 5 is false

// ====================== ✅ Logical OR (||) ========================
// Returns true if AT LEAST ONE condition is true
console.log("\nLogical OR (||):");
console.log(x < 10 || y > 5); // true: both are true
console.log(x > 10 || y < 5); // false: both are false

// ====================== ✅ Logical NOT (!) ========================
// Inverts the boolean value of a condition
console.log("\nLogical NOT (!):");
console.log(!(x == y)); // true: x == y is false, so !false → true
console.log(!(x < 10)); // false: x < 10 is true, so !true → false

// ===== 🤓 Combination: AND (&&) + OR (||) =====
// Parentheses help control the order of operations
console.log("\nLogical AND (&&) with Logical OR (||):");
console.log((x < 10 && y > 5) || (x > 10 && y < 5)); // true: first group is true
console.log((x < 10 && y < 5) || (x > 10 && y < 5)); // false: both groups are false
console.log((x > 10 && y < 5) || (x < 10 && y > 5)); // true: second group is true

// ===================== 📌 Summary =====================
// && : true if all expressions are true
// || : true if at least one expression is true
// !  : inverts the truthiness of a condition

// ===================== 💡 Best Practices =====================
// ✅ Use parentheses to group expressions and make complex logic easier to read
// ✅ Avoid deeply nested logical statements – break them into separate checks
// ✅ Always consider the short-circuit behavior:
//     - && stops evaluating if one condition is false
//     - || stops evaluating if one condition is true
