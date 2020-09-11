var line = '#FFCCDD'
    // var line = '#ccc'

function ox2rgb(line) {
    let str = line.substring(1, line.length);
    // console.log(str)
    //长度为6的情况
    if (str.length === 6) {
        var res = 'rgb('
        for (let i = 0; i < 3; i++) {
            var num = 0
            var index = i * 2 //十位
            var num1 = 0
            var code = str.toUpperCase().charCodeAt(index)
            if (code >= 65 && code <= 70) {
                num1 = (code - 64 + 9) * 16
            } else if (Number(str.charCodeAt(index)) >= 0 && Number(str.charCodeAt(index)) <= 9) {
                num1 = Number(str.charCodeAt(index)) * 16
            } else {
                return line
            }

            index = i * 2 + 1 //个位
            var num2 = 0
            var code = str.toUpperCase().charCodeAt(index)
            if (code >= 65 && code <= 70) {
                num2 = code - 64 + 9
            } else if (Number(str.charCodeAt(index)) >= 0 && Number(str.charCodeAt(index)) <= 9) {
                num2 = Number(str.charCodeAt(index))
            } else
                return line

            num = num1 + num2
            if (i < 2) {
                res = res + num + ', '
            }
            if (i >= 2) {
                res = res + num + ')'
            }
        }
        return res
    } else if (str.length === 3) {
        var res = 'rgb('
        for (let i = 0; i < 3; i++) {
            var num = 0
            var code = str.toUpperCase().charCodeAt(index)
            if (code >= 65 && code <= 70) {
                num = (code - 64 + 9) * 16 + (code - 64 + 9)
            } else if (Number(str.charCodeAt(index)) >= 0 && Number(str.charCodeAt(index)) <= 9) {
                num = Number(str.charCodeAt(index)) * 16 + Number(str.charCodeAt(index))
            } else {
                return line
            }
            if (i < 2) {
                res = res + num + ', '
            }
            if (i >= 2) {
                res = res + num + ')'
            }
        }
        return res
    } else {
        return line
    }
}

console.log(ox2rgb(line))