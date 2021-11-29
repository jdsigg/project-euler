var biggest = 918273645;

var num = 10;
var count = 1;

const isPandigital = str => {
    var set = new Set(str.split``);
    if(set.size !== str.length || set.has('0')) return false;
    return true;
}

// Don't know why, but this blocks at num === 9327, pandigital === 932718654
while(true) {
    var str = ``;
    while(true) {
        str = `${str}${num*count}`;
        if(!isPandigital(str)) break;
        else if(str.length === 9) {
            var asNum = parseInt(str);
            if(asNum > biggest) {
                console.log("Found new biggest for:", asNum, num);
                biggest = asNum;
            }
        }
        count++;
    }
    count=1;
    num++;    
}