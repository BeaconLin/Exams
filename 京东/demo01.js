// while (line = read_line()) {
var line = '12800'
var len = line.length;
//console.log(len)
for (var i = len - 1; i >= 0; i--) {
    if (line.charAt(len - 1) !== '0') {
        break;
    }
    len = len - 1;
}
// console.log(len)
var deciNum = parseInt(line.substring(0, len))
var n = 0
while (Math.pow(5, n) < deciNum) {
    n++
}
// console.log(deciNum)
n = n - 1; //n次幂开始
console.log(n)
var temp
var arr = [];
while (deciNum >= 0 && n >= 0) {
    temp = parseInt(deciNum / Math.pow(5, n))
    arr.push(temp)
    if (temp === 0) {
        n--
    } else {
        deciNum = deciNum - temp * Math.pow(5, n)
        console.log(deciNum)
        n--
    }
}
console.log(arr)
console.log(parseInt(arr.join('')))
    // }