'use strict';

// ---------------------- Restaurant Object Definition ----------------------

// A restaurant object containing its details, menu, hours, and ordering functionality
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Nested object containing opening hours by day
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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Method to return a starter and main course based on provided indices
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ---------------------- Object Destructuring in Function Parameters ----------------------

  // Method using object destructuring in its parameter with default values
  // If some properties are missing when called, defaults will be used
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
};

// ---------------------- Basic Object Destructuring ----------------------

// Destructuring object properties into variables with the same name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// ---------------------- Renaming During Destructuring ----------------------

// Destructuring while assigning to custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// ---------------------- Destructuring with Default Values ----------------------

// Destructuring properties that may not exist in the object
// 'menu' does not exist, so the default is used (empty array)
// 'starterMenu' does exist, so it takes the actual value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// ---------------------- Mutating Variables While Destructuring ----------------------

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// When destructuring outside of a declaration, wrap in parentheses
({ a, b } = obj); // Otherwise, JS treats the `{}` as a block
console.log(a, b);

// ---------------------- Nested Object Destructuring ----------------------

// Destructuring the 'sat' object from 'openingHours'
const { sat } = openingHours;
console.log(sat);

// Extracting nested properties ('open' and 'close') from the 'sat' object
const {
  sat: { open, close },
} = openingHours;
console.log(open, close);

// Destructuring 'open' and 'close' from the 'fri' object with custom variable names
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// ---------------------- Invoking Method with Destructured Arguments ----------------------

// Full delivery details passed in; all properties explicitly defined
restaurant.orderDelivery({
  time: '22:30',
  address: 'GopalGanj,8700',
  mainIndex: 2,
  starterIndex: 2,
});

// Partial details passed in; defaults will be used for missing values
restaurant.orderDelivery({
  address: 'GopalGanj,8700',
  starterIndex: 1,
});
