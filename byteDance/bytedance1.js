function sum(num1) {
    var all = num1;
    var add = function(num2) {
        all = all + num2;
        return add;
    }
    add.toString = function() {
        return all;
    }
    return add;
}
console.log(sum(1, 2, 3)(4));