let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite um array de números: ')); 

for(var index = 0; index < array.length; index++) {
    var result = array[index] * 8;
    console.log(`${array[index]} x 8 = ${result}`);
}