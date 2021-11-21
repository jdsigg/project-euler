const collatz = n => {
    var count = 1;
    while(n !== 1) {
        if(n % 2 == 0) n /= 2;
        else n = 3*n + 1
        count++;
    }
    return count;
}

var maxSeq = 0;
var seqNum = -1;
for(var i = 1; i < 1000000; i++) {
    var length = collatz(i);
    if(length > maxSeq) {
        maxSeq = length;
        seqNum = i;
    }
}

console.log(seqNum);