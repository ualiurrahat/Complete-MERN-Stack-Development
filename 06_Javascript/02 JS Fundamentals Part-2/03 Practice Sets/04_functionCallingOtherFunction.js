/*LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const describePopulation = (country, population) => {
  const percentageOfPopulation = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${percentageOfPopulation.toFixed(
    2
  )}% of the world`;
};

const chinaData = describePopulation("China", 1441);
const bangladeshData = describePopulation("Bangladesh", 200);
const finlandData = describePopulation("Finland", 6);

console.log(chinaData);
console.log(bangladeshData);
console.log(finlandData);
