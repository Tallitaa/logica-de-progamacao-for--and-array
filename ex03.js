let prompt = require('prompt-sync')();

var firstNumber = Number(prompt('Digite um número: '));
var secondNumber = Number(prompt('Digite um número: '));
var thirdNumber = Number(prompt('Digite um número: '));

var array = []

array.push(firstNumber);
array.push(secondNumber);
array.push(thirdNumber);

console.log(array);

array[0] = thirdNumber;
array[1] = secondNumber;
array[2] = firstNumber;

console.log(array);