import { RANDOM } from 'mysql/lib/PoolSelector';
import React from 'react';
import Cell from './Cell';

function Row({ maze }) {

    return (
        <div>
            {maze.map((row, index) => {
                return (
                    <div className='row-wrap'>
                        {row.map((cell, subindex) =>
                            <Cell fill={cell === 1 ? "free" :
                                cell === 2 ? "green" :
                                    cell === 3 ? "rat" :
                                        'not-free'} key={index * Math.random()} />)}
                    </div>)
            })}
        </div>
    )
}

export default Row;