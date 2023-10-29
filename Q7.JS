// Create a new Date object
const today = new Date();

// 1. What is the year today?
const year = today.getFullYear();

// 2. What is the month today as a number? (0-11, where 0 is January and 11 is December)
const month = today.getMonth();

// 3. What is the date today?
const date = today.getDate();

// 4. What is the day today as a number? (0-6, where 0 is Sunday and 6 is Saturday)
const day = today.getDay();

// 5. What is the hours now?
const hours = today.getHours();

// 6. What is the minutes now?
const minutes = today.getMinutes();

// 7. Find out the number of seconds elapsed from January 1, 1970, to now (UTC time)
const secondsSince1970 = Math.floor(today.getTime() / 1000);

console.log("1. Year today:", year);
console.log("2. Month today:", month); // Note: Month is 0-based
console.log("3. Date today:", date);
console.log("4. Day today:", day); // Note: Day is 0-based
console.log("5. Hours now:", hours);
console.log("6. Minutes now:", minutes);
console.log("7. Seconds since January 1, 1970:", secondsSince1970);

