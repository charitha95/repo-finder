import React from 'react';
import classNames from './style.module.scss';
import PropTypes from 'prop-types';

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string
}

/**
 * Function represents a common input
 * @param {Object} props Component Props 
 */
export default function Input({ type = 'text', placeholder, changeHandler, value }) {

  return <input
    className={classNames.input}
    type={type}
    placeholder={placeholder}
    onChange={changeHandler}
    value={value} />
}