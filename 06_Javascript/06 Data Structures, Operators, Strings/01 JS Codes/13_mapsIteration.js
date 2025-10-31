'use strict';

// ---------------------- Map Iteration and Use in a Quiz App ----------------------

// ---------------------- Dynamic Property Names in Objects ----------------------
// Define an array of weekdays to be used dynamically as keys
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Construct an object with computed property names
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours on Saturday
    close: 24,
  },
};

// ---------------------- Creating a Quiz Map ----------------------
// A Map can also be created directly using an array of key-value pairs
// Each entry: [key, value]
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// ---------------------- Object.entries() to Map ----------------------
// Object.entries() gives us an array of [key, value] pairs
// Very similar to how a Map structure looks
console.log(Object.entries(openingHours));

// ✅ We can convert an object to a map using Map constructor + Object.entries()
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// ---------------------- Quiz Simulation ----------------------
console.log(question.get('question'));

// Loop through the question map to show numeric answer options
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// Simulated user answer
// In real apps, you might use: const answer = Number(prompt('Your answer'));
const answer = 3;

// Check if answer is correct using Map logic
console.log(question.get(question.get('correct') === answer));
// Explanation:
// - question.get('correct') → returns 3
// - comparison: 3 === answer → true
// - question.get(true) → 'Correct 🎉'

// ---------------------- Convert Map to Arrays ----------------------
// Maps are iterable, and we can spread them into arrays
console.log([...question]); // Array of [key, value] pairs
console.log([...question.keys()]); // All keys in array form
console.log([...question.values()]); // All values in array form

/*
🔹 Summary:
- Map allows any data type as keys (numbers, strings, booleans, etc.)
- Very useful for dynamic structured data like quizzes or configuration
- Easily iterable with for..of and destructuring
- Can convert objects <-> maps using Object.entries()
- Clean use of conditional rendering and logic with boolean keys
*/
