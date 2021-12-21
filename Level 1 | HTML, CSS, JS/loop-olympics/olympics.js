// Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }
// Write a for loop that prints to the console 9 through 0.
// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }
// Write a for loop that prints these fruits to the console.
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// var emptyArr = [];
// for (var i = 0; i < 9; i++) {
//     emptyArr.push(i)
// }
// console.log(emptyArr)
// Write a for loop that prints to the console only even numbers 0 through 100.
// for (var i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }
// Write a for loop that will push every other fruit to an array.
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var emptyArr = []
// for (var i = 0; i < fruit.length; i += 2) {
//     emptyArr.push(fruit[i])
// }
// console.log(emptyArr)

// Silver Medal
// Write a loop that will print out all the names of the people of the peoplearray
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.
// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

//   for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }

// var names = [];
// var occupation = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupation.push(peopleArray[i].occupation);
// }
// console.log(names)
// console.log(occupation)

// var everyOtherName = [];
// var occupation = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         everyOtherName.push(peopleArray[i].name)
//     } else {
//         occupation.push(peopleArray[i].occupation)
//     }
// }
// console.log(everyOtherName)
// console.log(occupation)


// var nestZeros = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]
// var emptyArr = [];

// for (var i = 0; i < 3; i++) {
//     emptyArr.push([])
//     for (var x = 0; x < 3; x++) {
//         emptyArr[i].push(0);
//     }
// }
// console.log(emptyArr)

var emptyArr = [];

for (var i = 0; i < 3; i++) {
    emptyArr.push([])
    for (var x = 2; x < 3; x++) {
        emptyArr[i].push(0);
        emptyArr[i].push(1)
        emptyArr[i].push(2)
    }
}
console.log(emptyArr)

var emptyArr = [];

for (var i = 0; i < 3; i++) {
    emptyArr.push([])
    for (var x = 2; x < 3; x++) {
        emptyArr[i].push(0);
        emptyArr[i].push(1)
        emptyArr[i].push(2)
    }
}
console.log(emptyArr)