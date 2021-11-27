const isPalindrome = num => {
    var str = `${num}`;
    return str == str.split``.reverse().join``;
}

const getBinary = num => {
    return (num >>> 0).toString(2);
}

var sum = 0;
for(var i = 1; i < 1000000; i++) {
    if(isPalindrome(i) && isPalindrome(getBinary(i)))
        sum += i;
}
console.log(sum);