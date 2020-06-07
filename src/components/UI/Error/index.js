import React from 'react';
import errorImage from '../../../assets/imgs/error.png';
import classNames from './style.module.scss';

export default function Error() {
  return <section className={classNames.error}>
    <figure>
      <img src={errorImage} alt='error' />
    </figure>
    <h4>Oopz!</h4>
    <p>an error occured, try something else</p>
  </section>
}