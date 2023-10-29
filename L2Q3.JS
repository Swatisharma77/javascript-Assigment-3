// Prompt the user to enter the length and width of the rectangle
const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle:"));

// Check if the input is valid (both length and width are numbers)
if (!isNaN(length) && !isNaN(width)) {
  // Calculate the area of the rectangle
  const area = length * width;

  // Calculate the perimeter of the rectangle
  const perimeter = 2 * (length + width);

  // Display the results with formatted messages
  console.log(`The area of the rectangle is ${area}`);
  console.log(`The perimeter of the rectangle is ${perimeter}`);
} else {
  // Handle invalid input
  console.log("Invalid input. Please enter valid numbers for the length and width of the rectangle.");
}
