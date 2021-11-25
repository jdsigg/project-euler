var primesFound = new Set();
const isPrime = num => {
    if(num < 2) return false;
    if(primesFound.has(num)) return true;

    for(var i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0) return false;
    
    primesFound.add(num);
    return true;
}

var maxPrimes = 0, maxAB;
for(var a = -999; a < 1000; a++) {
    for(var b = -1000; b <=  1000; b++) {
    var n = 0;
        while(isPrime(n*n + a*n + b)) {
            n++;
        }
        if(maxPrimes < n) {
            maxPrimes = n;
            maxAB = [a,b];
        }
    }
}
console.log(maxAB.pop()*maxAB.pop())