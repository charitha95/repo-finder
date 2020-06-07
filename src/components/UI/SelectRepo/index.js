import React from 'react';
import notFoundImage from '../../../assets/imgs/not_found.png';
import classNames from './style.module.scss';

export default function SelectRepo() {
  return <section className={classNames.selectRepo}>
    <figure>
      <img src={notFoundImage} alt='reponotfound' />
    </figure>
    <h2>Sorry!</h2>
    <p>Please select a repository</p>
  </section>
}