let name = "John"
let age = 101

function runForLoop(pets) {
    var petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
// Task 1 Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))
}

console.log(mapVegetables(carrots))

//Task 2 Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people))

//Task 3 Re-write the following functions to be arrow functions:

let mathSum = (a, b) => a + b 
console.log(mathSum(1,2))

var produceProduct = (a, b) => a * b 
console.log(produceProduct(5,2))

//Task 4 Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

function printString (firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName} how does it feel to be ${age}?`
}

console.log(printString('carlos', 'zapien', '32'))
console.log(printString())

/*Hi Kat Stark, how does it feel to be 40?
firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100*/

//Task 5 Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog" ? true : false)
}

console.log(filterForDogs(animals))