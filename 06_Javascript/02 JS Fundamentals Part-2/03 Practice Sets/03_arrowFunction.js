/*LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
*/

const percentageOfWorld = (population) => {
  return (population / 7900) * 100;
};

// Calling the function with 3 sample country populations
const chinaPercentage1 = percentageOfWorld(1441); // China
const indiaPercentage1 = percentageOfWorld(1410); // India
const usaPercentage1 = percentageOfWorld(331); // USA

// Logging the results
console.log(`China: ${Number(chinaPercentage1.toFixed(2))}%`);
console.log(`India: ${Number(indiaPercentage1.toFixed(2))}%`);
console.log(`USA: ${Number(usaPercentage1.toFixed(2))}%`);
