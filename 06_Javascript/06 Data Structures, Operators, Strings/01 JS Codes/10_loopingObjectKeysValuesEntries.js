'use strict';

// ---------------------- Dynamic Object Property Creation ----------------------

// Weekday array to dynamically assign keys to `openingHours` object
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Creating `openingHours` using computed property names (ES6 feature)
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
    open: 0, // Open 24 hours
    close: 24,
  },
};

// ---------------------- Restaurant Object with Modern ES6 Features ----------------------

// A modernized restaurant object using:
// ✅ ES6 property shorthand
// ✅ ES6 method shorthand
// ✅ Spread, rest, destructuring, default parameters, etc.
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ✅ ES6 Property Shorthand (openingHours object defined above is directly included)
  openingHours,

  // ✅ ES6 Method Syntax - Order from menu by index
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ✅ ES6 Method Syntax - Destructured object with default values as parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // ✅ Method to simulate ordering pasta with 3 ingredients
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // ✅ Method using REST parameter for variable number of ingredients
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // Logs the main ingredient
    console.log(otherIngredients); // Logs an array of the rest
  },
};

// ---------------------- Looping Over Objects ----------------------
// JavaScript provides multiple static methods to iterate over object contents:
// - Object.keys(obj) → returns an array of property names
// - Object.values(obj) → returns an array of property values
// - Object.entries(obj) → returns an array of [key, value] pairs

// ---------------------- 1. Looping Over Object Property Names ----------------------
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

// Constructing a readable string about opening days
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); // Output: We are open on 3 days: thu, fri, sat,

// ---------------------- 2. Looping Over Object Property Values ----------------------
const values = Object.values(openingHours);
console.log(values);
// Output: array of objects → [{open: 12, close: 22}, {...}, {...}]

// ---------------------- 3. Looping Over Entries (Both Keys and Values) ----------------------
const entries = Object.entries(openingHours);
// Each entry is a [key, value] pair, where value itself is an object

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Output:
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24

// ---------------------- Theory Note ----------------------
/*
  Object.keys(obj)    → Returns array of keys (property names)
  Object.values(obj)  → Returns array of values
  Object.entries(obj) → Returns array of [key, value] pairs

  These are helpful when:
  - Looping through object properties dynamically
  - Generating readable output
  - Performing destructuring inside loops (as done above)
*/
