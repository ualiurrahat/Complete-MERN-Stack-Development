// -----------------------------------------------------
// File: functionCallingOtherFunction.js
// Description: Demonstrates how one function can call another function
//              to perform modular, reusable operations in JavaScript.
// -----------------------------------------------------

/**
 * Function: cutFruitPieces
 * Purpose : Takes the number of fruits as input and returns the number of pieces
 *           after cutting each fruit into 4 pieces.
 * @param {number} fruit - Number of fruits to cut
 * @returns {number} - Total number of fruit pieces
 */
function cutFruitPieces(fruit) {
  return fruit * 4;
}

/**
 * Function: fruitProcessor
 * Purpose : Demonstrates function calling another function.
 *           Uses `cutFruitPieces()` to process apples and oranges, then
 *           returns a string describing the juice contents.
 * @param {number} apples - Number of apples
 * @param {number} oranges - Number of oranges
 * @returns {string} - Juice description with fruit pieces
 */
function fruitProcessor(apples, oranges) {
  // Cut apples and oranges into pieces using another function
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  // Combine the results into a juice description
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

  return juice;
}

// Call the fruitProcessor function and print the result
console.log(fruitProcessor(2, 3));
