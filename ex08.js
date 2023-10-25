let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite um array de números: ')); // [1, 2, 3, 4]

for (var index = 0; index < array.length; index ++) {
    if(array[index] >= 0) {
        console.log(array[index]);
    }
}


