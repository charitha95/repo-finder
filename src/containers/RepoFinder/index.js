import React from 'react';
import { Button, Input, Card } from '../../components/UI';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';

const RepoFinder = () => {
  return <section className={classes.repoFinder}>
    <section className={classes.header}>
      <h1>Hello!</h1>
      <h3>Welcome to GitHub Repo Finder app.</h3>
    </section>

    <Card customClass={classes.search}>
      <Input type='text' placeholder='Enter Git user name' />
      <Link to='/username'>
        <Button>GO</Button>
      </Link>
    </Card>
  </section>
}

export default RepoFinder;