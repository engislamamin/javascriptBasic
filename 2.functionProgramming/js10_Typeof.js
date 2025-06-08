// Typeof
console.log(typeof 1); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known JavaScript quirk)
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof { name: "Alice" }); // object
console.log(typeof [1, 2, 3]); // object (arrays are also objects in JavaScript)
console.log(typeof function() {}); // function (functions are a special type of object)
console.log(typeof NaN); // number (NaN is considered a number in JavaScript)
console.log(typeof BigInt(12345678901234567890)); // bigint (for large integers)
console.log(typeof new Date()); // object (Date objects are also objects in JavaScript)
console.log(typeof /abc/); // object (regular expressions are also objects in JavaScript)
// Typeof operator can be used to check the type of a variable or value
// It returns a string indicating the type of the unevaluated operand.
// Common types include:
// - "number" for numeric values
// - "string" for text values
// - "boolean" for true/false values
// - "undefined" for uninitialized variables
// - "object" for objects, arrays, and null
// - "function" for function objects
// - "symbol" for unique symbols    
// - "bigint" for large integers
// - "object" for Date objects and regular expressions
// Note: The typeof operator returns "object" for null, which is a known quirk in JavaScript.
// Example usage of typeof operator
let variable = 42;
console.log(typeof variable); // Output: "number"
variable = "Hello, World!";
console.log(typeof variable); // Output: "string"
variable = true;
console.log(typeof variable); // Output: "boolean"
variable = undefined;
console.log(typeof variable); // Output: "undefined"
variable = null;    
console.log(typeof variable); // Output: "object" (quirk in JavaScript)
variable = Symbol("unique");
console.log(typeof variable); // Output: "symbol"
variable = { key: "value" };
console.log(typeof variable); // Output: "object"
variable = [1, 2, 3];
console.log(typeof variable); // Output: "object" (arrays are objects in JavaScript)
variable = function() {};
console.log(typeof variable); // Output: "function" (functions are a special type of object)
variable = NaN;
console.log(typeof variable); // Output: "number" (NaN is considered a number in JavaScript)
variable = BigInt(12345678901234567890);
console.log(typeof variable); // Output: "bigint" (for large integers)
variable = new Date();
console.log(typeof variable); // Output: "object" (Date objects are also objects in JavaScript)
variable = /abc/;
console.log(typeof variable); // Output: "object" (regular expressions are also objects in JavaScript)
// The typeof operator is useful for debugging and checking variable types dynamically.
// It helps ensure that variables are of the expected type before performing operations on them.
// Example of using typeof in a function
function checkType(value) {
    if (typeof value === "string") {
        console.log("The value is a string.");
    } else if (typeof value === "number") {
        console.log("The value is a number.");
    } else if (typeof value === "boolean") {
        console.log("The value is a boolean.");
    } else if (typeof value === "object") {
        console.log("The value is an object.");
    } else if (typeof value === "function") {
        console.log("The value is a function.");
    } else if (typeof value === "symbol") {
        console.log("The value is a symbol.");
    } else if (typeof value === "bigint") {
        console.log("The value is a bigint.");
    } else {
        console.log("Unknown type.");
    }
}
checkType("Hello"); // Output: The value is a string.
checkType(42); // Output: The value is a number.
checkType(true); // Output: The value is a boolean.
checkType({}); // Output: The value is an object.
checkType(function() {}); // Output: The value is a function.
checkType(Symbol("unique")); // Output: The value is a symbol.
checkType(BigInt(12345678901234567890)); // Output: The value is a bigint.
checkType(undefined); // Output: The value is undefined.
// checkType(null); // Output: The value is an object (quirk in JavaScript)
// checkType(NaN); // Output: The value is a number (NaN is considered a number in JavaScript)


/*
Let's begin with objects. Consider this code: javascript var myGuitar = { name: "Stratocaster", brand: "Fender", year: 1954 }; What can you tell me about the structure and components of this code, and how would you access the guitar's brand?

*/
// The code defines an object named myGuitar with three properties: name, brand, and year.
// The structure of the object is as follows:
// - myGuitar is an object literal.
// - It has three key-value pairs:
//   - name: "Stratocaster"
//   - brand: "Fender"
//   - year: 1954
// To access the guitar's brand, you can use dot notation or bracket notation:
// Using dot notation:
console.log(myGuitar.brand); // Output: Fender
// Using bracket notation:
console.log(myGuitar["brand"]); // Output: Fender
// Both methods will give you the value of the brand property, which is "Fender".