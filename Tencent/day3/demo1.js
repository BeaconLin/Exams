// var str = '你12345678z'
// var N = 7
var res = ''
    // console.log(str.substring(0, str.length))
var len = N - 3
    // console.log(str.charCodeAt(0)) //48
    // console.log(str.charCodeAt(9)) //57

for (var i = 0; i < str.length; i++) {
    //如果是中文
    if (str.charCodeAt(i) > 122) {
        len = len - 2
        res = res + str[i]
    } else {
        //英文
        len = len - 1
        res = res + str[i]
    }
    if (len === 0) {
        break
    }
    if (len < 0) {
        res = res.substring(0, str.length - 1)
        break
    }
}
res = res + '...'