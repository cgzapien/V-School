var people = ["Jon:", "Jacob:", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz" //split and uppercase
// Output: 
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function forception(people, alphabet) {
    var emptyArr = [];
    for (var i = 0; i < people.length; i++) {
        emptyArr.push(people[i])
    for (var x = 0; x < alphabet.length; x++) {
        var uppercase = alphabet[x].toUpperCase()
        emptyArr.push(uppercase)
  }
    }
    return emptyArr
}


console.log(forception (["Jon:", "Jacob:", "Carlos:"], "abcdefghijklmnopqrstuvwxyz"))