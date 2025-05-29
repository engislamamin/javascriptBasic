
//ceate a function that takes a word and a letter to match
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
// Create a function that takes a word as input and returns the word reversed
function reverseWord(word) {
  return word.split("").reverse().join("");
}

// create function to return the average of an array
function averageArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// testing the letterFinder function
console.log("Testing the letterFinder function");
letterFinder("hello", "l"); // Found the l at 2, Found the l at 3
//testing the reverseWord function
console.log("Testing the reverseWord function");
console.log(reverseWord("hello")); // "olleh"
// Testing the averageArray function
console.log("Testing the averageArray function");
console.log(averageArray([1, 2, 3, 4, 5])); // 3
// Testing the averageArray function with an empty array
console.log("Testing the averageArray function with an empty array");
console.log(averageArray([])); // NaN (not a number, since there's no elements to average)    



