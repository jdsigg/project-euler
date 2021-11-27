var factorials = [1];
for(var i = 1; i < 10; i++)
    factorials.push(factorials[i-1]*i);

var sum = 0;
for(var i = 3; i < 2540161; i++) {
    var asStr = ''+i;
    if(asStr.split``.map(Number).map(x => factorials[x]).reduce((a,b) => a + b) == i)
        sum += i;
}

console.log(sum);