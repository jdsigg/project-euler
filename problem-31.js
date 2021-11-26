var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var dp = [new Array(201).fill(0)];
for(var i = 0; i < coins.length; i++) {
    dp.push(new Array(201));
}

for(var arr of dp)
    arr[0] = 1;

for(var i = 1; i < dp.length; i++) { //considering coins[i-1]
    for(var j = 1; j < dp[i].length; j++) { //for every value of [1,201)
        var noUse = dp[i-1][j]; //the number of ways we can make j without coins[i-1]
        var canUse = j - coins[i-1]; //if we use coins[i-1], how much is our total
        if(canUse < 0) //can't use coins[i-1] if adding it is greater than j
            dp[i][j] = noUse;
        else
            dp[i][j] = noUse + dp[i][j-coins[i-1]];
    }
}

console.log(dp.pop().pop())