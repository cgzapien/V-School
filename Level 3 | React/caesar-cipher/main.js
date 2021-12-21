const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log('input: ', input);
const shift = parseInt(readline.question('How many letters would you like to shift? '));
console.log('shift: ', shift);


function caesarCipher(input, shift) {
    let alphabet = ['abcdefghijklmnopqrstuvwxyz']
    let specialChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>? .1234567890";
    let newWord = ""
    for(let i = 0; i < input.length; i++) {
        let letterToCode = input.charCodeAt(i) + shift
            if(specialChars.indexOf(input.charAt(i)) != -1) {
                newWord += input[i]
            } else {
                  while(letterToCode > 122) {
                      letterToCode = (letterToCode - 122) + 96
                  }
              newWord += (String.fromCharCode(letterToCode))        

            }
    }
    return newWord
}

console.log(caesarCipher(input, shift))