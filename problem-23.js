const sumDivisors = num => {
    var sum = 0;
    for(var i = 1; i < num; i++) {
        if(num % i == 0)
            sum += i;
    }
    return sum;
}

const abundants = [];
for(var i = 1; i < 28124; i++) {
    var sum = sumDivisors(i);
    if(sum > i) {
        abundants.push(i);
    }
}

var allSums = new Set();
for(var i = 0; i < abundants.length; i++) {
    for(var j = 0; j < abundants.length; j++) {
        allSums.add(abundants[i] + abundants[j]);
    }
}

var sum = 0;
for(var i = 0; i < 28124; i++) {
    if(!allSums.has(i))
        sum += i;
}

console.log(sum);