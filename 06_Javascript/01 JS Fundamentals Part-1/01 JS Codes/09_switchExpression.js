/**
 * Switch Statement in JavaScript
 *
 * The `switch` statement evaluates an expression once,
 * then compares its value against multiple `case` clauses.
 * When a matching `case` is found, its block executes.
 *
 * Important points:
 * - The expression inside `switch(expression)` is evaluated once.
 * - Each `case` specifies a potential matching value.
 * - The `break` statement stops the switch from executing subsequent cases.
 * - Omitting `break` causes "fall-through" behavior (execution continues to next case).
 * - The optional `default` case runs if no cases match.
 *
 * Use switch when you have multiple possible values for a variable,
 * especially when comparing for equality.
 */

// Define a variable to represent a day number (0 to 6)
let day = 3;

// Switch statement to print the name of the day based on `day` value
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    // This runs if day is not 0-6
    console.log("Invalid day");
}
