'use strict';

// ---------------------- Restaurant Object Definition ----------------------

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  /**
   * Returns a starter and main dish based on their index.
   * @param {number} starterIndex - Index for starterMenu
   * @param {number} mainIndex - Index for mainMenu
   * @returns {string[]} - Array with selected starter and main
   */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * Processes a delivery order using object destructuring with defaults.
   * @param {Object} options - Order details
   */
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

  /**
   * Orders a pasta dish with 3 ingredients.
   */
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  /**
   * Orders a pizza with one main and optional additional ingredients.
   */
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ---------------------- for-of Loop: Iterate Through Menu ----------------------

// Create a combined menu from starter and main menu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// ✅ Basic for-of loop to print each item in the menu
for (const item of menu) {
  console.log(item);
}

// NOTE: for-of loops support `break` and `continue`, unlike forEach

// ---------------------- for-of with .entries(): Indexed Iteration ----------------------

// ✅ Use .entries() to loop with both index and value
// The .entries() method returns an iterator where each element is [index, element]
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// You can inspect what .entries() returns if needed:
// console.log([...menu.entries()]);
