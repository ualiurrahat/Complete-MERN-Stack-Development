// js array methods: part 1
let num = [18, 1, 8, 5, 20];
console.log(num);

// length of array
console.log("Array length: ", num.length);

// Add elements
//  push(): ads element at the end. Returns the length of the array after addition is performed. Updates the array.
let d = num.push(25);
console.log(d, num);
// unshift(): adds element at start. returns new array length. Updates the array.
let f = num.unshift(100);
console.log(f, num);
// toString(): converts whole array into string separating the elements by commas.
let a = num.toString();
console.log(a, typeof a);

// join(): joins all elements using a seperator and produces a string.
let b = num.join("+");
console.log(b, typeof b);

// remove elements
// pop():removes last element. returns the element. update the array
let c = num.pop();
console.log(c, num);

// shift(): removes first element and returns it.updates the array.
let e = num.shift();
console.log(e, num);

// indexOf: returns indexes of an element
// if element is not present, returns -1
console.log(num.indexOf(20));
console.log(num.indexOf(1000));

// includes(): returns true if element is present in the array. Else returns false
// includes checks with strict equality. so it doesn't perform type coercion.
console.log(num.includes(18));
console.log(num.includes(1000));
