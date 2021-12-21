//aks a question over and over so you need a loop
//if the user puts his hand in the hole, he dies

const readline = require("readline-sync");
const name = readline.question("What is your name? ");

var gameOver = false
var options = ["Put hand in hole" , "Find the key", "Open the door" ]

while (!gameOver) {
 var questionOne = readline.keyInSelect(options, "What do you want to do?" );
 if (questionOne === 0){
    console.log("You're dead!")
    gameOver = true
 }
 else if (questionOne === 1){
  console.log("Congrats! You found the key!")
  gameOver = true
}
else if (questionOne === 2){
  console.log("Where's the key?")
  gameOver = true
} else {
  console.log("Try Again!")
}
}

