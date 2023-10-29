// Create a new Date object for the current date and time
const now = new Date();

// Format the date and time in YYYY-MM-DD HH:mm format
const format1 = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log("YYYY-MM-DD HH:mm:", format1);

// Format the date and time in DD-MM-YYYY HH:mm format
const format2 = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log("DD-MM-YYYY HH:mm:", format2);

// Format the date and time in DD/MM/YYYY HH:mm format
const format3 = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log("DD/MM/YYYY HH:mm:", format3);
