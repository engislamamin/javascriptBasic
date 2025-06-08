// Create a new empty array literal and assign it to the variable clothes.
var clothes = [];
// Add 5 of your favorite items of clothing as strings using the push() method.
clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Sneakers");
clothes.push("Jacket");
clothes.push("Hat");
//Remove the fifth piece of clothing from the array using the pop() method.
clothes.pop(); // Removes "Hat"
// Add a new item of clothing to the end of the array using the push() method.
clothes.push("Scarf"); // Adds "Scarf"
console.log(clothes); 
// Remove the first piece of clothing from the array using the shift() method.
clothes.shift(); // Removes "T-shirt"
// Add a new item of clothing to the beginning of the array using the unshift() method.
clothes.unshift("Sweater"); // Adds "Sweater" at the beginning
// Use console.log to show the third item from the clothes array in the console.
console.log(clothes);  

//Create a new empty object literal and assign it to the variable favCar.
var favCar = {};
//Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
favCar.color = "Red"; // Assigning color property
//Using the dot notation, assign a convertible property to the favCar object and give it a boolean value of your choice.
favCar.convertible = true; // Assigning convertible property
//Use the console to log the entire favCar object.
console.log(favCar); // Output: { color: 'Red', convertible: true }
//  In Step2, the push() method adds one or more elements to the end of an array and returns the new length of the array. For example: 
var numbers = [1, 2, 3];
numbers.push(4, 5); // Adds 4 and 5 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5]