import React from 'react';
import './Button.css';

const Button = props => (
    <div className="buttonWrapper">
        <button onClick={props.click}>
            {props.isDrawn ? 'Draw again' : 'Draw'}
        </button>
    </div>

);

export default Button;