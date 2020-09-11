//赛马输入输出示例
var N
while ((N = readInt()) != null) {
    var ex = 0;
    for (let i = 0; i < N; i++) {
        let x = readInt();
        let p = readInt();
        //var x=str.trim().split(' ')[0]
        //var p=str.trim().split(' ')[1]
        var temp = parseFloat(p / 100).toFixed(3);
        ex += x * temp
    }
    print(parseFloat(ex).toFixed(3))
}


// Javascript输入输出
var N, M;
// 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
while ((N = readInt()) != null && (M = readInt()) != null) {
    print(N + ' ' + M);
    // 循环读取“接下来的M行”
    for (let i = 0; i < M; i++) {
        let a = readInt();
        let b = readInt();
        let c = readInt();
        // 每行是3个整数，a，b，c。
        print(a + ' ' + b + ' ' + c);
    }
    // M行读取完了，就又要开始下一组了，去while那里。
}