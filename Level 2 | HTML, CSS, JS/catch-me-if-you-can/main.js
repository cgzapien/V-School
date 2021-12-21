//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
  //check data types first and throw error
  if(typeof x !== "number" || typeof y !== "number") {
      throw new Error("one input is not a number")
  } else { 
      return x + y;
  }
  
}
console.log(sum(10, 5))

//1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
try {
    console.log(sum("1", "2"))
} catch(err) {
    console.log("ERROR!")
}

//2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if(username !== user.username || password !== user.password) {
      throw new Error("login unsuccessful")
  } else {
      console.log("login successful")
  }
}
login("sam", "123abc")
//2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

try {
    login("joe", "123abc")
} catch(err) {
    console.log("login unsuccessful")
}