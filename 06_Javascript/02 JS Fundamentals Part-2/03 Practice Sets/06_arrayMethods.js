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
