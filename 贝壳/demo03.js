var T = 2;
var line1 = "8 20"
var line2 = "1 4 3 2 6 3 7 9"
var n = parseInt(line1.split(" ")[0])
var m = parseInt(line1.split(" ")[1])
    // console.log(m)
var food = line2.split(" ").map(item => Number(item)) //数组 数字
var foodSort = food.sort((a, b) => a - b)
    // console.log(foodSort)
var num = 0
var temp = 0
while (num < n) {
    temp += foodSort[num]
    if (temp > m) {
        break
    }
    num++
}
console.log(num)