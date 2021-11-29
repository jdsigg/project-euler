var count = 1;
var str = ``;
while(str.length < 1000000) {
    str = `${str}${count++}`
}
console.log(
    parseInt(str[0])*
    parseInt(str[9])*
    parseInt(str[99])*
    parseInt(str[999])*
    parseInt(str[9999])*
    parseInt(str[99999])*
    parseInt(str[999999])
)