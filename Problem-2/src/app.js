var previousNumber = 0;
var nextNumber = 1;
var tempValue = 0;
var sum = 0;

while(tempValue < 4000000) {
    if (tempValue % 2 == 0) {
        sum += tempValue;
    }

    tempValue = previousNumber + nextNumber;
    previousNumber = nextNumber;
    nextNumber = tempValue;
}

console.log(sum);


