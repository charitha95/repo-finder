import React from 'react';
import classes from './style.module.scss';
import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

/**
 * Function represents layout of the main application
 * @param {Object} props Component Props 
 */
export default function Layout(props) {

  return <main className={classes.layout}>
    {props.children}
  </main>
}