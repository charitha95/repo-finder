import React from 'react';
import classes from './style.module.scss';

export default function Card({ children, customClass }) {
  return <section className={`${classes.card} ${customClass}`}>}
  {children}
  </section>
}