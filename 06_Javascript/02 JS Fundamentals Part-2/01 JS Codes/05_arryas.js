/**
 * Introduces the concept of arrays in JavaScript.
 * Demonstrates array creation, element access, data types, and immutability behavior.
 */

// Creating an array with multiple data types
let arr = ["rahat", 24, "EEE", false, null];
console.log(arr); // Full array
console.log(arr[0]); // First element: "rahat"
console.log(arr[20]); //  undefined->  the element does not exist

// NOTE: array is treated as objects but individual elements are of their own type
console.log(typeof arr); // "object"
console.log(typeof arr[0]); // Type of individual element: "string"

// Length of array
console.log(arr.length);

// Looping through array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Alternative way to declare array using Array constructor
let needs = new Array("degree", "job", "money", "girlfriend");
console.log(needs);

// NOTE: in JS, primitive data types are immutable
// but array is not primitive type. so its data is mutable
// Array mutability
const friends = ["naeem", "sazzad", "sharif", "nasim", "ayon"];
console.log(friends);

// Modifying array contents (allowed even if declared with const)
friends[0] = "shohan";
console.log(friends);

// Reassignment not allowed with const arrays
// friends = ["rahim", "karim"] // Error: Assignment to constant variable

// IMMUTABLE V/S MUTABLE
/*Immutable means their value cannot be changed once created.
Examples: string, number, boolean, null, undefined, symbol, bigint. Primtive data types are immutable.

*/

let str = "hello";
str[0] = "H"; // Trying to change first character
console.log(str); // "hello" — no change, strings are immutable

let num = 10; // num points to the value 10 (which is immutable)
num = num + 5; // num now points to a new value 15

console.log(num); // 15

// Mutable means you can change their contents/properties without creating a new object.

let array = [1, 2, 3];
array[0] = 10; // Modify the array in place
console.log(array); // [10, 2, 3]

let obj = { name: "Rahat" };
obj.name = "Ali"; // Change property of the same object
console.log(obj); // { name: "Ali" }

/*
Summary:
--------
- Arrays in JS can hold multiple data types.
- Arrays are mutable, but reassignment is restricted if declared with const.
- Always check boundaries when accessing indices to avoid undefined values.
*/
