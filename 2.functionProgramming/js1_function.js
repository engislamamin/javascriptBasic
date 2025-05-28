/* 
Function 

Function without parameter
*/

function funcWithoutPara() { 
    console.log("function without parameter");
}
//Called function.
funcWithoutPara();

//Function with parameters.

function funcWithPara(name, age, address) {
    // Look at here are two way to print the parameters or variables.
    console.log("function without parameter " + "\n    Name is " + name + "\n    Age is " + age + "\n    address is " + address);
     console.log(`Function with parameters:
        Name is ${name}
        Age is ${age}
        Address is ${address}`);
 }
funcWithPara("Islam", 29, "Aswan");
