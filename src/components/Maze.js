import React, { Component } from 'react';
import Footer from './Footer';
import Row from './Row';

const { solveMaze } = require('./solve.js');

class Maze extends Component {
    state = {
        solve: false,
        maze: [],
        solutionMaze: [],
        n: 4,
        message: ""
    }
    mazeSizeHandler = (e) => {
        e.preventDefault();
        this.setState({ n: e.target.value })
    }
    generateMazeHandler = (e) => {
        e.preventDefault();
        this.setState({ message: "" })
        this.setState({ solve: false })
        this.setState({ maze: this.generateMaze(this.state.n) });
    }
    weightedNumber = () => {
        const numbers = [0, 0, 1, 1, 1, 1]
        return numbers[Math.floor(Math.random() * numbers.length)]
    }
    generateMaze = (size) => {
        let newMaze = [];

        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                let value = this.weightedNumber();
                row.push(value);
            }
            newMaze.push(row);
        }
        newMaze[0][0] = 1;
        newMaze[size - 1][size - 1] = 1;
        return newMaze
    }
    findPathHandler = (e) => {
        e.preventDefault();
        this.setState({ message: "" })

        let solved = (solveMaze(this.state.maze))
        if (solved.length > 0) {
            solved[0][0] = 3;
            console.log("solve", solved);
            this.setState({ solutionMaze: solved })
            this.setState({ solve: true })
        } else {
            this.setState({ message: "Solution not found" })
        }
    }

    render() {
        return (
            <div className='maze-wrapper'>
                <p className='explanation'>Select Maze size (n x n), default is 4. Bigger mazes may not fit to screen, so preferably select value below 14. Click to genetrate new maze and check if Rat finds path to cheese by clicking 'Find path'.
                    White cells are free, black ones blocked and green will show the found path.
                </p>
                <div className='control'>
                    <label>Maze size:</label>
                    <input type='number' min='4' onChange={this.mazeSizeHandler}></input>
                    <button className='generate' onClick={this.generateMazeHandler}>Generate Maze</button>
                </div>
                <button className='find' onClick={this.findPathHandler}>Find path</button>

                <p className='alert'>{this.state.message}</p>


                {
                    this.state.ratkaise ?
                        <Row key={1 * Math.random()} maze={this.state.solutionMaze} /> :
                        <Row key={2 * Math.random()} maze={this.state.maze} />
                }

            </div >
        );
    }
}

export default Maze;