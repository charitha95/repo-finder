import React from 'react';
import classes from './style.module.scss';

const Card = ({ children, customClass }) => <section className={`${classes.card} ${customClass}`}>
  {children}
</section>

export default Card;