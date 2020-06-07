import React from 'react';
import classNames from './style.module.scss';

export default function CustomeState({ img, title, description }) {

  return <section className={classNames.state}>
    <figure>
      <img src={img} alt='reponotfound' />
    </figure>
    <h4>{title}</h4>
    <p>{description}</p>
  </section>
}