// Prompt the user to enter the radius of the circle
const radius = parseFloat(prompt("Enter the radius of the circle:"));

// Check if the input is valid (the radius is a number)
if (!isNaN(radius)) {
  // Define the value of pi
  const pi = 3.14;

  // Calculate the area of the circle
  const area = pi * radius * radius;

  // Calculate the circumference of the circle
  const circumference = 2 * pi * radius;

  // Display the results with formatted messages
  alert(`The area of the circle is ${area.toFixed(2)}`);
  alert(`The circumference of the circle is ${circumference.toFixed(2)}`);
} else {
  // Handle invalid input
  alert("Invalid input. Please enter a valid number for the radius of the circle.");
}

