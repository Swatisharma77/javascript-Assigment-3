// Prompt the user to enter the number of years they expect to live
const yearsToLive = parseInt(prompt("Enter the number of years you expect to live:"));

// Calculate the number of seconds in a year
const secondsInAYear = 365 * 24 * 60 * 60;

// Calculate the total number of seconds a person can live
const totalSecondsLived = yearsToLive * secondsInAYear;

// Display the result
console.log(`You lived ${totalSecondsLived} seconds.`);
