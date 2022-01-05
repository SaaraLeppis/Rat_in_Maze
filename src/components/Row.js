import React from 'react';
import Cell from './Cell';

function Row({ maze }) {

    return (
        <div className='row'>
            {maze.map((row, index) => {
                return (
                    <div className='row-wrap'>
                        {row.map((cell, index) =>
                            <Cell fill={cell === 0 ? "free" : 'not-free'} key={index} />)}
                    </div>)
            })}
        </div>
    )
}

export default Row;