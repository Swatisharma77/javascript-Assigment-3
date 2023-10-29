// Function to calculate y for a given x
function calculateY(x) {
    return x * x + 6 * x + 9;
  }
  
  // Try different x values and find when y is 0
  for (let x = -10; x <= 10; x++) {
    const y = calculateY(x);
    console.log(`For x = ${x}, y = ${y}`);
    if (y === 0) {
      console.log(`At x = ${x}, y is equal to 0.`);
      break; // Exit the loop once we find the first root
    }
  }
  