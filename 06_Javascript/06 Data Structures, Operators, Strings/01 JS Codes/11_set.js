'use strict';

// ---------------------- Set in JavaScript ----------------------
// A Set is a built-in JavaScript data structure that stores only **unique values**
// Sets can store mixed types, but do NOT maintain order, and do NOT support element access via index

// ---------------------- Creating a Set ----------------------
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// Although there are repeated entries, the Set stores only unique elements
console.log(ordersSet); // Output: Set(3) { 'Pasta', 'Pizza', 'Risotto' }

// When we pass a string, Set stores each character as a unique entry
console.log(new Set('rahat')); // Output: Set(5) { 'r', 'a', 'h', 't' }

// ---------------------- Set Properties & Methods ----------------------

// ✅ .size → Returns number of unique elements
console.log(ordersSet.size); // 3

// ✅ .has(value) → Checks if value exists in Set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// ✅ .add(value) → Adds a value (does nothing if already exists)
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // Duplicate, won’t be added

// ✅ .delete(value) → Removes a specific value
ordersSet.delete('Risotto');

// ❌ .clear() → Removes all values from the Set
// ordersSet.clear(); // Uncomment to empty the set

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

// ---------------------- Iterating Over a Set ----------------------
for (const order of ordersSet) {
  console.log(order); // Logs each unique order
}

// ---------------------- Use Cases of Sets ----------------------

// ✅ 1. Remove Duplicates from an Array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// Convert Set back to array using spread syntax
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

// You can also directly check the number of unique roles
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

// ✅ 2. Count Unique Characters in a String
console.log(new Set('ualiurrahat').size); // 7

// ✅ 3. Looping through unique characters in a string
for (const letter of new Set('ualiurrahat')) {
  console.log(letter);
}

// ---------------------- Summary ----------------------
/*
🔹 Set stores unique values only.
🔹 No duplicates, no index access, unordered.
🔹 Useful for filtering unique elements from arrays or strings.
🔹 Common methods: add, delete, has, size, clear.
*/
