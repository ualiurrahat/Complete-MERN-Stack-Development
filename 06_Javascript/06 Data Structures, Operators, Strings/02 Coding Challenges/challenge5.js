// Q1: what will be the following code will print.
console.log('solution to question 1: ............');
console.log('rahat"'.length);
// answer : not 7.

// Q2: explore the includes, startsWith() and endsWith() function of strings.
console.log('solution to question 2: ..............');
// includes(): checks whether a particular string exists or not in another string
let propose = 'I love you, Shithi';
console.log(propose.includes('Shithi')); // true, since Shithi exists
console.log(propose.includes('rahat')); // false since rahat doesn't exist

// startsWith(searchString)
// startsWith(searchString, startPosition)
let msg = "Hurry Up, it's already late";
console.log(msg.startsWith('Hur')); // true
console.log(msg.startsWith('hur')); // false, case sensitive
console.log(msg.startsWith('Hur', 0)); // means Hur starts with 0 index position
console.log(msg.startsWith('Hur', 5)); // false

// endsWith(searchString)
// endsWith(searchString,endPosition)
let str = 'Do you feel same for me?';
console.log(str.endsWith('me?'));
console.log(str.endsWith('feel'));

// Q3: write a program to convert a given string to lowercase.
console.log('solution for question 3: .................');
let goal = 'I Will be a   BILLIONNAIRE coder';
console.log(goal.toLowerCase());

// Q4: extract the amount from "Give me Taka 2000";
console.log('solution for question 4: .....................');
let input = 'Give me Taka 2000';
let amount = input.slice('Give me Taka '.length);
amount = Number.parseInt(amount);
console.log(amount, typeof amount);

// Q5: try to change the 4th character of a string.Were you able to do it?
console.log('solution for question 5: ...............');
let name = 'rahat';
console.log(name[0]);
name[0] = 'k';
// neither change the character nor shows error
// cause string is immutable
console.log(name);
