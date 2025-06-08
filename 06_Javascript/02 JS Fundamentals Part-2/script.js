// Enable JavaScript's strict mode
// Note: Must be the first executable line in the script
// Comments above it are fine — they don’t affect activation
"use strict";

// Strict mode helps catch common coding mistakes and prevents unsafe actions

let hasDriverLicense = false;
const passTest = true;

// Assign value based on condition
if (passTest) hasDriverLicense = true;

// ⚠️ If you accidentally used an undeclared variable like this:
// if (passTest) hasDriversLicense = true; // Typo: extra 's'
// Without strict mode, JavaScript would silently create a global variable
// With strict mode, it throws an error: "hasDriversLicense is not defined"
// This makes debugging much easier

// Only prints this message if hasDriverLicense is true
if (hasDriverLicense) {
  console.log("I can drive");
}

// Strict mode also prevents usage of reserved keywords as variable names
// The following lines would throw syntax errors:
// const private = 25; // 'private' is a reserved keyword
// const if = 8;       // 'if' is a reserved keyword
