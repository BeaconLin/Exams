str = "accaccx";

function compressString(str) {
    let result = "";
    let i = 0;
    let j = 0;
    while (j < str.length - 1) {
        // 不相等
        if (str[j] !== str[j + 1]) {
            if (i === j) {
                result += str[j]
                j++;
                i++;
            } else {
                result += (j - i + 1)
                result += str[j];
                j++;
                i = j;
            }

        } else {
            j++
        }
    }
    if (i === j) {
        result += str[str.length - 1]
    } else {
        result += (j - i + 1) + str[str.length - 1];

    }
    return result;
}
console.log(compressString(str))
    // 相等



// write code here
// if (str.length === 0) {
//     return ""
// }
// const result = "";
// // 初始化一个map
// const map = new Map();
// map.set(str[0], 1);
// // 遍历字符串
// for (let i = 1; i < str.length; i++) {
//     //  i与i+1不相等时
//     if (str[i] !== str[i - 1]) {
//         //i-1的字母出现一次
//         if (map.get(str[i - 1]) === 1) {
//             result += str[i - 1];
//         } else {
//             // 出现多次
//             result += map.get(str[i - 1]);
//             result += str[i - 1];
//         }
//         map.delete();
//         map.set(str[i], 1);
//     } else {
//         //相等的时候
//         map.get(str[i]) ++;
//     }
// }