
// Prompt the user to enter the base and height of the triangle
const base = parseFloat(prompt("Enter base:"));
const height = parseFloat(prompt("Enter height:"));

// Check if the input is valid (both base and height are numbers)
if (!isNaN(base) && !isNaN(height)) {
  // Calculate the area of the triangle
  const area = 0.5 * base * height;

  // Display the result with a formatted message
  console.log(`The area of the triangle is ${area}`);
} else {
  // Handle invalid input
  console.log("Invalid input. Please enter valid numbers for the base and height.");
}
