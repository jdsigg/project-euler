var set = new Set();
for(var a = 2; a <= 100; a++)
    for(var b = 2; b <= 100; b++)
        set.add(BigInt(a)**BigInt(b))

console.log(set.size)