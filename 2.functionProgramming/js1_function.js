/* 
Function 

Function without parameters
*/

function funcWithoutPara() { 
    console.log("function without parameter");
}
// Invoke the function.

funcWithoutPara();

//Function with parameters.

function funcWithPara(name, age, address) {
    // Two ways to print variables: string concatenation and template literals.

    console.log("Function with parameters:\n    Name is " + name + "\n    Age is " + age + "\n    Address is " + address);
    console.log(`Function with parameters:
        Name is ${name}
        Age is ${age}
        Address is ${address}`);
 }
funcWithPara("Islam", 29, "Aswan");
