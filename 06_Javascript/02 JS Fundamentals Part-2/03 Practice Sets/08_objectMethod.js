/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
*/
const myCountry = {
  country: "Bangladesh",
  capital: "Dhaka",
  language: "Bangla",
  population: 200,
  neighbours: ["India", "Myanman", "Bhutan", "Nepal", "Pakistan"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // NOTE: always use strict equal operator.
  },
};

console.log(myCountry); // here, isIsland property is not there, since checkIsland() has not been executed yet.
console.log(myCountry.describe());

myCountry.checkIsland();
console.log(myCountry); // isIland property is added in object myCountry as we invoked checkIsland() in the previous line.
