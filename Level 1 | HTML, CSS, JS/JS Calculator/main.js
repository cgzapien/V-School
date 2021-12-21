var readLineSync = require('readline-sync');
var firstNumber = readLineSync.question("Please enter your first number: " )
var secondNumber = readLineSync.question("Please enter your second number: " )
var enteredOperator = readLineSync.question("Please enter the operation to perform(add, sub, mul, div): " )
// var name = readLineSync.question("What is your name?" );
// console.log(name)

//adding two numbers
function addTwoNumbers (firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}
//subtracting two numbers
function subtractTwoNumbers (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
//multiplying two numbers
function multiplyTwoNumbers (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
//divding two numbers
function divideTwoNumbers (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function myCalculator (firstNumber, secondNumber, enteredOperator) {
if (enteredOperator === 'add') {
    console.log('The result is: ' + addTwoNumbers(firstNumber, secondNumber))
}
else if (enteredOperator === 'sub') {
    console.log('The result is: ' + subtractTwoNumbers(firstNumber, secondNumber))
}
else if (enteredOperator === 'mul') {
    console.log('The result is: ' + multiplyTwoNumbers(firstNumber, secondNumber))
}
else if (enteredOperator === 'div') {
    console.log('The result is: ' + divideTwoNumbers(firstNumber, secondNumber))
}
}
myCalculator(firstNumber, secondNumber, enteredOperator)
