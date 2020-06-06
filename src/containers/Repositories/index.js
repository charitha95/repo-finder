import React from 'react';
import classes from './style.module.scss';
import backIcon from '../../assets/icons/back.svg';
import Card from '../../components/UI/Card';
import { Route } from 'react-router-dom';
import RepositoryDetails from '../RepositoryDetails';

const Repositories = ({ username }) => {
  return <section className={classes.repositories}>
    <section className={classes.header}>
      <h3>Repositories in {username} User</h3>
    </section>
    <section className={classes.goBack}>
      <img src={backIcon} alt='back' />
      <label>Go back</label>
    </section>
    <Card>
      <p>list here</p>
      <Route path='/:id/:id' component={RepositoryDetails} />

    </Card>
  </section>
}

export default Repositories;