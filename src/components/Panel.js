import React from 'react';
import Number from './Number';
import './Panel.css';

const Panel = props => {
    return (
        <div className="panel">
            {props.numbers.map(number => (
                <Number
                    key={number}
                    number={number}
                    shine={props.shine}
                />
            ))}
        </div>
    );
}

export default Panel;