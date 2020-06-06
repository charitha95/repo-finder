import React from 'react';
import { Button, Input } from '../../components/UI';

const RepoFinder = () => {
  return <section>
    <h1>Hello!</h1>
    <h3>Welcome to GitHub Repo Finder app.</h3>
    <label>GitHub Username</label>
    <Input type='text' placeholder='Enter Git user name' />
    <Button>GO</Button>
  </section>
}

export default RepoFinder;