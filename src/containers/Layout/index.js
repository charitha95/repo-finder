import React from 'react';

/**
 * Function representing layout of the main application
 * @param {Object} props Component Props 
 */
const Layout = props => {

  // might have state in later so defining in containers

  return (
    <>
      {/* TODO:: header */}
      <main>
        {props.children}
      </main>
      {/* TODO:: footer */}
    </>
  )
}

export default Layout;