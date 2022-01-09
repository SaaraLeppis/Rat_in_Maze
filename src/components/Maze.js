import React, { Component } from 'react';
import Row from './Row';

const { solveMaze } = require('./solve.js');

class Maze extends Component {
    state = {
        ratkaise: false,
        maze: [],
        solutionMaze: [],
        n: 4,
    }
    mazeSizeHandler = (e) => {
        e.preventDefault();
        this.setState({ n: e.target.value })
    }
    generateMazeHandler = (e) => {
        e.preventDefault();
        this.setState({ ratkaise: false })
        this.setState({ maze: this.generateMaze(this.state.n) });
    }
    weightedNumber = () => {
        const numbers = [0, 0, 1, 1, 1, 1]
        return numbers[Math.floor(Math.random() * numbers.length)]
    }
    generateMaze = (size) => {
        this.weightedNumber();
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
        let solved = (solveMaze(this.state.maze))
        solved[0][0] = 3;
        this.setState({ solutionMaze: solved })

        this.setState({ ratkaise: true })
    }

    render() {
        return (
            <div>
                <input type="number" min="4" onChange={this.mazeSizeHandler}></input>
                <button onClick={this.generateMazeHandler}>Generate Maze</button>
                <button onClick={this.findPathHandler}>Find path</button>

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