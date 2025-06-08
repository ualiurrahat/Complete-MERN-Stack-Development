// Regular for loop: Best used when you know the number of iterations
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Object containing CGPA values
let result = {
  minul: 3.14,
  naeem: 3.76,
  rahat: 3.41,
  tufayel: 3.45,
};

// for-in loop: Iterates over enumerable property keys of an object
// Not recommended for arrays when order matters
for (let a in result) {
  console.log("CGPA of " + a + " is " + result[a]);
}

/**
 * ⚠️ Tip:
 * Avoid using `for-in` on arrays when the order of iteration is important,
 * as key order is not guaranteed across environments.
 * Instead use: regular for loop, for-of, or Array.forEach().
 */

// for-of loop: Iterates over values of an iterable (like array, string, etc.)
for (let ch of "rahat") {
  console.log(ch);
}

// Comparing for-in vs for-of on a string
let str = "rahat";

console.log("Using for-in loop on string: rahat");
// for-in returns index (key)
for (let a in str) {
  console.log(a, str[a]);
}

console.log("Using for-of loop on string: rahat");
// for-of returns character (value)
for (let b of str) {
  console.log(b);
}
