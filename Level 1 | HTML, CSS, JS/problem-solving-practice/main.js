//Write a function that takes an array of numbers and returns the largest (without using Math.max())
// function findLargestNumber (array) {
//     let largest = 0;
// for (let i = 0; i <= largest; i++) {
//     if(array[i] > largest) {
//         largest = array[i]
//     }
// }
// console.log(largest)
// }

// findLargestNumber([2,3,5,7,10,13])

//Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings (array, givenChar) {
    const empArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x <array[i].length; x++) {
        if (array[i][x] === givenChar) {
            empArr.push(array[i])
              console.log(empArr)
        }
    }
    }
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
/*function isDivisible (num1, num2) {
    if (num1 % num2 === 0) {
        console.log(true);
        } else {
        console.log(false);
    }
}

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false*/