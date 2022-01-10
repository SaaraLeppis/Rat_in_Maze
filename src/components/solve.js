let N;

/* atrribute for function  is maze to be solved
   function solves the Maze by Bactracking: uses solveMazeUtil-function. If path found returns solved maze, otherwise empty list will be returned*/
function solveMaze(maze) {

    N = maze.length; // maze size

    if (solveMazeUtil(maze, 0, 0) === false) {
        return [];
    }
    return maze;
}

// if cell is free (1) and not out of bounds
const isSafe = (maze, row, col) => {
    return (row >= 0 && row < N && col >= 0 && col < N && maze[row][col] === 1)
}

// recursive function to go through the maze (r = row, c = column)
function solveMazeUtil(maze, r, c) {
    // if last cell => true
    if (r === N - 1 && c === N - 1) {
        maze[r][c] = 2;
        return true;
    }
    if (isSafe(maze, r, c)) {
        // if sell visited already (set to value 2)
        if (maze[r][c] === 2)
            return false;
        maze[r][c] = 2
        // move in x-diercetion => to nect column
        if (solveMazeUtil(maze, r, c + 1))
            return true;
        // move in y-direction => to next row 
        if (solveMazeUtil(maze, r + 1, c))
            return true;

        //if moving in y- direction doesn't give solution then move backwards in x-direction
        // => to previous column
        if (solveMazeUtil(maze, r, c - 1))
            return true;

        maze[r][c] = 1//return 1 to original maze so that it shows free sell (as in original) in final solution 
    }
    return false;
}
module.exports = { solveMaze };