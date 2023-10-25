var decimal = 25

var bin = ''

for (var index = 0; decimal > 1 ; index++ ) {
    var resto = decimal % 2
    decimal = Math.floor(decimal / 2)

    bin = bin + resto
}

var result = ''

for (index = bin.length - 1; index >= 0; index--) {
    result += bin[index]
}
console.log(1 + result)
