var line = "8"
var n = parseInt(line.split(" ")[0]);
// console.log(n)
var line1 = "10 15 13 2 6 4 2 9";
var arr = line1.split(" ");
var array = []
for (var i = 0; i < arr.length; i++) {
    array.push(parseInt(arr[i]))
}
//先排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
var sortArr = bubbleSort(array)
var mid = Math.floor((n - 1) / 2)
var map = new Map()

for (var i = 0; i < n; i++) {
    var temp = sortArr.splice(i, 1)
    var add = temp[0] + '';
    map.set(add, sortArr[mid])
    sortArr.splice(i, 0, add)
}
for (var j = 0; j < arr.length; j++) {
    console.log(Number(map.get(arr[j])))
}