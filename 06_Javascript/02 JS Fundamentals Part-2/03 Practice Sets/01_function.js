/* 
Problem 1
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

// solution to the problem 1

console.log("Solution to the problem 1: ");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log("Solution to the problem 1: ");
const finlandInfo = describeCountry("Finland", 6, "Helsinki");
const bangladeshInfo = describeCountry("Bangladesh", 200, "Dhaka");
const pakistanInfo = describeCountry("Pakistan", 280, "Islamabad");
console.log(finlandInfo);
console.log(bangladeshInfo);
console.log(pakistanInfo);
console.log("---------------------------------");
