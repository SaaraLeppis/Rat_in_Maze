import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {
    state = {
        maze: [
        ],
        n: 4,
    }
    mazeSizeHandler = (e) => {
        e.preventDefault();
        this.setState({ n: e.target.value })
    }
    generateMazeHandler = (e) => {
        e.preventDefault();
        console.log('hepp');
        this.setState({ maze: this.generateMaze(this.state.n) });
    }
    weightedNumber = () => {
        const numbers = [0, 0, 0, 0, 1, 1]
        return numbers[Math.floor(Math.random() * numbers.length)]
    }
    generateMaze = (size) => {
        this.weightedNumber();
        let newMaze = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                let value = Math.floor(Math.random() * 2);
                row.push(value);
            }
            newMaze.push(row);
            console.log("row", row)
        }
        newMaze[0][0] = 0;
        newMaze[size - 1][size - 1] = 0;
        console.log(newMaze, "newMaze");
        return newMaze
    }

    render() {
        return (
            <div>
                <input type="value" onChange={this.mazeSizeHandler}></input>
                <button onClick={this.generateMazeHandler}>Generate Maze</button>
                <Row maze={this.state.maze} />
            </div>
        );
    }
}

export default Maze;