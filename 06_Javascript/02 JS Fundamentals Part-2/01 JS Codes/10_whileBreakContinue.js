// Initialize a counter for the loop
let i = 1;

// while loop: Executes as long as the condition (i <= 20) is true
while (i <= 20) {
  // continue statement: Skip iteration when i is 3
  if (i === 3) {
    console.log("Skipping iteration", i);
    i++; // Prevent infinite loop by incrementing before continue
    continue; // Skip remaining code in this iteration
  }

  // break statement: Exit loop completely when i is 5
  if (i === 5) {
    console.log("Breaking loop at", i);
    break; // Terminates the loop
  }

  // Print current iteration value
  console.log("Current value of i:", i);

  // Move to next iteration
  i++;
}

// This line runs after the loop ends
console.log("Loop finished.");
