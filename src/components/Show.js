import React from 'react';

const Show = (props) => {
    return(
        <div>
            <h3>Uppercase: {props.upperValue} </h3>
            <h3>Lowercase: {props.lowerValue}</h3>
        </div>
    );
}

export default Show;