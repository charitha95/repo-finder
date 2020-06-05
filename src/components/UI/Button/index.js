import React from 'react';
import classes from './style.module.scss';

/**
 * Function represents a common button
 * @param {Object} props Component Props 
 */
const Button = ({ children, clickHandler }) => {
  return <button
  className={classes.btn}
    onClick={clickHandler}>
    {children}
  </button>
}

export default Button;