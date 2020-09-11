// var arr = []
// console.log(JSON.stringify(arr) === '[]')
// console.log(typeof [])

function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    var len = s1.length + s2.length - 4
    try { m += s1.split(".")[1].length } catch (e) {}
    try { m += s2.split(".")[1].length } catch (e) {}
    var res = (Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(len);
    while (res.endsWith('0')) {
        res = res.substring(0, res.length - 1)
    }
    return res
}
var num1 = 0.004
var num2 = 0.5
var result = accMul(num1, num2)
console.log(result)
    // console.log(result.endsWith('0'))

// console.log(result.substring(0, result.length - 1))