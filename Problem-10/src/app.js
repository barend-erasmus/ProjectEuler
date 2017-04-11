function isPrime(n) {

   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   var isPrime = true;

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   return isPrime;
}

var limit = 2000000;
var sum = 0;

for (var i = 2; i < limit; i ++) {
    if (isPrime(i)) {
        sum += i;
    }
    
}

console.log(sum);