const readline = require('readline-sync');

let userName = readline.question("What is your Full Name? "); // User gives their name
console.log("Hello, " + userName + "!") // Greeting to the user

let nameLength = userName.length - 1; // This variable gives the actual number of letters in the person's name.
let pickANum = readline.questionInt("Pick a number between 0 and " + nameLength + ". ") // Asks the user for a number as instructed.
console.log(userName[pickANum])