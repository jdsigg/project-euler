const permute = str => {
    if (str.length < 2) return str;

    var permutations = []; 
    for (var i = 0; i < str.length; i++) {
        var char = str[i];  
        if (str.indexOf(char) !== i) continue;

        var remaining = str.slice(0, i) + str.slice(i + 1, str.length)
        for (var permutation of permute(remaining)) permutations.push(char + permutation)
    }
    return permutations;
}

var arr = permute('0123456789')
console.log(arr[999999])