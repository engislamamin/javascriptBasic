// function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
/*
    output is 
    1 'red'
    2 'orange'
    3 'yellow'
    4 'green'
    5 'blue'
    6 'purple'
    7 'pink'
*/