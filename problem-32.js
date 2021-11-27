const countUniqueDigits = num => {
    var set = new Set((''+num).split``)
    return set.has('0') ? -1 : set.size;
}

const getFactors = num => {
    for(var i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0)
            if(countUniqueDigits(`${num}${num/i}${i}`) == 9)
                return true;
                
    return false;
}

var sum = 0;
for(var i = 1000; i < 10000; i++)
    if(countUniqueDigits(i) == 4 && getFactors(i))
        sum += i;

console.log(sum);