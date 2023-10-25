let prompt = require('prompt-sync')();

for(var index = 1; index <= 10; index++) {
    var resultOne = 1 * index;
    var resultTwo = 2 * index;
    var resultThree = 3 * index;
    var resultFour = 4 * index;
    var resultFive = 5 * index;
    var resultSix = 6 * index;
    var resultSeven = 7 * index;
    var resultEight = 8 * index;
    var resultNine = 9 * index;
    var resultTen = 10 * index;
    console.log(`  ${index} x 1 = ${resultOne} \n  ${index} x 2 = ${resultTwo}\n  ${index} x 3 = ${resultThree}\n  ${index} x 4 = ${resultFour}\n  ${index} x 5 = ${resultFive}\n  ${index} x 6 = ${resultSix}\n  ${index} x 7 = ${resultSeven}\n  ${index} x 8 = ${resultEight}\n  ${index} x 9 = ${resultNine}\n  ${index} x 10 = ${resultTen}\n`);

}
