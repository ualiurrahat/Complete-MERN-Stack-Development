/*LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/
// -------------------------------------------------------------
// LECTURE: Introduction to Arrays
// Description: Create and work with population arrays and compute
// their percentage of the world population using a reusable function
// -------------------------------------------------------------

// 1. Function to calculate percentage of world population
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// 2. Create an array of populations for 4 countries (in millions)
const populations = [1441, 1410, 331, 67]; // China, India, USA, UK

// 3. Check if the array has 4 elements
console.log(populations.length === 4); // true

// 4. Create an array of percentages using the function percentageOfWorld1
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

// 5. Log the result
console.log("Population array:", populations);
console.log(
  "Percentage array:",
  percentages.map((p) => Number(p.toFixed(2)))
);

/*LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/
// 1. an array for neighbouring countries of Bangladesh
const neighbours = ["India", "Myanman", "Bhutan", "Nepal", "Pakistan"];
console.log(neighbours);
// 2. add new country 'Utopia' at the end of neighbours
neighbours.push("Utopia");
console.log(neighbours);
// 3. remove country 'Utopia' from neighbours
neighbours.pop();
console.log(neighbours);

// 4. if 'Germany' is not a neighbour, print 'Probably not a central European country'
if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country`);
}

// 5. Change the name of an existing neighbour country with the help of index
const index = neighbours.indexOf("India");
neighbours[index] = "Republic of India";
console.log(neighbours);
