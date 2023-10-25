let prompt = require('prompt-sync')();

var string = '11001'
var array = []


for (var index = 0 ; index < string.length ; index++) {
    array.push(string[index])
}

var count = 0
var potencia = 0

for (let index = array.length - 1; index >= 0; index--) {
 var result = (2**potencia) * Number(array[index])

 count = count + result
 potencia = potencia + 1
}

console.log(count)