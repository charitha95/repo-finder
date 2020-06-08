import React from 'react';
import classNames from './style.module.scss';
import PropTypes from 'prop-types';

CustomeState.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

/**
 * Function represents ui state builder for common ui states 
 * @param {Object} props Component Props 
 */
export default function CustomeState({ img, title, description }) {

  return <section className={classNames.state}>
    <figure>
      <img src={img} alt={title} />
    </figure>
    <h4>{title}</h4>
    <p>{description}</p>
  </section>
}