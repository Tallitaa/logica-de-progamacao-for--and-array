let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite um array de strings: '));


for(var index = 0; index < array.length; index++ ) {
    console.log(array[index] , index)
}


