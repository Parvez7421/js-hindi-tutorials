// Getting the current date and time in JavaScript

// Create a new Date object
const now = new Date();

// Get the current date
const currentDate = now.toLocaleDateString();
console.log("Current Date:", currentDate);

// Get the current time
const currentTime = now.toLocaleTimeString();
console.log("Current Time:", currentTime);

// Get the full date and time
const fullDateTime = now.toString();
console.log("Full Date and Time:", fullDateTime);

// Get specific components of the date
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-indexed
const day = now.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

// Get specific components of the time
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

// Format the date in a custom way
const formattedDate = `${day}/${month}/${year}`;
console.log("Formatted Date:", formattedDate);
