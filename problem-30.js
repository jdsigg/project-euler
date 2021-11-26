var count = 0;
for(var i = 2; i < 200000; i++) {
    var asStr = ''+i;
    if(asStr.split``.map(x=>parseInt(x)**5).reduce((a,b)=>a+b) == i)
        count += i;
}
console.log(count)