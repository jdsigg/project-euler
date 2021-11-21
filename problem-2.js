var fib = [1, 2];
while(fib[fib.length - 1] < 4000000) {
    var latest = fib[fib.length - 1];
    var nextLatest = fib[fib.length - 2];
    fib.push(latest + nextLatest);
}

console.log(fib.filter(x => x % 2 == 0).reduce((a,b) => a + b))