import React, { useState } from 'react';
import { Button, Input, Card } from '../../components/UI';
import classes from './style.module.scss';

const RepoFinder = props => {

  const [username, setUsername] = useState('');

  const handleClick = () => {
    if (!username) { alert('invalid user name'); return }
    props.history.push(`/${username}`)
  }

  return <section className={classes.repoFinder}>
    <section className={classes.header}>
      <h1>Hello!</h1>
      <h3>Welcome to GitHub Repo Finder app.</h3>
    </section>

    <Card customClass={classes.search}>
      <Input
        type='text'
        placeholder='Enter Git user name'
        changeHandler={(e) => { setUsername(e.target.value) }}
      />
      <Button
        clickHandler={handleClick}>
        GO
      </Button>
    </Card>
  </section>
}

export default RepoFinder;