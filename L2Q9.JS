// Prompt the user to enter the number of hours worked and the rate per hour
const hoursWorked = parseFloat(prompt("Enter hours:"));
const ratePerHour = parseFloat(prompt("Enter rate per hour:"));

// Check if the input is valid (both hours and rate are numbers)
if (!isNaN(hoursWorked) && !isNaN(ratePerHour)) {
  // Calculate the weekly earnings
  const weeklyEarnings = hoursWorked * ratePerHour;

  // Display the result with a formatted message
  console.log(`Your weekly earning is ${weeklyEarnings}`);
} else {
  // Handle invalid input
  console.log("Invalid input. Please enter valid numbers for hours and rate per hour.");
}
