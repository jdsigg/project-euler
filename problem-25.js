var fib = [BigInt(1), BigInt(1)];
var count = 2;
while(fib[fib.length - 1].toString().length < 1000) {
    fib.push(
        fib[fib.length - 2] + fib[fib.length - 1]
    )
    fib.shift()
    count++;
}

console.log(count);