import React from 'react';
import classes from './style.module.scss';

/**
 * Function represents a common input
 * @param {Object} props Component Props 
 */
const Input = ({ type, placeholder, changeHandler, value }) => {
  return <input
    className={classes.input}
    type={type}
    placeholder={placeholder}
    onChange={changeHandler}
    value={value} />
}

export default Input;