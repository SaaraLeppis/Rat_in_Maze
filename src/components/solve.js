'use strict';

// atrribute is maze to be solved
// using function 
function solveMaze(maze) {
    if (solveMazeUtil(maze, 0, 0) === false) {
        console.log("Solution doesn't exist");
        return [];
    }
    return maze;
}

// if cell is free (1) and not out of bounds
const isSafe = (maze, row, col) => {
    return (row >= 0 && row < maze.length && col >= 0 && col < maze.length && maze[row][col] === 1)
}

// käy läpi "ruudukko
// lähtöruutu 0,0 
function solveMazeUtil(maze, r, c) {
    // jos vikassa solussa => true
    console.log("here");
    if (r === maze.length - 1 && c === maze.length - 1) {
        maze[r][c] = 2;
        return true;

    }
    if (isSafe(maze, r, c)) {
        // if sell visited already (set to value 2)
        if (maze[r][c] === 2)
            return false;

        maze[r][c] = 2  // muussa tapauksessa muuta 0 taulukkoon 1
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
        //return 1 to original maze to show free sell (as in original) in final solution 
        maze[r][c] = 1
    }
    return false;


}
module.exports = { solveMaze };