// ==========================================
// OBJECTS IN JAVASCRIPT - BASICS
// ==========================================

/*
Definition:
Objects are collections of key-value pairs.
They allow us to group related data and functions (methods) together.
Each key (also called a property name) is a string, and its value can be of any data type.
*/

// Example of array storing multiple values
const rahatArray = ["ualiur", "rahat", "student", 25, 3.41];

// Object with descriptive key-value pairs
const rahatObj = {
  firstName: "ualiur",
  lastName: "rahat",
  profession: "student",
  age: 25,
  cgpa: 3.4,
  friends: ["ayon", "nasim", "ripon", "minul", "shohan"],
};
// Printing whole Object
console.log(rahatObj);

// ------------------------------------------
// Accessing object properties
// ------------------------------------------

//1. Using dot notation (most common and readable)
console.log(rahatObj.firstName);

//2. Using bracket notation (useful when keys are computed dynamically)
console.log(rahatObj["lastName"]);

//3. Using custom variable with square brackets.
const nameKey = "Name";

console.log(rahatObj["first" + nameKey]); // rahatObj["firstName"]
console.log(rahatObj["last" + nameKey]); // rahatObj["lastName"]

// ❌ This will throw syntax error - dot notation can't be used with dynamic strings
// console.log(rahatObj."last" + nameKey); ❌

// ------------------------------------------
// Adding new properties to an object
// ------------------------------------------

rahatObj.passion = "coding"; // Added using dot notation
rahatObj["hobbies"] = "movies"; // Added using bracket notation

console.log(rahatObj);

// ------------------------------------------
// Object in action with template literals
// ------------------------------------------

console.log(
  `Rahat has ${rahatObj.friends.length} friends, and his best friend is ${rahatObj.friends[0]}.`
);

/*
Output:
Rahat has 4 friends, and his best friend is ayon.
*/

// ==========================================
// END OF OBJECT BASICS
// ==========================================
