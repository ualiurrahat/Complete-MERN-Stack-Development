const rahat = {
  firstName: "ualiur",
  lastName: "rahat",
  profession: "student",
  cgpa: 3.41,
  friends: ["shohan", "ayon", "nasim", "ripon", "minul"],
  birthYear: 1998,
  hasDrivingLicense: false,

  // Method 1 (commented): Calculate age using a parameter
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // Method 2 (commented): Calculate age using 'this' context
  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  /**
   * Calculates age based on birthYear and adds an 'age' property
   * to the object. Returns the calculated age.
   */
  calcAge: function () {
    // console.log(this);
    // the this points to the whole 'rahat' objects
    // because this belongs to who is calling function calcAge.
    // since calcAge is called by 'rahat' object, this means it.
    // ex: rahat.calcAge(); here before dot notation, 'rahat' is there. means 'rahat' is calling this calcAge function.
    // So this points to the entire 'rahat' object here.
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  /*NOTE: In javascript, a function is just a value. Just like object has key-value pairs,
  and they can be of any type, so they can be even function type also.
  Like profession has value "student" which is string type
  friends have values which are array type.
  Like this calcAge is a function type property which produces a value after function is done execution.
  IMPORTANT: Function associated with objects are called methods. Here we can't declare function calcAge like this
  function calcAge(birthYear)
  {
     return 2025-birthyear.  
  }
  This produces error.
  Inside object it is written like this
  functionName : function(){}
  So, calcAge here is a property of the object 'rahat'. 
  It is a property that has a function value.
   */
  // Challenge: Construct a summary string using conditional operator and call it using a function
  getSummary: function () {
    return `${rahat.lastName} is ${this.calcAge()} years old and he
has ${rahat.hasDrivingLicense == true ? "a" : "no"} driving license
`;
  },
};

console.log(rahat); // Logs object before 'age' property is added
console.log(rahat.calcAge()); // Calculates and logs age
//console.log(rahat["calcAge"]()); same as the previous line.

console.log(rahat); // Logs object after 'age' property is added
// console.log(rahat ); // Alternative access method

console.log(rahat.age); // Logs the newly created 'age' property

console.log(rahat.getSummary());
