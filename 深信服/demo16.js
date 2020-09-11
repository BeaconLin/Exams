var line = '/a,/a/b,/a/c,/b/c,/b/c/d,/b/cf'
var arr = line.split(',')
var map = new Map()
for (var i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
        map.set(arr[i], 1)
    } else {
        var count = map.get(arr[i]) + 1
        map.set(arr[i], count)
    }
    var inline = arr[i].split('/')
    for (var j = 0; j < inline.length; j++) {
        if (!map.has(inline[j])) {
            map.set()
        } else {

        }

    }

}