var line = '0,0,0,0;1,1,1,0;1,1,1,0'
    //映射成二维数组
var arr = line.split(';')

// var row = 0;
// var col = 1;
var maze = [];
for (var i = 0; i < arr.length; i++) {
    maze[i] = arr[i].split(',')
}

function dfs(maze, row, col) {
    if (row < 0 || row >= maze.length || col < 0 || col > maze[0].length || maze[row][col] == '1') {
        return false
    }
    if (row == maze.length - 1 && col == maze[0].length - 1) {
        return true
    }
    maze[row][col] = '1';
    return (dfs(maze, row - 1, col) || dfs(maze, row + 1, col) || dfs(maze, row, col - 1) || dfs(maze, row, col + 1))
}


console.log(dfs(maze, 0, 0))