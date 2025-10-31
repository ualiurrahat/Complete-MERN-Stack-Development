'use strict';

// ---------------------- ES6 Enhanced Object Literals Example ----------------------

// ES6 introduces several improvements to object literal syntax.
// This file demonstrates 3 modern ES6 techniques for writing cleaner object definitions.

// ---------------------- ES6 Syntax (Way 3): Computed Property Names ----------------------

// ✅ Create dynamic keys for object properties using computed property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    // Equivalent to 'thu'
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    // Equivalent to 'fri'
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    // Equivalent to 'sat'
    open: 0, // Open 24 hours
    close: 24,
  },
};

// ---------------------- Restaurant Object ----------------------

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ---------------------- ES6 Syntax (Way 1): Object Property Shorthand ----------------------
  // ✅ Add an object as a property by just referencing its variable name
  // Equivalent to: openingHours: openingHours
  openingHours,

  // ---------------------- ES6 Syntax (Way 2): Method Shorthand ----------------------
  // ✅ Define object methods without using the `function` keyword

  /**
   * Orders a starter and a main dish by their indexes.
   */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * Handles delivery orders using object destructuring with default values.
   */
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  /**
   * Prepares a custom pasta dish with 3 ingredients.
   */
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  /**
   * Prepares a pizza with one required ingredient and optional extras.
   */
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ---------------------- Console Logs for Demo ----------------------

console.log(weekdays);
console.log(openingHours);
console.log(restaurant);
