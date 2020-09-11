var n
    //用数组记录 长度为n的全1数组
var arr = new Array(n).fill(1)
index = 1; //对应素数2
var count = 0 //素数数量
    //判断是否为素数的函数
function isPrime(num) {
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(5))
while (index <= Math.sqrt(n)) {
    //遇到素数，将n以内的整数倍全置0 
    if (isPrime(index + 1)) {
        var j = 1;
        while ((index + 1) < n) {
            arr[(index + 1) * j - 1] = 0;
            j++
        }
        count++
        index = arr.findIndex(1)
    } else {
        //不是素数 则判断下一个没有被置0的数
        arr[index] = 0
        index = arr.findIndex(1)
    }
}
var result = n - count;


var reverse = function(x) {
    if (x < 0) {
        var type = -1
    } else {
        var type = 1
    }
    var arr = []
    while (x > 0) {
        arr.push(x % 10)
        x = x / 10
    }
    var res = 0
    for (var i = 0; i < arr.length; i++) {
        res = res * 10 + arr.pop()
    }
}