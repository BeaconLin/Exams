var arr = [{
        start: 10,
        end: 20
    }, {
        start: 10,
        end: 30
    },
    {
        start: 25,
        end: 30
    },
    {
        start: 10,
        end: 15
    }
]

function findRoom(arr) {
    var sta = arr[0].start
    var en = arr[0].end
    arr.forEach(item => {
        sta = Math.min(item.start, sta)
        en = Math.max(item.end, en)
    })
    var res = new Array
    for (var i = sta; i < en; i++) {
        res[i] = 0
    }
    arr.forEach((item) => {
        var len = item.end - item.start
        for (var j = 0; j < len; j++) {
            res[item.start + j]++
        }
    })
    var maxRoom = 0
    for (var k = sta; k < en; k++) {
        if (maxRoom < res[k]) {
            maxRoom = res[k]
        }
    }
    console.log(res)
    return maxRoom
}
console.log(findRoom(arr))