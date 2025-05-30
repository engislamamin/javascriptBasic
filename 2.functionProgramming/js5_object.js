//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
// creating an object with properties and their values
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
// creating an object with properties and their values
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

// Creating an object with properties and their values
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

// Testing the object properties
console.log("Testing the assistantManager object properties:");
console.log("Range Tiles Per Turn:", assistantManager.rangeTilesPerTurn); // 3
console.log("Social Skills:", assistantManager.socialSkills); // 30
console.log(table.color); // 'brown'

//testing the house object properties
console.log("Testing the house object properties:");
console.log("Rooms:", house.rooms); // 3
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
house.windows = 11;
console.log(house)


// Creating an object with properties and their values
// using different ways to set properties
// using dot notation and bracket notation
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
//testing the car object properties
console.log("Testing the car object properties:");
console.log(car.color); // "green"
console.log(car.speed); // 100
console.log(car); // {color: "green", speed: 100}

// Adding a new property to the car object

car["number of doors"] = 4;
// Testing the car object after adding a new property
console.log("Testing the car object after adding a new property:");
console.log(car); // {color: 'green', speed: 100, number of doors: 4}

// Accessing object properties using an array of keys
// This is a common pattern to access properties dynamically
// using an array of keys to access properties of an object

var arrOfKeys = ['speed', 'altitude', 'color'];

// Creating an object with properties and their values
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}

// Looping through the array of keys to access properties of the drone object 
// and logging their values to the console
console.log("Testing the drone object properties:");
console.log("Drone properties:"); 
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

// Creating an object with properties and their values

var fruits = [];
// Adding elements to the fruits array using push method
fruits.push("apple"); // ['apple']
fruits.push("banana"); // ['apple', 'banana']
fruits.push('pear'); // ['apple', 'banana', 'pear']
console.log(fruits); // ['apple', 'banana', 'pear']
//pop method removes the last element from the array
fruits.pop();
console.log(fruits); // ['apple', 'banana']

/* Creating a function that takes three parameters and 
// returns an array containing those parameters*/
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; // The array is returned to the calling code.
}
// Testing the arrayBuilder function
console.log("Testing the arrayBuilder function:");
console.log(arrayBuilder("apple", "banana", "pear")); // ['apple', 'banana', 'pear']
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple', 'pear', 'plum']


