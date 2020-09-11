var T;
while ((T = readInt()) != null) {
    var arr = [];
    for (let i = 0; i < T; i++) {
        let line = read_line();
        arr.push(line)
    }
    for (let j = 0; j < arr.length; j++) {
        var str = arr[j]
        var res1 = false,
            res2 = false,
            res3 = false;
        //str = str.trim()
        var letter = str.charCodeAt(0)
        if (letter >= 65 && letter <= 90 || letter >= 97 && letter <= 122) {
            res1 = true
        }
        var reg1 = /^[a-zA-Z0-9]+$/
        res2 = reg1.test(str)

        var arrChar = []
        for (let i = 0; i < str.length; i++) {
            arrChar.push(str.charAt(i))
        }
        // console.log(arrChar)
        var res31 = false,
            res32 = false
        var arrNum = []
        for (var n = 0; n <= 9; n++) {
            arrNum.push(n)
        }
        // console.log(arrNum)
        arrChar.forEach(item => {
            var ascNum = item.charCodeAt(0)
            if (ascNum >= 65 && ascNum <= 90 || ascNum >= 97 && ascNum <= 122) {
                res31 = true
            }
            res32 = res32 || arrNum.includes(Number(item))
        })
        res3 = res31 && res32;
        //输出部分
        if (res1 && res2 && res3) {
            print('Accept')
        } else {
            print('Wrong')
        }
    }
}