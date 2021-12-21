//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    let doubled = arr.map(num => num * 2)
    return doubled
  }
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
//2) Take an array of numbers and make them strings
function stringItUp(arr){
  const numbers = arr.map(function (num) {
    return num
  })
  const x = numbers.join()
  const joinWithQuotationMarks = x.split(",")
  return joinWithQuotationMarks
  
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3) Capitalize each of an array of names
function capitalizeNames(arr){
  const names = arr.map(name => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase())
  return names
}
 console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

 //4) Make an array of strings of the names
function namesOnly(arr){
  const names = arr.map(function (name) {
    return name.name
  })
  return names
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
   const persons = arr.map(function(person) {
    if(person.age > 21) {
        return person.name + " can go to The Matrix"
    } else {
       return person.name + " is under age!!"
    }       
})
return persons
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

//6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  const persons = arr.map(function (person) {
      const h1 = "<h1>" +person.name + "</h1>"
      const h2 = "<h2>" + person.age + "</h2>"
      return h1 + h2
  })
  return persons 
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]