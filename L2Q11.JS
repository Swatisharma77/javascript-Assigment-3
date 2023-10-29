// Define the first name and last name
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

// Compare the lengths of the first name and last name
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
  console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}.`);
} else {
  console.log(`Your first name, ${firstName}, and family name, ${lastName}, have the same length.`);
}

