//  Math object 

// The Math object is a built-in object that has properties and methods for mathematical constants and functions
console.log("Testing the Math object:");
console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E:", Math.E); // 2.718281828459045
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.random():", Math.random()); // Random number between 0 and 1
// built-in Math object methods for generating random numbers
// Generating a sin and cosine of a number
console.log("Math.sin(0):", Math.sin(0)); // 0
console.log("Math.cos(0):", Math.cos(0)); // 1
console.log("Math.tan(0):", Math.tan(0)); // 0
//Math.LN2 Natural logarithm of 2 
console.log("Math.LN2:", Math.LN2); // 0.6931471805599453
// Math.LN10 Natural logarithm of 10
console.log("Math.LN10:", Math.LN10); // 2.302585092994046      
// Math.LOG2E Base 2 logarithm of E
console.log("Math.LOG2E:", Math.LOG2E); // 1.4426950408889634
// Math.LOG10E Base 10 logarithm of E
console.log("Math.LOG10E:", Math.LOG10E); // 0.4342944819032518
// Math.SQRT1_2 Square root of 1/2
console.log("Math.SQRT1_2:", Math.SQRT1_2); // 0.7071067811865476
// Math.SQRT2 Square root of 2
console.log("Math.SQRT2:", Math.SQRT2); // 1.4142135623730951
// Math.abs() method returns the absolute value of a number
console.log("Math.abs(-5):", Math.abs(-5)); // 5
// Math.ceil() method rounds a number up to the nearest integer
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // 5
// Math.floor() method rounds a number down to the nearest integer
console.log("Math.floor(4.8):", Math.floor(4.8)); // 4
// Math.round() method rounds a number to the nearest integer
console.log("Math.round(4.5):", Math.round(4.5)); // 5  
// Math.max() method returns the largest of zero or more numbers
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // 3
// Math.min() method returns the smallest of zero or more numbers
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // 1
// Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive)
// Math.random() generates a random number between 0 and 1
console.log("Math.random():", Math.random()); // Random number between 0 and 1
// Math.trunc() - trims the decimal, leaving only the integer
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
// Math.sign() - returns the sign of a number, indicating whether the number is positive, negative, or zero
console.log("Math.sign(-5):", Math.sign(-5)); // -1 (negative number)
// Math.sign(0) - returns 0 for zero
console.log("Math.sign(0):", Math.sign(0)); // 0 (zero)

// Generating a random number between 0 and 10
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
// Testing the getRandomNumber function
console.log("Testing the getRandomNumber function:");
console.log(getRandomNumber(10)); // Random number between 0 and 9
// Generating a random number between 1 and 10
function getRandomNumberInclusive(max) {
    return Math.floor(Math.random() * max) + 1;
}
// Testing the getRandomNumberInclusive function
console.log("Testing the getRandomNumberInclusive function:");
console.log(getRandomNumberInclusive(10)); // Random number between 1 and 10
// Generating a random number between 5 and 15
function getRandomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Testing the getRandomNumberRange function
console.log("Testing the getRandomNumberRange function:");  
console.log(getRandomNumberRange(5, 15)); // Random number between 5 and 15