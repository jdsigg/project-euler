const getDivisors = num => {
    var divisors = new Set();
    for(var i = 1; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            divisors.add(i);
            divisors.add(num / i);
        }
    }
    return divisors.size;
}

var currentTriangularNumber = 3;
var counter = 3;

while(getDivisors(currentTriangularNumber) <= 500) {
    currentTriangularNumber += counter;
    counter++;
}

console.log(currentTriangularNumber);