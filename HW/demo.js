var str = '23'
var obj = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f']

}

var arr = str.split('')
var len = arr.length
var i = 0
    //初始化数组 元素为空字符''
var res = ['', '', '']
    // for (var m = 0; obj[str[0]].length; m++) {
    //     res[m] = ' '
    // }
while (i < len) {
    res.forEach((item, index) => {
        var lenRes = res.length
        for (var j = 0; j < obj[arr[i]].length; j++) {
            // 中间结果循环
            res.push(item + obj[arr[i]][j])
        }
        console.log(res)
        res.splice(0, lenRes)
    })
    i++

}
console.log(res)