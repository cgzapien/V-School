// //Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...collectAnimals) {  
//     return console.log(collectAnimals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// function combineFruit(fruit, sweets, vegetables){
    
//     let foodsobj = {fruit, sweets, vegetables};
//     return foodsobj
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
// /*=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }*/

//  const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//       };
      
// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`}

// console.log(parseSentence(vacation))

// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return (firstItem)
// }
// console.log(returnFirst([1,2,3]))
// console.log(returnFirst("hola"))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}.`;
// }
// console.log(returnFavorites(favoriteActivities))
// console.log(returnFavorites(['toy', 'boats', 'guns', 'cards']))

// function combineAnimals() {  
// return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {  
//     let numbers = [a,b,c,d,e];  
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }

//   console.log(product(1, 2, 3, 4, 5))

//   function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   }

  function unshift(array, ...e) {  
    return [...array, ...e]
  }
  console.log(unshift(['hi', 'bye'], 1, 2, 3,4))

  function populatePeople(names){
    let persons = names.map(name => {
        let newNameArr = name.split(" ")
   
         return {firstName: `${newNameArr[0]}`, lastName: `${newNameArr[1]}`}
        
    })

    console.log(persons) 
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]


const func2 = (array, ...restOfArgs) => array.concat(restOfArgs)
//     console.log(...array)
//     console.log(restOfArgs)
//     const 
//     return console.log(combined)

// }

console.log(func2(["hi", "bye"], 1, 2, 3))