import React from 'react';
import classes from './style.module.scss';

/**
 * Function represents layout of the main application
 * @param {Object} props Component Props 
 */
const Layout = props => {

  return <main className={classes.layout}>
    {props.children}
  </main>
}

export default Layout;