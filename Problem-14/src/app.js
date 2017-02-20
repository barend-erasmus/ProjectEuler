let startingNumber = 0;
let maxSeqLength = 0;

for (let i = 1000000; i > 0; i --)
{
    let seq = getSequence(i);

    if (seq.length > maxSeqLength) {
        maxSeqLength = seq.length;
        startingNumber = i;
    }

    
}

console.log(startingNumber);
console.log(maxSeqLength);

function getSequence(startingNumber) {

    let seq = [];

    let currentNumber = startingNumber;

    seq.push(currentNumber);

    while (currentNumber != 1) {
        currentNumber = getNextNumberInSequence(currentNumber);
        seq.push(currentNumber);
    }

    return seq;
}

function getNextNumberInSequence(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return (3 * n) + 1;
    }
}