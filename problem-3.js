var factors = new Set();
var curr = 2;
var num = 600851475143;
while(num !== 1) {
    while(num % curr == 0) {
        factors.add(curr);
        num /= curr;
    }
    curr++
}

const isPrime = n => {
    for(var i = 2; i <= Math.sqrt(n); i++)
        if(n % i == 0) return false;
    return n > 1;
}

factors = [...factors];
for(var i = factors.length - 1; i >= 0; i++) {
    var factor = factors[i];
    if(isPrime(factor)) {
        console.log(factor);
        break;
    }
}