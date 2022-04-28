// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 26 April 2022
// License: Public Domain

// Create a new function in your file, call it what you like, but choose wisely
function names() {
  // declare the variable userName and use window.prompt() to get the user's name from the user.
  var userName = window.prompt("Enter your name!");
  console.log("Your name is =", userName);
  // splitting the string into an array
  var nameSplit = userName.split('');
  console.log("The name split is:", nameSplit);
  // sorting the array
  var nameSort = nameSplit.sort();
  console.log("The sorted name is:", nameSort);
  // joining array back to a string
  var nameJoin = nameSort.join('');
  console.log("The name joined is:", nameJoin);
  // return the results
  return nameJoin;
}
// calling the function
document.writeln("Check out your sorted name: ", names(), "</br>");
