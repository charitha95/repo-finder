import React from 'react';
import classes from './style.module.scss';
import PropTypes from 'prop-types';

Card.propTypes = {
  children: PropTypes.array,
  customClass: PropTypes.string
}

/**
 * Function represents repo card component (with shadow)
 * @param {Object} props Component Props 
 */
export default function Card({ children, customClass }) {

  return <section className={`${classes.card} ${customClass}`}>
    {children}
  </section>
}