'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  //   console.log(firstName); // works fine for scope chaining

  // another function within calcAge funciton
  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1990 && birthYear <= 2000) {
      // Creaging NEW same name variable's with outer scope's variable
      const firstName = 'Ualiur';
      // reassigning outer scope's variables.
      output = `NEW OUTPUT!`;
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // won't work here,since it is block scoped
    console.log(millenial); // works fine,since var variables are function scoped.
    console.log(output);
    // console.log(add(2, 3));
    // shows error, cause in 'strict' mode functions are blocked scope
    // add() was declared inside the if block. Can't use it here.
  }
  printAge();
  //   console.log(millenial); // error
  // millenial var scope is upto its closest function. here, inside printAge() function. So it can't be used here.
  return age;
}
const firstName = 'rahat'; // global scope
console.log(calcAge(1996));

// console.log(age); // age is inside calcAge(), so it can not be accssed
// printAge(); // reference error

///////////////////////////
// hoisting and TDZ(temporal dead zone) in JS

console.log(me); // undefined. as var is hoisted as undefiend value.
// console.log(job); // error. accessing before initialization
// console.log(age); // error. accessing vefore initialization

var me = 'rahat';
const job = 'student';
let age = 25;

console.log(addDecl(2, 3));
// no error, as function declarations are hoisted with initial value.

// console.log(addExpr(5, 10));  // error. accessing before initialization

console.log(addArrow); // undefined, as it is declared as var
// console.log(addArrow(10, 5));
// typeError: addArrow is not a function
// because addArrow was declared as var
// now addArrow(10,5) == undefined(10,5);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteProducts();
var numProducts = 10;

function deleteProducts() {
  console.log('All products deleted');
}

// var variables becomes a property of the window object
// where as let,const are not.
var x = 25;
let y = 2;
const z = 10;
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

//////////////////////////
//// this keyword /////////
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
    console.log(this); // whole rahat object
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

////////////////////////
// regular function vs arrow function

// var lastName = 'sardar';
const alamin = {
  lastName: 'Alamin',
  year: 1996,
  calcAge: function (birthYear) {
    const age = 2024 - birthYear;
    console.log(age);

    // solution 1
    //const self = this; // to avoid error on the isMillionnaire funcion
    //const isMillionnaire = function () {
    //   console.log(this.year >= 1990 && this.year <= 2000);
    // this produces error, as isMillionnaire is just a regular function
    // and 'this' becomes undefined for this reason
    // so undefined.year produces error.
    //console.log(self.year >= 1990 && self.year <= 2000);
    //  };
    // isMillionnaire();

    // solution 2
    const isMillionnaire = () => {
      console.log(this.year >= 1990 && this.year <= 2000);
    };
    isMillionnaire();
  },
  // arrow function
  greet: () => {
    console.log(this);
    // here, 'this' is window object
    // as greet is an arrow function, it does not have its own 'this'
    // so it takes (lexical this), parent's 'this'
    //NOTE: here, object Alamin it is not it's immediate parent's scope
    // Alamin is just an object literal.
    console.log(`Hey, this is ${this.lastName}`);
  },
};
alamin.greet();
alamin.calcAge(1996);

// arguments keyword: exists in regular function and function expressions
// but not in arrow function
const mulExpr = function (a, b) {
  console.log(arguments);
  console.log(a * b);
};
mulExpr(2, 5);
mulExpr(3, 4, 9, 8);

const subExpr = (a, b) => {
  //   console.log(arguments); // arguments is not accessible to arrow functions
  console.log(a - b);
};
subExpr(10, 5);
