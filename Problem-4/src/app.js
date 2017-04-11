var maximumNumber = 999;
var minimumNumber = 99;
var largestNumber = 0;

for (var x = maximumNumber; x > minimumNumber; x --) {
    for (var y = maximumNumber; y > minimumNumber; y --) {
        if ((x * y).toString() == (x * y).toString().split('').reverse().join('')) {
            if (largestNumber < x * y) {
                largestNumber = x * y;
            }
        }
    }
}

console.log(largestNumber);