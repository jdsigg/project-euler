const isPrime = n => {
    for(var i = 2; i <= Math.sqrt(n); i++)
        if(n % i == 0) return false;
    return n > 1;
}

var num = 2;
var count = 0;
while(count < 10001) {
    if(isPrime(num)) count++;
    num++;
}

console.log(num-1);