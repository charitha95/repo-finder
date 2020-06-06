import React from 'react';
import { Button, Input } from '../../components/UI';
import classes from './style.module.scss';
import Card from '../../components/UI/Card';

const RepoFinder = () => {
  return <section className={classes.repoFinder}>
    <section className={classes.header}>
      <h1>Hello!</h1>
      <h3>Welcome to GitHub Repo Finder app.</h3>
    </section>

    <Card customClass={classes.search}>
      <Input type='text' placeholder='Enter Git user name' />
      <Button>GO</Button>
    </Card>
  </section>
}

export default RepoFinder;