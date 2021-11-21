for(var i = 1; i < 999; i++) {
    for(var j = i+1; j < 999; j++) {
        for(var k = j + 1; k < 999; k++) {
            if(i**2 + j**2 === k**2) {
                if(i + j + k === 1000) {
                    console.log(i, j, k, i*j*k);
                    process.exit(0);
                }
            }
        }
    }
}