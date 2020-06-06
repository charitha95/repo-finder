import React from 'react';
import classes from './style.module.scss';

/**
 * Function represents layout of the main application
 * @param {Object} props Component Props 
 */
const Layout = props => {

  // might have state in later so defining in containers

  return (
    <>
      {/* TODO:: header */}
      <main className={classes.layout}>
        {props.children}
      </main>
      {/* TODO:: footer */}
    </>
  )
}

export default Layout;