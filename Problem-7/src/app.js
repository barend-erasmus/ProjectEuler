
function findNthPrime(n) {
    var cnt = -1;
    var x = 1;

	while (cnt < n) {
        if (isPrime(x)) {
            cnt++;
        }

        if (cnt >= n) {
            return x;
        }

        x ++;
    }
}

function isPrime(num){
  
  for (i=2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

var result = findNthPrime(10001);

console.log(result);