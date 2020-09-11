line = '638'
var n = parseInt(line.trim().split(' ')[0])
var num = 0
var result = new Map()
for (var a = 0; a <= 9; a++) {
    for (var b = 0; b <= 9; b++) {
        for (var c = 0; c <= 9; c++) {
            if ((a * 200 + b * 10 + c * 10 + 2 * c === n) && a !== b && a !== c && b !== c) {
                num += 1;
                var numMin = Math.min(a * 100 + b * 10 + c, a * 100 + c * 10 + c)
                var numMax = Math.max(a * 100 + b * 10 + c, a * 100 + c * 10 + c)
                result.set(numMin, numMax)
            }
        }
    }
}
if (num === 0) {
    console.log(num)
} else {
    console.log(num)
    for (let item of result) {
        console.log(item[0], item[1])
    }
}