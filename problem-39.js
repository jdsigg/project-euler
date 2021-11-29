const triplesCount = {};
const seen = new Set();

for(var a = 1; a <= 998; a++) {
    for(var b = 1; b <= 998; b++) {
        for(var c = 1; c <= 998; c++) {
            if(a**2 + b**2 === c**2) {
                var sum = a + b + c;
                var unique = [a,b,c].sort((a,b)=>a-b).join`,`;
                if(sum <= 1000 && !(seen.has(unique))) {
                    seen.add(unique);
                    sum in triplesCount ? triplesCount[sum]++ : triplesCount[sum] = 1;
                }
            }
        }
    }
}

var maxVal = -1;
var maxKey = -1;
for(const [key, value] of Object.entries(triplesCount)) {
    if(value > maxVal) {
        maxVal = value;
        maxKey = key;
    }
}

console.log(maxKey);