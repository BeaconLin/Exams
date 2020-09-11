function search(str) {
    var len = str.length;
    var obj = new Object();
    //遍历存入对象
    for (var i = 0; i < len; i++) {
        if (obj.str[i] == null) {
            obj.str[i]++;
        }
    }
    //查找最多的
}
search('acbaab');