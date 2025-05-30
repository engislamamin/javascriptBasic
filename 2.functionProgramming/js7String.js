var greet = "Hello, ";
var place = "World";
var message = greet + place + "!"; // Concatenation
console.log(message); // Output: Hello, World!
// Using template literals for string interpolation
var messageTemplate = `${greet}${place}!`; // Template literals
console.log(messageTemplate); // Output: Hello, World!
// Using string methods
var upperCaseMessage = message.toUpperCase(); // Convert to uppercase
console.log(upperCaseMessage); // Output: HELLO, WORLD!
var lowerCaseMessage = message.toLowerCase(); // Convert to lowercase
console.log(lowerCaseMessage); // Output: hello, world!
// Finding the length of a string
var messageLength = message.length; // Length of the string 
console.log(messageLength); // Output: 13
// Finding a substring within a string
var substringIndex = message.indexOf("World"); // Index of the substring "World"
console.log(substringIndex); // Output: 7
// Extracting a substring from a string
var extractedSubstring = message.substring(7, 12); // Extracting "World"
console.log(extractedSubstring); // Output: World
// Replacing part of a string
var replacedMessage = message.replace("World", "JavaScript"); // Replacing "World" with "JavaScript"
console.log(replacedMessage); // Output: Hello, JavaScript!
// Splitting a string into an array
var wordsArray = message.split(", "); // Splitting the string by ", "
console.log(wordsArray); // Output: ['Hello', 'World!']
// Joining an array into a string
var joinedMessage = wordsArray.join(" - "); // Joining the array with " - "
console.log(joinedMessage); // Output: Hello - World!
// Trimming whitespace from a string
var paddedMessage = "   Hello, World!   "; // String with leading and trailing spaces
var trimmedMessage = paddedMessage.trim(); // Removing whitespace