var primes = new Set();
const isPrime = num => {
    if(num <= 1) return false;
    if(primes.has(num)) return true;

    for(var i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0)
            return false;

    primes.add(num);
    return true;
}


var sum = 0;
var truncatablePrimesFound = 0;
var count = 8;

while(truncatablePrimesFound < 11) {

    var left = `${count}`.split``;
    var right = [...left];
    var prime = true;

    while(left.length > 0 && right.length > 0) {
        if(
            isPrime(parseInt(left.join``)) &&
            isPrime(parseInt(right.join``))
        ) {
            left.pop();
            right.shift();
        } else {
            prime = false;
            break;
        }
    }

    if(prime) {
        truncatablePrimesFound++;
        sum += count;
    }
    count++;
}

console.log(sum);