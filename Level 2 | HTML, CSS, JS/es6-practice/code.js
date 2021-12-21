//Write a function that takes a string and returns the number of vowels in that string.

function findVowels (string) {
    let counter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u'] 
        for (let char of string)
        if(vowels.includes(char))
        counter +=1
    return counter
}
console.log(findVowels("car"))