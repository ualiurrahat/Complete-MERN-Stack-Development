// 04_stringIntro.js
// ===========================================================
// 💡 Introduction to Strings in JavaScript
// Strings represent textual data in JavaScript.
// They can be created using single quotes (' '), double quotes (" "), or backticks (``) for template literals.

// ✅ Declaring strings with single and double quotes
let myName = "rahat";
let me = "rahat";
console.log(myName);
console.log(me);

// ❌ Mixing single and double quotes without escape characters results in syntax error
// let name = "rahat'; // ❌ Invalid

// ✅ Getting length of a string
console.log(me.length); // Outputs: 5

// ===========================================================
// 📦 Template Literals & String Interpolation
// Template literals use backticks (` `) and allow embedded expressions using ${}
let boy1 = "minul";
let boy2 = "naeem";
let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence); // Output: minul is a friend of naeem

// ===========================================================
// 📌 Escape Sequence Characters in Strings
// Use backslash (\) to escape characters inside strings
let str1 = "madam's lecture"; // or use double quotes around the string
let str2 = "madam's lecture";
console.log(str1);
console.log(str2);

// Common escape sequences:
// \n -> New line
// \t -> Tab
// \\ -> Backslash
// \" or \' -> Quote inside string

// ===========================================================
// 🧾 Multi-line Strings
// ✅ Using backslashes with regular strings
console.log(
  "this is \n\
multiple line output \n\
with string"
);

console.log("....................");

// ✅ Using template literals for clean multi-line strings
console.log(`multiple
line output
with
template
literals
`);

// ===========================================================
// ✅ Best Practices
// - Prefer template literals for dynamic and multiline strings
// - Avoid mixing quote styles unless using escape characters
// - Use string methods for efficient text manipulation

// NOTE: String methods have been discussed in the separate string section.
// End of 04_stringIntro.js
