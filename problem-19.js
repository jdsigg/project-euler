var numSundays = 0;
for(var year = 1901; year < 2001; year++) {
    for(var month = 0; month < 12; month++) {
        var firstOfTheMonth = new Date(year, month, 1);
        if(firstOfTheMonth.getDay() === 0)
            numSundays++;
    }
}

console.log(numSundays);