// Prompt the user to enter their birth year
const birthYear = parseInt(prompt("Enter your birth year:"));

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the user's age
const age = currentYear - birthYear;

// Check if the user is 18 or above
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive.`);
} else {
  const yearsToWait = 18 - age;
  console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}
