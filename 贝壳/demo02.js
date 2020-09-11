var arr = ['S', 'J', 'J', 'B']
var s_left = arr[0];
var s_right = arr[1];
var b_left = arr[2];
var b_right = arr[3];
var left = 0,
    right = 0;
//先计算左手获胜概率 
if (b_left == 'J' && b_right == 'J') {
    if (s_left !== 'S') left = 0;
    else left = 2;
    if (s_right !== 'S') right = 0;
    else right = 2;
}
if (b_left == 'S' && b_right == 'S') {
    if (s_left !== 'B') left = 0;
    else left = 2;
    if (s_right !== 'B') right = 0;
    else right = 2;
}
if (b_left == 'B' && b_right == 'B') {
    if (s_left !== 'J') left = 0;
    else left = 2;
    if (s_right !== 'J') right = 0;
    else right = 2;
}

if ((b_left == 'J' && b_right == 'B') || (b_left == 'B' && b_right == 'J')) {
    if (s_left !== 'B') left = 1;
    else left = 0;
    if (s_right !== 'B') right = 1;
    else right = 0;
}
if ((b_left == 'J' && b_right == 'S') || (b_left == 'S' && b_right == 'J')) {
    if (s_left !== 'J') left = 1;
    else left = 0;
    if (s_right !== 'J') right = 1;
    else right = 0;
}
if ((b_left == 'B' && b_right == 'S') || (b_left == 'S' && b_right == 'B')) {
    if (s_left !== 'S') left = 1;
    else left = 0;
    if (s_right !== 'S') right = 1;
    else right = 0;
}
if (left === right) {
    console.log("same")
} else if (left > right) {
    console.log("left")
} else {
    console.log("right")
}