let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite um array de números: ')); // 1, 2, 3
var count = 0;

for (var index = 0; index < array.length; index++) {
    count = count + array[index];
}

var result = count / array.length;

console.log(result);





























