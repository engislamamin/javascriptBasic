// Return Value 
function sum(a, b) {
    return a + b;
}
let result = sum(3, 5);
console.log("Sum is:", result);

// Arrow Function
const multiply = (x, y) => x * y;
console.log("Multiplication:", multiply(4, 5));

//Callback Function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Islam", sayBye);
