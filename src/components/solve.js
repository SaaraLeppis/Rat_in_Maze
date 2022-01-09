'use strict';

function solveMaze(maze) {
    console.log("solution in solve", maze)
    //create empty maze filled with 0
    let solutionMaze = new Array(maze.length);
    for (let i = 0; i < maze.length; i++) {
        solutionMaze[i] = new Array(maze.length);
        for (let j = 0; j < maze.length; j++) {
            solutionMaze[i][j] = 0
        }

    }
    console.log("solution", solutionMaze)

    if (solveMazeUtil(maze, 0, 0, solutionMaze) === false) { // miksi 0 0
        console.log("Solution doesn't exist");
        return []; // minne palauttaa
    }
    // !== lisää ratkaisun tulostus
    return solutionMaze;
}

// if cell is free (1) and not out of bounds
const isSafe = (maze, row, col) => {
    console.log("hello, is safe");
    return (row >= 0 && row < maze.length && col >= 0 && col < maze.length && maze[row][col] === 1)
}

// käy läpi ruudukko 
// ruudukko/ lähtöruutu 0,0 /tyhjäruudukko
function solveMazeUtil(maze, r, c, solutionMaze) {
    // jos vikassa solussa => true
    console.log("here");
    if (r === maze.length - 1 && c === maze.length - 1) {
        console.log("then");
        solutionMaze[r][c] = 1;
        return true;

    }
    if (isSafe(maze, r, c)) {

        if (solutionMaze[r][c] === 1) // jos on jo käyty, on vaihdettu 1 => false
            return false;

        solutionMaze[r][c] = 2  // muussa tapauksessa muuta 0 taulukkoon 1
        // siiry x / eli seuraava 
        if (solveMazeUtil(maze, r, c + 1, solutionMaze))
            return true;
        if (solveMazeUtil(maze, r + 1, c, solutionMaze))
            return true;

        /* If moving in y direction doesn't give
        solution then Move backwards in x direction */
        if (solveMazeUtil(maze, r, c - 1, solutionMaze))
            return true;
        solutionMaze[r][c] = 0;
    }
    return false;


}
module.exports = { solveMaze };