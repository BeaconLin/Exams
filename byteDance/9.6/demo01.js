if (n <= 2) {
    return arr[n];
}
//var temp = Math.floor(n/2)-1;
var j = n - 3;
var temp = 0;
//一个连续爬楼的情况
while (j >= 1) {
    temp += j;
    j = j - 2;
}
//分段连续爬楼 两个4
var j = n - 8;
while (j >= 1) {
    temp += j;
    j--;
}
// 分段爬 4+6
var j = n - 10;
while
var res = arr[n] - del;
return res;

while (line = readline()) {
    var lines = line.split(" ");
    var n = parseInt(lines[0]);
    var step = function(n) {
        const arr = [];
        arr[0] = 1;
        arr[1] = 1;
        arr[2] = 2;
        if (n >= 3) {
            for (let i = 3; i <= n; i++) {
                arr[i] = arr[i - 3] + arr[i - 1];
            }
        }
        return arr[n];
    }
    var res = step(n);
    console.log(res);
}