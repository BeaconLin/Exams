var arr = [2, 3, 1, 1, 4]
    // var arr = JSON.parse(line)

function solution(arr) {
    var len = arr.length;
    var dp = new Array(len).fill(-1)
    for (let i = 0; i < len; i++) {
        for (let j = 1; i + j < len && j <= arr[i]; j++) {
            dp[i + j] = Math.min(dp[i + j], (dp[i] + 1))
        }
    }
    if (dp[len - 1] != -1) {
        return dp[len - 1]
    } else {
        return 'Infinity'
    }


}
var res = solution(arr)
console.log(res)