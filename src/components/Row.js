import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    render() {
        return (
            <div>
                <Cell fill="not-free" />
                <Cell fill="cell" />
                <Cell fill="free" />
            </div>
        );
    }
}

export default Row;