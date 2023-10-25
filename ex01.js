let prompt = require('prompt-sync')();


var array = JSON.parse(prompt('Digite um array de dois números: '));

if(array[0] < array[1]) {
    console.log(array[0], array[1]);
} else {
    console.log(array[1], array[0]);
}