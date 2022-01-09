import { RANDOM } from 'mysql/lib/PoolSelector';
import React from 'react';
import Cell from './Cell';

function Row({ maze }) {

    return (
        <div>
            {maze.map((row, index) => {
                return (
                    <div className='row-wrap'>
                        {row.map((cell, index) =>
                            <Cell fill={cell === 1 ? "free" : cell === 2 ? "green" : 'not-free'} key={index} />)}
                    </div>)
            })}
        </div>
    )
}

export default Row;