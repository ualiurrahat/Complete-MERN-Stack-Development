'use strict';

// ---------------------- ES6 Enhanced Object Literals & Computed Properties ----------------------

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ✅ ES6 Property Shorthand
  openingHours,

  // ✅ ES6 Method Syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ---------------------- Optional Chaining (?.) ----------------------
// Optional chaining prevents runtime errors when accessing deeply nested properties or methods that may not exist.

// ❌ This will throw an error because 'mon' does not exist:
// console.log(restaurant.openingHours.mon.open);

// ✅ Traditional Way 1: Manual check
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// ✅ Traditional Way 2: Logical AND short-circuiting
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// ✅ Best Way: Optional Chaining
console.log(restaurant.openingHours.mon?.open); // returns undefined without error
console.log(restaurant.openingHours?.mon?.open); // double-checking both properties safely

// ---------------------- Real-World Example: Looping with Optional Chaining ----------------------

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // Optional chaining + Nullish coalescing to handle "closed" case
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // NOTE: Use bracket notation for dynamic property access (not dot)
  console.log(`On ${day}, we open at ${open}`);
}

// ---------------------- Optional Chaining on Methods ----------------------

// ✅ Check if 'order' method exists before calling
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// ❌ 'orderRisotto' does not exist; fallback message returned
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ---------------------- Optional Chaining on Arrays ----------------------

const users = [{ name: 'Rahat', email: 'helloRahat@.io' }];
// const users = []; // Uncomment this to test the fallback behavior

// ✅ Safe access to nested property using optional chaining
console.log(users[0]?.name ?? 'User array empty');

// Traditional equivalent:
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('user array empty');
}
