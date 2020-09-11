var line1 = "1,2,4"
var line2 = "1,3,4"
var arr1 = line1.split(",");
var arr2 = line2.split(",");
var res = []
for (var i = 0; i < arr1.length; i++) {
    res.push(parseInt(arr1[i]))
}
for (var i = 0; i < arr1.length; i++) {
    res.push(parseInt(arr2[i]))
}

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
var result = bubbleSort(res)
console.log(result)