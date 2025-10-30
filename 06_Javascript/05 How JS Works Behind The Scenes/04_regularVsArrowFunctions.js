'use strict';
// regular function vs arrow function

// var lastName = 'sardar';
const alamin = {
  lastName: 'Alamin',
  year: 1996,
  calcAge: function (birthYear) {
    const age = 2024 - birthYear;
    console.log(age);

    // solution 1 : use a variable to store this pointer.
    //const self = this; // to avoid error on the isMillionnaire function
    //const isMillionnaire = function () {
    //   console.log(this.year >= 1990 && this.year <= 2000);
    // this produces error, as isMillionnaire is just a regular function
    // and 'this' becomes undefined for this reason
    // so undefined.year produces error.
    // now solution 1 code would be:
    //console.log(self.year >= 1990 && self.year <= 2000);
    //  };
    // isMillionnaire();

    // solution 2: use array function
    const isMillionnaire = () => {
      console.log(this.year >= 1990 && this.year <= 2000);
      console.log('He is a millionnaire!');
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
