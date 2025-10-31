'use strict';
/*Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
 document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
*/

//  solve("underscore_case",
// "first_name",
// "Some_Variable",
//  "calculate_AGE",
// "delayed_departure");
// output
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// my solution:
const names = [
  'underscore_case',
  'first_name',
  'some_Variable',
  '  calculate_AGE',
  'delayed_departure',
];
function solve(names) {
  const answers = [];
  for (let i = 0; i < names.length; i++) {
    const currName = names[i].toLowerCase().trim();
    // console.log(currName);

    let index = currName.indexOf('_');
    // console.log(index);
    let word =
      currName.slice(0, index) +
      currName[index + 1].toUpperCase() +
      currName.slice(index + 2);
    word = word.padEnd(20);
    word = word + '✅'.repeat(i + 1);
    console.log(word);
  }
}
solve(names);

// instructor solutions is given in script.js file
