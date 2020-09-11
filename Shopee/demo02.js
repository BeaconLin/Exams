let version = "~1.2.1"
let versionList = ["1.2.3", "2.0.1", "2.1.1", "1.2.4"]
    // 二维数组存储
let binaArr = [];
for (let i = 0; i < versionList.length; i++) {
    let temp = versionList[i].split('.')
    binaArr.push(temp)
}
console.log(binaArr)

if (version[0] === " ") {
    for (let i = 0; i < versionList.length; i++) {
        if (version.substring(1) === versionList[i]) {
            return versionList[i]
        }
    }
} else if (version[0] === "~") {
    let max = versionList[0][2];
    for (let i = 0; i < versionList.length; i++) {
        if (version.substring(1)[0] === versionList[i][0] && version.substring(1)[0] === versionList[i][1]) {

        }
    }
} else if (version[0] === "^") {

} else {
    return result = "invalid"
}
return result = "invalid"