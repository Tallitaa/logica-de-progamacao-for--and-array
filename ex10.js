let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite uma array de números: '))
var stringNumber = ''

for(var index = 0; index < array.length; index++) {
stringNumber = stringNumber + array[index]
}
stringNumber = String(Number(stringNumber) + 1)

var newArray = []

for (let index = 0; index < stringNumber.length; index++) {
    newArray.push(stringNumber[index])
}

console.log(newArray)









