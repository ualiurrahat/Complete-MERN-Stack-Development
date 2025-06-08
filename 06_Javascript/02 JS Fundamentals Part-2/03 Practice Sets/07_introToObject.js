/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
  country: "Bangladesh",
  capital: "Dhaka",
  language: "Bangla",
  population: 200,
  neighbours: ["India", "Myanman", "Bhutan", "Nepal", "Pakistan"],
};

console.log(myCountry);

/*
LECTURE: Dot vs. Bracket Notation
1. Using the object, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation.
*/
const str = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(str);

myCountry.population += 2;
myCountry["population"] -= 2;
console.log(myCountry.population);
