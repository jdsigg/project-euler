var big = BigInt(1);
for(var i = 1; i < 101; i++)
    big = big * BigInt(i);
console.log(big.toString().split``.map(Number).reduce((a,b)=>a+b))