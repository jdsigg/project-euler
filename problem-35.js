const primes = new Set();

const isPrime = num => {
    if(primes.has(num)) return true;

    for(var i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0)
            return false;
    
    primes.add(num);
    return true;
}

var numCircular = 0;
for(var i = 2; i < 1000000; i++) {
    var arr = (''+i).split``;
    var isCircular = true;
    for(var j = 0; j < arr.length; j++) {
        var newNum = parseInt(arr.join``);
        if(!isPrime(newNum)) {
            isCircular = false;
            break;
        }
        arr.unshift(arr.pop())
    }

    if(isCircular)
        numCircular++;
}

console.log(numCircular);