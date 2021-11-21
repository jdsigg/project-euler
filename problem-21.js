const sumProperDivisors = num => {
    var sum = 0;
    for(var i = 1; i < num; i++)
        if(num % i === 0)
            sum += i;    

    return sum;
}

var total = 0;
for(var i = 1; i < 10000; i++) {
    var sum = sumProperDivisors(i); //d(i) = sum
    var reverse = sumProperDivisors(sum); //d(sum) = reverse

    if(sum !== reverse && reverse === i) {
        total += sum;
    }
}

console.log(total);