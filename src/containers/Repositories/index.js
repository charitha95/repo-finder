import React from 'react';
import classes from './style.module.scss';
import backIcon from '../../assets/icons/back.svg';

const Repositories = ({ username }) => {
  return <section className={classes.repositories}>
    <section className={classes.header}>
      <h3>Repositories in {username} User</h3>
    </section>
    <section className={classes.goBack}>
      <img src={backIcon} alt='back' /> 
      <label>Go back</label>
    </section>
    <section className={classes.repoList}>

    </section>
  </section>
}

export default Repositories;