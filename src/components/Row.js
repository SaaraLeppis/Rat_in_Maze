import React from 'react';
import Cell from './Cell';

function Row({ maze }) {


    return (
        <div>
            {maze.map((row, index) => {
                const N = maze.length;

                return (
                    <div className='row-wrap'>
                        {row.map((cell, subindex) =>

                            <Cell fill={
                                index === 0 && subindex === 0 ? "rat" :
                                    index === N - 1 && subindex === N - 1 ? "cheese" :
                                        cell === 1 ? "free" :
                                            cell === 2 ? "green" :
                                                cell === 3 ? "rat" :
                                                    'not-free'} key={subindex} />)}
                    </div>)
            })}
        </div>
    )
}

export default Row;