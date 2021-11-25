const longDivide = (numerator, denominator) => {
    var seenNumerators = new Map();
    var digits = [];
    var position = 0;
    while(!seenNumerators.has(numerator) && numerator != 0) {
        seenNumerators.set(numerator, position++);
        numerator *= 10;
        var result = Math.floor(numerator / denominator);
        numerator -= result * denominator;
        digits.push(result);
    }
    if(numerator == 0)
        return 0;
    
    return position - seenNumerators.get(numerator);
}

var start = 2, end = 1000;
var longestCycle = 0;
var longestCycleNum;
for(var i = start; i < end; i++) {
    var result = longDivide(1, i);
    if(longestCycle < result) {
        longestCycle = result;
        longestCycleNum = i;
    }
}
console.log(longestCycleNum);