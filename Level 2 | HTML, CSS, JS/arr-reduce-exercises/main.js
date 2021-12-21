//1) Turn an array of numbers into a total of all the numbers
function total(arr) {
   const totalSum = arr.reduce((final,num) => final += num)
   return totalSum 
}

console.log(total([1,2,3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    // const stringCancatted = arr.reduce(function (final, num) {
            
    //     return final + num
    // }, "")
    // return stringCancatted
    const concatIntoString = arr.reduce((final, num) => final + num, "")
    return concatIntoString
}

console.log(stringConcat([1,2,3])); // "123"

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
   const users = arr.reduce(function (final, user) {
    if(user.voted) {
        final++
    }
    return final
   }, 0)   
   return users
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
   const totalPrice = arr.reduce(function (final, prices) {
    final = final + prices.price
    return final
   }, 0)
   return totalPrice
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

//5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
   const together = arr.reduce(function (final, arrays) {
    return final + arrays
   }, [])
   return together
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6) Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const voters = arr.reduce(function (final, voter) {
       if(voter.voted && voter.age >18 && voter.age <= 25) {
        final.numYoungVotes++
       }
       if (voter.age >18 && voter.age <= 25) {
           final.numYoungPeople++
       }
       if(voter.voted && voter.age > 26 && voter.age <= 35) {
           final.numMidVotesPeople++
       }
       if(voter.age > 26 && voter.age <= 35) {
           final.numMidsPeople++
       }
       if(voter.voted && voter.age > 35 && voter.age <= 55) {
           final.numOldVotesPeople++
       }
       if(voter.age > 35 && voter.age <= 55) {
           final.numOldsPeople++
       }
       return final;
   }, {numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0})
   return voters
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/