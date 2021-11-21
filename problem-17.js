var map = {
    0: '',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
    100 : 'one hundred',
    200 : 'two hundred',
    300 : 'three hundred',
    400 : 'four hundred',
    500 : 'five hundred',
    600 : 'six hundred',
    700 : 'seven hundred',
    800 : 'eight hundred',
    900 : 'nine hundred',
}

var totalLetters = 0;
for(var i = 1; i < 1000 ; i++) {
    var asStr = "";
    var currentNumber = i;
    if(currentNumber >= 100) {
        var hundreds = Math.floor(currentNumber / 100) * 100;
        asStr += map[hundreds];
        currentNumber -= hundreds;
    }

    if(currentNumber !== 0 || asStr === "") {
        if(asStr !== "") asStr += " and "
        if(currentNumber >= 20) {
            var tens = Math.floor(currentNumber / 10) * 10;
            asStr += map[tens];
            currentNumber -= tens;
        }
    }
    asStr += map[currentNumber];
    totalLetters += asStr.match(/[a-z]/g).length;
}
console.log(totalLetters + 11);