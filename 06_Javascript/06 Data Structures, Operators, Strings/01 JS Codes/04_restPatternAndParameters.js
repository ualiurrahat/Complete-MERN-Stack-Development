'use strict';

// ---------------------- Restaurant Object Definition ----------------------

// A restaurant object with menus, hours, and multiple methods to simulate ordering
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Opening hours for specific days
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }, // Open 24 hours on Saturday
  },

  // Returns starter and main dish based on index
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Takes an object and destructures it directly in the parameters with defaults
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // Accepts 3 ingredients and prints a formatted pasta message
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // Accepts main ingredient and rest of the ingredients
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ---------------------- Spread vs. Rest Operator ----------------------

// REST does the opposite of SPREAD
// - Spread separates elements of an array
// - Rest combines the remaining elements into an array

// Rest Pattern and Parameters are used in:
// 1) Destructuring arrays/objects
// 2) Function parameters

// ---------------------- Spread Example (Array) ----------------------
// SPREAD: Because it is on the RIGHT side of the assignment (=)
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// ---------------------- Rest Example (Array Destructuring) ----------------------
// REST: Because it is on the LEFT side of the assignment (=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // a = 1, b = 2, others = [3, 4, 5]

// ---------------------- Rest Pattern for Menu Destructuring ----------------------
// Spread (right side): combines two arrays first
// Rest (left side): groups remaining elements into array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// ❗NOTE: REST operator must always be at the last position in a destructuring assignment
// ❌ This will throw error: const [a, b, ...rest, last]; <-- Not allowed!

// ---------------------- Rest Pattern with Objects ----------------------
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // object without Saturday

// ---------------------- Rest Parameters in Functions ----------------------

// A function using REST parameter to accept variable number of arguments
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers); // prints array of arguments
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

// Function calls with different number of arguments
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// Example with spread + rest
const x = [23, 5, 7];
add(...x);

// Explanation:
// add(...x) = add(23, 5, 7)
// Inside function: REST parameter collects these into [23, 5, 7]

// ---------------------- Using Rest in Real Function ----------------------
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// Output:
// mushrooms
// ['onion', 'olives', 'spinach']

restaurant.orderPizza('mushrooms');
// Output:
// mushrooms
// []

// ---------------------- Theory Summary ----------------------
/* 
  The REST and SPREAD operators both look the same (...),
  but behave differently based on where they’re used.

  ✅ SPREAD:
     - Used on the RIGHT side of '=' (assignment)
     - Expands iterable (arrays, strings, etc.)
     - Use when we would otherwise write values separated by commas
     - Used in array construction, function calls, and object literals

  ✅ REST:
     - Used on the LEFT side of '=' during destructuring
     - Collects remaining elements into an array or object
     - Use when we would otherwise write variable names separated by commas
     - Used in array/object destructuring and function parameters
*/
