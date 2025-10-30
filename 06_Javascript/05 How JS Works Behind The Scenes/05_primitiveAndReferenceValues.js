// primitive types: nn ss bb u
// null number string symbol boolean bigInt undefined
// reference types: object literals,functions,arrays,etc.
// primitive types are stored in the call stack(more accuratley in the execution context)
// Reference types are stored in the heap.

// Objects vs. primitives
let age = 30;
// an identifier with variable name age is enlisted into the call stack
// with particular address and assigne value
// ex: identifer    Address   Value
//     age          0001      30
let oldAge = age;
// identifier with variable name oldage points to the same address of the age
age = 31;
// age's value is changed. So a new address is assigned with value 31
// to the age var. think the address is 0002
// so age--> address: 0002   value = 31
// oldage--> address : 0001  value = 30
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Rahat',
  age: 30,
};
// reference var are stored in the heap memory
// when they are created, an identifier with same var name
// and value as its address on the heap memory is enlisted into the call stack
// call stack: identifier     address         value
//              me              0003            D30F(heap memoery address)

// on heap:    address        value
//             D30F           { name: 'Rahat'; age: 30;
//                            }
const friend = me;
// when a reference type is copied, then its value is not copied but its heap address
// so now friend object now points to the heap address of the me object
// which is D30F here. So, any change made to the friend obj will also reflect
// on the me obj too.
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
// see here, me.age alsao became 27. As both points to the same heap memory.

/*
Const type is immutable only in the case of primtive types.
But here, in case of referene type, we can change property values of references
even though they are declared const.
ex: friend.age = 27;
here, friend is an const. but still we change its 'age' property value
because in the call stack, friend object's heap memory(D30F) is saved.
And we are changing property values that are stored on that heap address(D30F)
we are not changing heap address of the object. So it is correct.
*/
///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {}; // this is not allowed. since it is a const obj.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

// here, object.assign() function took care of preserving
// the lastName property, as it is a first level property
// But, it can not provide deep cloning after the first level.
// for ex: if there is another object, inside an object
// object.assign() can not provide deep cloning.
// for ex: here, family itself is an array i.e. a reference type
// so both object (jessica2 and jessicaCopy) have the same heap address for
// the family object. Even though we pushed memebers in the jessicaCopy.family
// it also got added in the jessica2.family. Because object.assign provide deep cloning
// only in the first level. After this, it does shallow cloning.
// for complete deep cloning, we use 3rd party library like lowdash.
