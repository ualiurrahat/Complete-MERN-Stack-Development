// ---------------------- Logical Assignment Operators ----------------------

// Define two restaurant objects
const rest1 = {
  name: 'Capri',
  // Initially has 0 guests (a falsy value)
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
  // No numGuests defined (i.e., undefined)
};

// ---------------------- OR Assignment Operator (||=) ----------------------
// The OR assignment operator (||=) assigns a value if the current value is falsy.
// However, this fails when a valid falsy value like 0 should be preserved.

// Example that causes unintended behavior:
// rest1.numGuests ||= 10;
// Above would incorrectly assign 10, because 0 is falsy.

// ---------------------- Nullish Assignment Operator (??=) ----------------------
// The nullish assignment operator (??=) assigns a value **only** if the current value is `null` or `undefined`.

// ✅ Correct usage: preserves valid falsy value `0`
rest1.numGuests ??= 10; // remains 0, as desired

// ✅ Assigns 10 because numGuests is undefined
rest2.numGuests ??= 10;

// ---------------------- AND Assignment Operator (&&=) ----------------------
// The AND assignment operator (&&=) assigns a new value **only if** the current value is truthy.

// ❌ rest1 has no `owner` property — treated as `undefined` (falsy), so nothing changes
rest1.owner &&= '<ANONYMOUS>';

// ✅ rest2 has a valid `owner` value — gets updated
rest2.owner &&= '<ANONYMOUS>';

// ---------------------- Final Output ----------------------
console.log(rest1);
/*
{
  name: 'Capri',
  numGuests: 0
}
*/

console.log(rest2);
/*
{
  name: 'La Piazza',
  owner: '<ANONYMOUS>',
  numGuests: 10
}
*/
