import React from 'react';
import classNames from './style.module.scss';

/**
 * Function represents a common button
 * @param {Object} props Component Props 
 */
const Button = ({ children, clickHandler, isPrimary = true }) => {
  return <button
    className={`${classNames.btn} ${isPrimary ? classNames.primary : classNames.secondary}`}
    onClick={clickHandler}>
    {children}
  </button>
}

export default Button;