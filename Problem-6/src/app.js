var sumOfNaturalNumbers = 0;
var sumOfSquaredNaturalNumbers = 0;

var limit = 100;


for (var i = 1; i <= limit; i ++) {
    sumOfNaturalNumbers += i;
    sumOfSquaredNaturalNumbers += Math.pow(i, 2)
}

var difference = Math.pow(sumOfNaturalNumbers, 2) - sumOfSquaredNaturalNumbers;

console.log(difference);