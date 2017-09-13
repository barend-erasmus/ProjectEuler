const fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

fs.readFile('./names.txt',  'utf8', processFile);

function processFile(err, data) {
    if (err) {
        throw err;
    }

    let names = data.split(',');

    names = names.map((x) => x.substring(1, x.length - 1).toLowerCase());

    names = names.sort();

    let sum = 0;

    names.forEach((name, index) => {
        let score = 0;

        name.split('').forEach((char) => {
            score += alphabet.indexOf(char) + 1;
        }, this);

        score = score * (index + 1);

        sum += score;
    }, this);

    console.log(sum);
}