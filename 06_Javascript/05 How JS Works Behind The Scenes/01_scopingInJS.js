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
