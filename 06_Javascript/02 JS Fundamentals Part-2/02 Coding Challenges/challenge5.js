// Q1: write a program to print marks of students using a for loop
// solution:
console.log("Solution for Question 1 : ..........");
let result = {
  minul: 47,
  rahat: 99,
  sharif: 2,
  naeem: 69,
};

//using plain for loop
for (let i = 0; i < Object.keys(result).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(result)[i] +
      " is " +
      result[Object.keys(result)[i]]
  );
}

// Q2: wrtie the program of Q1 using for-in loop
// solution:
console.log("Solution for Question 2 : ..........");
for (let student in result) {
  console.log("Marks of ", student + " is ", result[student]);
}

// Q3: write a program to print "try again" untill the user enters the right number
// solution:
//console.log("Solution for Question 3: ..........");
/*
let a = prompt("Enter a number:");
while (a != 25) {
  a = prompt("try again");
  a = Number.parseInt(a);
}
*/

// Q4: write a function to find mean of 5 numbers
// solution:
console.log("solution for question 4: ..........");
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log("mean of 2,8,16,32,64 is : ", mean(2, 8, 16, 32, 64));
