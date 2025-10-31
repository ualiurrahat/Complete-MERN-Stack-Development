'use strict';

// ---------------------- Map in JavaScript ----------------------
// A Map is a data structure in JavaScript that holds key-value pairs
// Similar to objects, but with the following advantages:
// ✅ Keys can be of any type — strings, numbers, arrays, objects, DOM elements
// ✅ Maintains the insertion order of elements
// ✅ Provides better performance in certain scenarios

// ---------------------- Creating a Map ----------------------
const rest = new Map();

// ✅ .set(key, value) → Adds key-value pairs to the map
// This method returns the map itself, allowing method chaining
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // Set { … }

// ✅ Chaining multiple .set() calls
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// ---------------------- Accessing Values ----------------------
// ✅ .get(key) → Retrieve value using the key
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get(1)); // Firenze, Italy

// 🧠 Power of Map: Using a boolean expression as a key
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// Explanation: The expression evaluates to a boolean (true/false)
// That boolean is used as a key to access the corresponding value

// ❗Note: Although this is valid usage, it can hurt code readability
// and is not recommended in real-world production code

// ---------------------- Useful Map Methods ----------------------
console.log(rest.has('categories')); // true

// ✅ .delete(key) → Deletes a key-value pair
rest.delete(2);

// ✅ .clear() → Removes all entries from the map
// rest.clear(); // Uncomment to clear map

// ---------------------- Using Complex Keys in Map ----------------------

// ❌ Incorrect: Using array literal as a key
// rest.set([1, 2], 'check');
// console.log(rest.get([1, 2])); // undefined!
// Why? Because the two [1, 2] arrays are different objects in memory

// ✅ Correct: Store array in variable first
const arr = [1, 2];
rest.set(arr, 'Test'); // Now arr and key refer to same memory
console.log(rest.get(arr)); // Test ✅

// ✅ You can even use DOM elements as keys in Map
// rest.set(document.querySelector('h1'), 'Heading');

// ✅ .size → Returns number of elements in the map
console.log(rest.size); // Number of key-value pairs

// ✅ Final Map structure printed
console.log(rest);

/*
🔹 Summary:
- Maps allow flexible key types
- Good for dynamically keyed data
- Useful when insertion order and key type flexibility matter
*/
