let A = [1, 3, 2]
let BC = [{ 2: 1 }, { 3: 2 }, { 3: 3 }, { 1: 1 }];
// 从小到大排序A
let sortA = A.sort(function(a, b) {
    return a - b
});
//从小到大排带宽和预算
// let maxKey = Object.keys(BC[0])[0]
// let maxVal = Object.keys(BC[0])[1]
// let minKey = Object.keys(BC[0])[0]
// let minVal = Object.keys(BC[0])[1]

let sortBC = new Array()
sortBC.push(BC[0]);
//插入法排序
BC.forEach(item => {
    var itemKey = Object.keys(item)[0]
    var itemVal = Object.keys(item)[0]
    for (let i = 0; i < sortBC.length; i++) {
        //大于某个数
        if (itemKey > Object.keys(sortBC[i])[0]) {
            sortBC.splice(i + 1, 0, item)
            break
        }
        //键名相等，比较键值
        if (itemKey === Object.keys(sortBC[i])[0]) {
            //值小于第一个的值
            if (itemVal < Object.keys(sortBC[i])[1]) {
                sortBC.splice(i, 0, item)[sortBC[i], sortBC[i + 1]] = [sortBC[i + 1], sortBC[i]]
                break
            }
            //值大于第一个的值
            var j = 0
            while (itemVal > Object.keys(sortBC[i + j])[1]) {
                j++
            }
            sortBC.splice(i + j, 0, item)
            break
        }
        if (itemKey < Object.keys(sortBC[i])[0]) {
            sortBC.unshift(item)
            break
        }
    }
})
sortBC.pop()
console.log(sortBC)