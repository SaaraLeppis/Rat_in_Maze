import React from 'react';

const Cell = (props) => {
    console.log(props.fill);

    return (
        <div className={props.fill} >
        </div>
    );
};

export default Cell;

