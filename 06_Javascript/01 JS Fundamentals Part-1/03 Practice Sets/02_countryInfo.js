/*
Question 01: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
   assign their values according to your own country (population in millions)
2. Log their values to the console
*/

// ✅ Question 01 Solution
console.log("Solution To Question 01:\n");

// Declare the name of the country
let country = "Bangladesh";

// Declare the continent the country belongs to
const continent = "Asia";

// Declare the population in millions (approx. as of 2025)
let population = 180;

// Output the values to the console
console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population (in millions):", population);

/*
Question 02: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
   country. The variable should hold a Boolean value. Also declare a variable
   'language', but don't assign it any value yet.
2. Log the types of 'isIsland', 'population', 'country' and 'language'
   to the console
*/

// ✅ Question 02 Solution
console.log("\nSolution To Question 02:\n");

// Declare a Boolean variable representing whether the country is an island
let isIsland = false;

// Declare a variable for language without assigning a value yet
let language;

// Log the types of the variables using typeof operator
console.log("Type of population:", typeof population); // number
console.log("Type of country:", typeof country); // string
console.log("Type of isIsland:", typeof isIsland); // boolean
console.log("Type of language:", typeof language); // undefined

/*
Question 03: let, const, var
1. Set the value of 'language' to the language spoken where you live (some 
   countries have multiple languages, but just choose one).
2. Think about which variables should be const variables (which values will never 
   change, and which might change?). Then, change these variables to const.
3. Try to change one of the const variables now, and observe what happens.
*/

// ✅ Question 03 Solution
console.log("\nSolution To Question 03:\n");

// Assign the language spoken in the country
language = "Bangla";

// ❌ Attempting to reassign a const variable will throw an error
// continent = "Africa"; // Uncommenting this line will cause an error: Assignment to constant variable

console.log("Language:", language);
/*
Question 04: Basic Operators
1. If your country split in half, and each half would contain half the population, 
   then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
   Finland?
4. The average population of a country is 33 million people. Does your country 
   have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
   which contains a string with this format: 
   'Portugal is in Europe, and its 11 million people speak portuguese'
*/
// ✅ Question 04 Solution
console.log("\nSolution To Question 04:\n");

// 1. Calculate and log half the population
const halfPopulation = population / 2;
console.log("Population if split in half: ", halfPopulation);

// 2. Increase population by 1 and log the result
population++;
console.log("Population after incrementing by 1: ", population);

// 3. Compare with Finland's population
const finlandPopulation = 6;
const hasMorePopulationThanFinland = population > finlandPopulation;
console.log(
  "Does Bangladesh have more people than Finland?",
  hasMorePopulationThanFinland
);

// 4. Compare with average country population (33 million)
const averagePopulation = 33;
const isBelowAverage = population < averagePopulation;
console.log(
  "Does Bangladesh has less people than average country?",
  isBelowAverage
);

// 5. Create a descriptive sentence using the exising variable

let description =
  country +
  "is in " +
  continent +
  ", and its " +
  population +
  " million peopel speak " +
  language;
console.log("country description using string: ", description);

/* Question 05: String and Template literals
1. Recreate the 'description' variable from the last assignment, this time 
   using the template literal syntax
*/

console.log("\nSolution To Question 05:\n");
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log("Country description using template literals: ", description);

/*
Question 06: If/else statement
1. If your country's population is greater than 33 million, log a string like this to the 
   console: "Portugal's population is above average". Otherwise, log a string like 
   "Portugal's population is 22 million below average" (the 22 is the average of 33 
   minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
   130. See the different results, and set the population back to original
*/
// ✅ Question 06 Solution
console.log("\nSolution To Question 06:\n");

// Store original population to restore later
const originalPopulation = population;

// 1. Check population compared to average and log appropriate message
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  const difference = averagePopulation - population;
  console.log(`${country}'s population is ${difference} million below average`);
}

// 2. Temporarily set population to 13 and evaluate again.
population = 13;
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}
// Temporarily set population to 130 and evaluate again
population = 130;
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}

// Restore the original population value
population = originalPopulation;
/*
Question 07: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
   '9' - '5';
   '19' - '13' + '17';
   '19' - '13' + 17;
   '123' < 57;
   5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/

// ✅ Question 07 Solution
console.log("\nSolution To Question 07:\n");

// Prediction:
// '9' - '5'        => 4   (both are strings but coerced to numbers during subtraction)
// '19' - '13' + '17' => "617" (19 - 13 = 6; then 6 + '17' => "617" due to string concatenation)
// '19' - '13' + 17  => 23  (19 - 13 = 6; then 6 + 17 = 23)
// '123' < 57       => false (string '123' coerced to number 123; 123 < 57 is false)
// 5 + 6 + '4' + 9 - 4 - 2
// => 5 + 6 = 11 → 11 + '4' = "114" (string)
// → "114" + 9 = "1149" (still string)
// → "1149" - 4 = 1145 (converted to number)
// → 1145 - 2 = 1143

// Now execute and log actual results
console.log("'9' - '5' =", "9" - "5"); // 4
console.log("'19' - '13' + '17' =", "19" - "13" + "17"); // "617"
console.log("'19' - '13' + 17 =", "19" - "13" + 17); // 23
console.log("'123' < 57 =", "123" < 57); // false
console.log("5 + 6 + '4' + 9 - 4 - 2 =", 5 + 6 + "4" + 9 - 4 - 2); // 1143
/*
Question 08: Equality Operators and Type Conversion
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
   prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. 
   Notice what happens when there is exactly 1 border! Why is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type conversion in this situation
*/
/*
// ✅ Question 08 Solution
console.log("\nSolution To Question 08:\n");

// prompt returns a string, even if the user enters a number
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

// convert to number to avoid type coercion issues
numNeighbours = Number(numNeighbours);

// check the value with strict equality operator
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
/*
🧠 Explanation:
- prompt() returns a string by default.
- If we use == (loose equality), JavaScript coerces types (e.g., '1' == 1 is true).
- But === checks for both value and type (e.g., '1' !== 1).
- Converting user input to Number ensures that we compare numbers correctly.
🔒 Best Practice: Always use === for predictable behavior, and convert user input to expected types.
*/
/*
Question 10: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
   country that speaks English, has less than 50 million people and is not an island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. 
   If not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. 
   So go back and temporarily change some variables to make the condition true
*/
// ✅ Question 10 Solution
console.log("\nSolution To Question 10:\n");

// check all of Sarah's conditions using Logical And (&&)
if (language === "English" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :( `);
}

// update variables for test(optional: temporarily override to test positive case)
language = "English"; // Temporarily assuming English is spoken
population = 30; // Less than 50 million
isIsland = false; // Not an island

// check again all of Sarah's conditions using Logical And (&&)
if (language === "English" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :( `);
}
/*
Question 11: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
   - chinese or mandarin: 'MOST number of native speakers!'
   - spanish: '2nd place in number of native speakers'
   - english: '3rd place'
   - hindi: 'Number 4'
   - arabic: '5th most spoken language'
   - for all others: 'Great language too :D'
*/

// ✅ Question 11 Solution
console.log("\nSolution To Question 11:\n");

switch (language.toLowerCase()) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
    break;
}
/*
🧠 Explanation:
- We use `language.toLowerCase()` to make the comparison case-insensitive.
- `switch` allows us to match exact cases and group multiple values (like chinese & mandarin).
- `default` handles any case not explicitly matched.
- Each `case` is followed by a `break` to prevent fall-through.
*/
/*
Question 12: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
   to log a string like this: 'Portugal's population is above average'. 
   Otherwise: 'Portugal's population is below average'.
2. Temporarily change the population to 13 and 130 to test both outcomes.
*/

// ✅ Question 12 Solution
console.log("\nSolution To Question 12:\n");
// Temporarily change population for testing
population = 13;
// population = 130;
// population = 180; // original value

// Use ternary operator to conditionally form the sentence
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
