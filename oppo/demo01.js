// (async function() {
//     await console.log(1);
//     console.log(2)
// })().then(() => {
//     console.log(3)
// })
// console.log(4)
// setTimeout(function() {
//     console.log(5)
// }, 0)

// function findAveNum(arr) {
//     var len = arr.length;
//     var newArr = [];
//     arr.forEach(item => {
//         if (!newArr.includes(item)) {
//             newArr.push(item)
//         }
//     })
//     console.log(newArr)
// }
// var array=[]

function chinese(num) {
    var arr = []
    var len = 5
    var max = 10000
        //确定数字长度
    for (var i = 10000; i >= 1; i = i / 10) {
        if (Math.floor(num / i) !== 0) {
            break
        }
        len = len - 1
    }
    console.log(len)
        //查找表
    var map = new Map()
    map.set(0, '零')
    map.set(1, '一')
    map.set(2, '二')
    map.set(3, '三')
    map.set(4, '四')
    map.set(5, '五')
    map.set(6, '六')
    var res = ''
    while (num !== 0) {

    }


}



var num = 235
chinese(num)