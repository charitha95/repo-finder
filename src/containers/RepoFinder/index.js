import React from 'react';
import { Button, Input } from '../../components/UI';
import classes from './style.module.scss';

const RepoFinder = () => {
  return <section className={classes.repoFinder}>
    <section className={classes.header}>
      <h1>Hello!</h1>
      <h3>Welcome to GitHub Repo Finder app.</h3>
    </section>

    <section className={classes.search}>
      <Input type='text' placeholder='Enter Git user name' />
      <Button>GO</Button>
    </section>
  </section>
}

export default RepoFinder;