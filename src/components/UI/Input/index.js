import React from 'react';
import classes from './style.module.scss';

const Input = ({ type, placeholder, changeHandler, value }) => {
  return <input
    className={classes.inputBackground}
    type={type}
    placeholder={placeholder}
    onChange={changeHandler}
    value={value} />
}

export default Input;