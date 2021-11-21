const fs = require('fs');

var lines = fs.readFileSync("./problem-22.txt", 'utf8')
        .split`,`
        .map(x => x.substring(1, x.length-1))
        .sort();

var score = 0;
for(var i = 0; i < lines.length; i++) {
    var position = i + 1;
    var name = lines[i].split``.map(x=>x.charCodeAt(0)-64).reduce((a,b) => a + b);
    score += (position * name);
}

console.log(score)