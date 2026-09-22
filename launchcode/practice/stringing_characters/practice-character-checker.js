const readline = require('readline-sync');

let userName = readline.question("What is your Full Name? "); // User gives their name
console.log("Hello, " + userName + "!") // Greeting to the user

let nameLength = userName.length - 1; 
// This nameLength variable gives the actual number of letters in the person's name. 
// I had to subtract 1 because without it, the highest number on the range kept giving me an undefined value.
// I am not entirely sure why I get an undefined value. 
let pickANum = readline.questionInt("Pick a number between 0 and " + nameLength + ". ") 
// Prompts the user for an index number to find that character in that index
console.log(userName[pickANum])//Use of bracket notation to access the indexed character at the user provided number.