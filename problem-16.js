var big = BigInt(1);
for(var i = 0; i < 1000; i++)
    big = big * BigInt(2);

console.log(big.toString().split``.map(Number).reduce((a,b)=>a+b))