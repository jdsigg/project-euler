var sum = 0;

const isPrime = n => {
    for(var i = 2; i <= Math.sqrt(n); i++)
        if(n % i == 0) return false;
    return n > 1;
}

for(var i = 2; i < 2000000; i++)
    if(isPrime(i))
        sum += i

console.log(sum)