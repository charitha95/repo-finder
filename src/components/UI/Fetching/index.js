import React from 'react';
import fetchingImage from '../../../assets/imgs/fetching.png';
import classNames from './style.module.scss';

export default function Fetching() {
  return <section className={classNames.fetching}>
    <figure>
      <img src={fetchingImage} alt='fetching' />
    </figure>
    <h4>Fetching!</h4>
    <p>Searching for your repositories</p>
  </section>
}