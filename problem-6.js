var sumOfSquares = 0;
var runningSum = 0;

for(var i = 1; i <= 100; i++) {
    sumOfSquares += i**2;
    runningSum += i;
}

console.log(runningSum**2 - sumOfSquares);