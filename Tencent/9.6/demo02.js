var json1 = { "1": 123, "2": 234, "8": 456 }

var line = JSON.stringify(json1); //字符串

function strToJson(str) {
    return JSON.parse(str);
}
var obj = strToJson(line);
//初始化数组
var max = 0;
for (k in obj) {
    if (parseInt(k) > max) {
        max = parseInt(k)
    }
}

var arr = [];
for (var i = 0; i < max; i++) {
    arr[i] = 0
}
// console.log(arr)
// 放入元素
for (k in obj) {

    var index = parseInt(k.trim()) - 1;
    // console.log(index);
    // console.log(obj[k])
    arr.splice(index, 1, obj[k])
}
console.log(arr)