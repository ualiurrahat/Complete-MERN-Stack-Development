/*
Problem 2
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)
*/

// ------------------------------------------------------------
// Function Declaration version
// ------------------------------------------------------------

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Calling the function with 3 sample country populations
const chinaPercentage1 = percentageOfWorld1(1441); // China
const indiaPercentage1 = percentageOfWorld1(1410); // India
const usaPercentage1 = percentageOfWorld1(331); // USA

// Logging the results
console.log(`China: ${chinaPercentage1.toFixed(2)}%`);
console.log(`India: ${indiaPercentage1.toFixed(2)}%`);
console.log(`USA: ${usaPercentage1.toFixed(2)}%`);

// ------------------------------------------------------------
// Function Expression version
// ------------------------------------------------------------

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// Calling the function expression with same populations
const chinaPercentage2 = percentageOfWorld2(1441);
const indiaPercentage2 = percentageOfWorld2(1410);
const usaPercentage2 = percentageOfWorld2(331);

// Logging the results
console.log(`China (Expr): ${chinaPercentage2.toFixed(2)}%`);
console.log(`India (Expr): ${indiaPercentage2.toFixed(2)}%`);
console.log(`USA (Expr): ${usaPercentage2.toFixed(2)}%`);
