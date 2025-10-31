'use strict';

// Define a restaurant object with its details and a method to place an order
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Method to return an array containing a starter and a main dish based on their indices
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ---------------------- Array Destructuring ----------------------

// Example of manually accessing array elements
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Same result using array destructuring (cleaner and shorter)
const [x, y, z] = arr;
console.log(x, y, z);

// Destructuring does not modify the original array
console.log(arr);

// ---------------------- Object Property Destructuring ----------------------

// Extracting the first and third items from the 'categories' array
// Skipping the second item by leaving its position empty
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ---------------------- Swapping Variables Using Destructuring ----------------------

// Traditional way of swapping using a temporary variable (commented out for comparison)
// const temp = main;
// main = secondary;
// secondary = temp;

// Destructuring assignment: a modern and concise way to swap variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// ---------------------- Destructuring Function Return Values ----------------------

// Destructuring the result of the `order` function into individual variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// ---------------------- Nested Array Destructuring ----------------------

// Example of a nested array
const nested = [2, 4, [5, 6]];

// Destructuring to extract nested elements directly
const [i, , [j, k]] = nested;
console.log(i, j, k);

// ---------------------- Destructuring with Default Values ----------------------

// Assigning default values in case some elements are undefined
// Useful in real-world scenarios like handling API responses
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
