/*
📘 Topic: Type Conversion vs Type Coercion in JavaScript

✅ Type Conversion:
  - This is **explicit** — you manually convert one data type to another using functions like `Number()`, `String()`, `Boolean()`.

✅ Type Coercion:
  - This is **implicit** — JavaScript automatically converts data types during operations depending on the context and operator used.
*/

// ----------- Type Conversion (Explicit) -----------

const year = "1998";

// Convert string to number
console.log(Number(year), year); // Output: 1998 "1998"

// Invalid number conversion returns NaN (Not-a-Number)
console.log(Number("rahat")); // NaN
console.log(typeof NaN); // "number" (surprisingly, NaN is of type 'number')

// Convert number to string
console.log(25, String(25)); // 25 "25"

// Convert values to boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(123)); // true

// ----------- Type Coercion (Implicit) -----------

// '+' operator with a string leads to string concatenation
console.log("I am " + 26 + " years old"); // "I am 26 years old"

// Mixing strings and numbers: '+' leads to coercion into string
console.log("25" + "5" - 10); // 245 - 10 = 235 (string "255" becomes number 255)

// '-', '*', '/' force strings to be converted into numbers
console.log("5" * 5); // 25
console.log("50" / 10); // 5
console.log("100" - "25"); // 75

// Logical coercion with relational/comparison operators
console.log("123" > 57); // true ("123" is coerced to number)
console.log("5" == 5); // true (loose equality allows coercion)
console.log("5" === 5); // false (strict equality checks value and type)

// Complex coercion
let n = "2" + 5; // string "25"
n = n - "5"; // 25 - 5 = 20
console.log(n); // 20

// Coercion in arithmetic and logic
console.log(false + 1); // 1 (false coerced to 0)
console.log(true + 1); // 2 (true coerced to 1)
console.log("" + 1); // "1" (empty string coerced to string)
console.log("5" - true); // 4  ("5" becomes 5, true becomes 1)

// 0 and "" are falsy values, anything else is truthy
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true

/*
📌 Summary: Important Rules for Type Conversion & Coercion

1. '+' operator with string -> Converts numbers/booleans to strings.
   Example: '23' + 10 = '2310'

2. '-', '*', '/' operators -> Convert strings to numbers if possible.
   Example: '20' - '5' = 15

3. Comparison operators (>, <, ==) -> Convert operands to numbers (except ===).
   Example: '5' == 5 is true, but '5' === 5 is false

4. Boolean Conversion Rules:
   - Falsy values: 0, "", null, undefined, NaN, false
   - Truthy values: everything else (non-zero numbers, non-empty strings, objects, arrays)

5. NaN is of type 'number' — strange but true!

🧠 Best Practice:
- Prefer explicit conversion over coercion for readability and reliability.
- Always use `===` (strict equality) instead of `==` to avoid unexpected coercion.
*/
