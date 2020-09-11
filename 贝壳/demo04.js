var line2 = "1 2 1 2 1 2 1"
var tree = line2.split(" ").map(item => Number(item))
for (let i = 0; i < tree.length - 1; i++) {
    var left = tree[i - 1]
    var right = tree[i + 1]
    if (left > tree[i] && right > tree[i]) {
        //右边小 减右边
        if (right < left) {
            tree[i + 1] = tree[i]
        } else {
            tree[i - 1] = tree[i]
        }
    }
    console.log(tree)
}
let result = tree.join(' ')
console.log(result)