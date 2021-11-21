var largestPalindrome = 0;
for(var i = 100; i < 1000; i++) {
    for(var j = 100; j < 1000; j++) {
        var product = i * j;
        if(product == (''+product).split``.reverse().join``)
            largestPalindrome = Math.max(largestPalindrome, product);
    }
}

console.log(largestPalindrome);