let prompt = require('prompt-sync')();

var array = JSON.parse(prompt('Digite um array de string: '));// ["Yan", "tallita"]
var string = ''

for(var index = 0; index < array.length; index++) {
    if(string.length < array[index].length) {
        string = array[index]
    }
}

console.log(string)
 




 


















