// Inverta uma string deyvid = divyed 
let string='amor'
let stringNew=''
let stringSize = string.length

for (let index = stringSize - 1; index >= 0; index--) {
    stringNew += string[index]
}

console.log(stringNew)