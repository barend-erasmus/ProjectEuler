let bigInt = require("big-integer");
let fs = require('fs');


fs.readFile(__dirname + '/numbers.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  let numbers = data.split(/\r?\n/);

  let value = bigInt();

  for (let i = 0; i < numbers.length; i++) {
      value = value.plus(bigInt(numbers[i]));
  }

  console.log(value.toString().substring(0,10));
});
