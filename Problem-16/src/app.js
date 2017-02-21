let bigInt = require("big-integer");

let result = 0;
 
let number = bigInt(2).pow(1000);
 
while (number.greater(0)) {
    result += number.mod(10).toJSNumber();
    number = number.divide(10);
}

console.log(result.toString());