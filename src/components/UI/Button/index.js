import React from 'react';
import classNames from './style.module.scss';
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  clickHandler: PropTypes.func,
  isPrimary: PropTypes.bool
}

/**
 * Function represents a common button
 * @param {Object} props Component Props 
 */
export default function Button({ children, clickHandler, isPrimary = true }) {

  return <button
    className={`${classNames.btn} ${isPrimary ? classNames.primary : classNames.secondary}`}
    onClick={clickHandler}>
    {children}
  </button>
}