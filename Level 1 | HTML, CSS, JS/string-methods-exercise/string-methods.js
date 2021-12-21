// Write a function that takes a string as a parameter and returns the same string 
// in all capital letters followed by all lowercase letters.

function capAndLowercase (string) {
    var newStr = string;
    var upperStr = newStr.toUpperCase();
    var lowerStr = newStr.toLowerCase();
    var joinedStrings = upperStr.concat(lowerStr);
    console.log(joinedStrings)
    return joinedStrings;
}

// capAndLowercase("hi")

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// Hint: You'll need to use Math.floor().

function findMiddleIndex (string) {
    var stringLength = string.length
    var halfLength = Math.floor(stringLength / 2)
    // console.log(halfLength)
    return halfLength
}

// findMiddleIndex("Hello World")

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

function firstHalfOfString (string) {
    const middleIndex = findMiddleIndex(string)
    // console.log(string.slice(0, middleIndex))
    const firstHalf = string.slice(0, middleIndex)
    return (firstHalf)
 }

//  firstHalfOfString("abcdefjl")

//  Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// Hint: If your string length is odd, use Math.floor() to round down.

function halfUppercaseAndHalfLowercase (string) {
  const halfOfString = firstHalfOfString(string)
  const uppercase = halfOfString.toUpperCase()
  console.log(uppercase)
  const middleIndex = findMiddleIndex(string)
  const secondHalf = string.slice(middleIndex)
  const secondLowercase = secondHalf.toLowerCase()
  console.log(secondLowercase)
  const joinFirstuppercaseAndSecondlowercase = uppercase.concat(secondLowercase)
  return console.log(joinFirstuppercaseAndSecondlowercase)
}  

halfUppercaseAndHalfLowercase("hello WORLD")