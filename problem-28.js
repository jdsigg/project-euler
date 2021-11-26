var sum = 1;
var counter = 3;
for(var i = 1; i < 501; i++) {
    var square = counter**2;
    sum += (
        square +
        square - 2*i +
        square - 4*i +
        square - 6*i
    )
    counter += 2;
}

console.log(sum);