'use strict';

let path = [];

let maze = [
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 1]
]
let N = maze.length;
console.log(maze.length);
/*console.log(maze[1][1]);
for (let row = 0; row < maze.length; row++) {
    for (let column = 0; column < maze.length; column++) {
        console.log(maze[row][column]);
    }
}*/

// empty maze filled with zeros
function solveMaze(maze) {
    console.log(maze);
    //create empty maze filled with 0
    let solutionMaze = new Array(N);
    for (let i = 0; i < N; i++) {
        solutionMaze[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            solutionMaze[i][j] = 0
        }

    }
    console.log(solutionMaze)

    if (solveMazeUtil(maze, 0, 0, solutionMaze) == false) { // miksi 0 0
        console.log("Solution doesn't exist");
        return false; // minne palauttaa
    }
    // !== lisää ratkaisun tulostus
    console.log(solutionMaze)
}

// if cell is free (1) and not out of bounds
const isSafe = (maze, r, c) => {
    return (r >= 0 && r < N && c >= 0 && c < N && maze[r][c] == 1)
}

// käy läpi ruudukko 
// ruudukko/ lähtöruutu 0,0 /tyhjäruudukko
function solveMazeUtil(maze, r, c, empty) {
    // jos vikassa solussa => true
    if (r == N - 1 && c == N - 1) {
        empty[r][c] = 1;
        maze[r][c] = 2;
        console.log(maze)
        return true;

    }
    if (isSafe(maze, r, c)) {

        if (empty[r][c] == 1) // jos on jo käyty, on vaihdettu 1 => false
            return false;

        empty[r][c] = 1
        maze[r][c] = 2// muussa tapauksessa muuta 0 taulukkoon 1
        // siiry x / eli seuraava 
        if (solveMazeUtil(maze, r, c + 1, empty))
            return true;
        if (solveMazeUtil(maze, r + 1, c, empty))
            return true;

        /* If moving in y direction doesn't give
        solution then Move backwards in x direction */
        if (solveMazeUtil(maze, r, c - 1, empty))
            return true;
        maze[r][c] = 1;
        empty[r][c] = 0;
    }
    return false;

    console.log(maze);
}

solveMaze(maze);