import React from 'react';
import notFoundImage from '../../../assets/imgs/not_found.png';
import classNames from './style.module.scss';

export default function NotFound() {
  return <section className={classNames.notFound}>
    <figure>
      <img src={notFoundImage} alt='notfound' />
    </figure>
    <h4>Sorry!</h4>
    <p>couldn't find your repositories</p>
  </section>
}