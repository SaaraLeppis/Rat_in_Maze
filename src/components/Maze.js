import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {

    state = {
        n: 6,
    }


    generateMatrix = (n) => {
        console.log("here");
        let matrix = [];
        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                let value = Math.floor(Math.random() * 2);
                row.push(value);

            } console.log("rivi", row)
            matrix.push(row);
        } console.log("matriisi", matrix);
    }

    render() {
        return (
            <div>
                <div className='row-wrap'><Row /></div>
                <div className='row-wrap'><Row /></div>
                <div className='row-wrap'><Row /></div>
                <div className='row-wrap'><Row /></div>
                <button onClick={() => this.generateMatrix(this.state.n)}>Click</button>

            </div>
        );
    }
}

export default Maze;