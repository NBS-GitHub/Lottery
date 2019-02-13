import React from 'react';
import './Number.css';

const Number = props => <div className='number' style={{ backgroundImage: props.shine }}> {props.number}</div >;

export default Number;