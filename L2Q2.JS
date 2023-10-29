// Prompt the user to enter the lengths of the three sides of the triangle
const sideA = parseFloat(prompt("Enter side a:"));
const sideB = parseFloat(prompt("Enter side b:"));
const sideC = parseFloat(prompt("Enter side c:"));

// Check if the input is valid (all sides are numbers)
if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
  // Calculate the perimeter of the triangle
  const perimeter = sideA + sideB + sideC;

  // Display the result with a formatted message
  console.log(`The perimeter of the triangle is ${perimeter}`);
} else {
  // Handle invalid input
  console.log("Invalid input. Please enter valid numbers for all sides of the triangle.");
}
