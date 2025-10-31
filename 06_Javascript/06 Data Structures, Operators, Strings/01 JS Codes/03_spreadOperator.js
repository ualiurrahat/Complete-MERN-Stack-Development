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
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24, // Open 24 hours on Saturday
    },
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
};

// ---------------------- Spread Operator with Arrays ----------------------
// Spread Operator separates all the elements within an array
// but it does not create new variable
// instead takes the elements individually by separting them using commas
// Traditional (non-optimal) way of combining arrays manually
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using spread operator to efficiently build a new array
const newArr = [1, 2, ...arr];
// NOTE: spread does not mutate the original array
console.log(arr);

// Printing individual elements using spread
console.log(...newArr); // Output: 1 2 7 8 9
console.log(1, 2, 7, 8, 9); // Equivalent output

// ---------------------- Adding and Combining Menus ----------------------

// Add new item to menu using spread
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Spread operator is used for mainly these 2 jobs:

// 1. Create a shallow copy of an array
// here, creating copy of the main menu of restaurant object.
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Join 2 arrays
//Here,joining starter and main menu arrays into a single menu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// ---------------------- Spread Operator with Iterables ----------------------
// Iterables in JS: arrays, strings, maps, sets.
// ❌ Objects are not iterable.

// Using spread operator on strings.
const str = 'rahat';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['r', 'a', 'h', 'a', 't', ' ', 'S.']
console.log(...str); // r a h a t

// ❌NOTE:  Spread cannot be used in template literals
// console.log(`${...str} Khan`); // SyntaxError

// Spread operator can also be used for:
// 1. either to build new array / separate array element by commas
// 2. use as function arguments.
// ---------------------- 1. Using Spread in Function Calls ----------------------

// Real-world scenario: spreading ingredients into function arguments
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
  'nanruti',
  'grill',
  'murgi',
];
console.log(ingredients);

// 2. Pass ingredients individually using spread operator
restaurant.orderPasta(...ingredients);

// ---------------------- Using Spread with Objects ----------------------

// Create a new object by combining properties from another object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Create a copy and update a specific field
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

// Check: copy is updated, original is unchanged
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
