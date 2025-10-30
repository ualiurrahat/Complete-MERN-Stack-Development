'use strict';

// 1. in global scope, 'this' points to window object

console.log(this);

// 2. inside regular function, 'this' is undefined

function myself() {
  console.log(this); // undefined
}

myself();

// 3. arrow functions do not have their own 'this' pointer
// they represent closet parent's or functions scope 'this'(lexical this)

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
  // here, the parental scope of arrow funciton is global scope
  // so 'this' represents window object here.
};
calcAgeArrow(1996);

// inside an object, this represents the object.
// NOTE: 'this' represents the object, which make the function call

const rahat = {
  fullName: 'Ualiur Rahat',
  job: 'I wish I had one',
  calcAge: function () {
    console.log(this); // whole rahat object is printed
  },
};
rahat.calcAge();
// here, rahat made the funciton call
// so, 'this' inside the object rahat and calcAge function
// is representing rahat right now

const moho = {
  fullName: 'Kamrunnaher Moho',
};
// method borrowing: borrowing rahat's method to moho
moho.calcAge = rahat.calcAge;
moho.calcAge();
// now, this points to moho object
// as the funciton call was made by object moho.

// now, creating a funciton by borrowing method from object
const f = rahat.calcAge;
f();
// now, 'this' is undefined
// because f is just like a regular funciton here.
