import React from 'react';
import classes from './style.module.scss';

/**
 * Function represents repo card component (with shadow)
 * @param {Object} props Component Props 
 */
export default function Card({ children, customClass }) {

  return <section className={`${classes.card} ${customClass}`}>}
  {children}
  </section>
}