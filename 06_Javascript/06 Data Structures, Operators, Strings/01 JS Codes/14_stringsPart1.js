'use strict';
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
// get value of any index in a string.
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
// to get length of strings.
console.log(airline.length);
console.log('B737'.length);
// indexOf: to find index number of a character or a substring.
console.log(airline.indexOf('r'));
console.log(airline.indexOf('portugal'));
// lastIndexOf: to get last index of a character
console.log(airline.lastIndexOf('r'));

// slice(i): returns the substring starting from the ith index
console.log(airline.slice(4));
// slice(i,j): returns substring starting from i and excluding j
console.log(airline.slice(4, 7)); // airline's 4th,5h,6th indexed letters.

// from index 0 to the index where first empty space is written.
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// slice(-ve): start from last character of the string
// then move to the right side characters.(reverse traversing.)
console.log(airline.slice(-2));
//start from index 1 and goes to the index before the last index.
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('rahat'));
console.log(typeof new String('rahat'));

console.log(typeof new String('rahat').slice(1));

/* Strings are primitve data types.They are immutable.
We can peform methods on objects or arrays
(arrays are object in JS, typeof array = object)
Then how can we perform methods on Strings?
Sol: However we write strings, they are converted to string object
like, let str = "rahat", is converted to let str = new String("rahat")
So, basically string then becomes objects.
that is why we can perform methods in strings.
NOTE: after performing methods on a string, they return
string only.
ex: console.log(typeof new String('rahat').slice(1)); 
// output is string
*/
