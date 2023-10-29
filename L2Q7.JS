// Define the coordinates of the first set of points
const x1a = 2;
const y1a = 2;
const x2a = 6;
const y2a = 10;

// Calculate the slope (m) for the first set of points
const slope1 = (y2a - y1a) / (x2a - x1a);

// Define the coordinates of the second set of points
const x1b = 3;
const y1b = 4;
const x2b = 7;
const y2b = 12;

// Calculate the slope (m) for the second set of points
const slope2 = (y2b - y1b) / (x2b - x1b);

// Compare the slopes and display the results
if (slope1 === slope2) {
  console.log("The slopes are equal. They have the same value.");
} else if (slope1 > slope2) {
  console.log("The slope of the first set of points is greater.");
} else {
  console.log("The slope of the second set of points is greater.");
}
