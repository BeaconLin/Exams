var str = 'ababababc'

var longest = ''
var index = 2;
var temp = ''
while (index <= str.length) {
    var temp = str.substring(0, index)
    if (temp.substring(0, index / 2) === temp.substring(index / 2)) {
        longest = temp.substring(index / 2)
    }

    index = index + 2;
}
var result
if (longest !== "") {
    result = str.length - longest.length + 1
} else {
    result = str.length
}

console.log(result)