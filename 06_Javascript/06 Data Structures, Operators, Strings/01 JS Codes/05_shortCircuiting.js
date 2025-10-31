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
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // Accepts main ingredient and rest of the ingredients using REST parameter
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ---------------------- Short Circuiting (|| and &&) ----------------------

// ---------------------- Logical OR (||) Operator ----------------------

// OR can use any data type and return any data type
// Short-circuiting OR (||): returns the first truthy value or the last value if all are falsy
// If the first operand is truthy, JS does not evaluate the second operand (short-circuits)

console.log('---- Logical OR (||) Operator ----');

console.log(3 || 'Nasim'); // 3 → truthy
console.log('' || 'Nadim'); // 'Nadim' → first truthy
console.log(true || 0); // true
console.log(undefined || null); // null → both falsy, returns last

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// Hello is the first truthy value → returned due to short-circuiting

// ---------------------- Falsy Pitfall Example ----------------------

// Suppose numGuests = 0 (a falsy value)
restaurant.numGuests = 0;

let guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // result: 10
// 0 is falsy, so fallback value is taken. But this is not desirable if 0 is the real value
console.log(guests1);

// ---------------------- Nullish Coalescing Operator (??) ----------------------

// NULLISH: only considers `null` and `undefined` as absent values
// It treats 0 and '' (empty string) as valid, not falsy
guests1 = restaurant.numGuests ?? 10; // result: 0
console.log(guests1);

// || fallback (incorrect for falsy but valid values like 0)
const guests2 = restaurant.numGuests || 10; // result: 10 (wrong)
console.log(guests2);

// ---------------------- Logical AND (&&) Operator ----------------------

// AND operator works in the opposite way of OR
// Short-circuiting AND (&&): returns the first falsy value
// If all operands are truthy, returns the last value

console.log('---- Logical AND (&&) Operator ----');

console.log(0 && 'Jonas'); // 0 → falsy, returns immediately
console.log(7 && 'Jonas'); // "Jonas" → all truthy

console.log('Hello' && 23 && null && 'Jonas');
// null is first falsy, returned immediately

// ---------------------- Practical Usage of Short-Circuiting ----------------------

// Traditional way: checking if a method exists before calling it
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Better: using && short-circuit
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ---------------------- Logical Operators Summary ----------------------
/*
  OR (||):
  - Returns the first truthy value among operands.
  - If all are falsy, returns the last value.

  AND (&&):
  - Returns the first falsy value among operands.
  - If all are truthy, returns the last value.

  💡 Both are commonly used to provide default values or conditionally execute code.
*/
