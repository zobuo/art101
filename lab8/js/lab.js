// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 3 May 2022
// License: Public Domain

function divisibleByThree(num) {
    var results = num % 3 == 0;
    return results;
}

// test function
console.log("Is 21 divisible by three? ", divisibleByThree(21));
console.log("Is 40 divisible by three? ", divisibleByThree(40));

array = [21, 49, 350, 50, 11, 4];
console.log("Our array of numbers", array);

var result = array.map(divisibleByThree);
console.log("Test if numbers in array are divisible by three:", result)

var result = array.map(function(num) {
    var result = Math.sqrt(num);
    return result;
})

console.log("The squareroot of the numbers in our array:", result);
