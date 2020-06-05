import React from 'react';
import { Button, Input } from '../../components/UI';

const RepoFinder = () => {
  return <section>
    <label>GitHub Username</label>
    <Input type='text' placeholder='Enter Git user name' />
    <Button>GO</Button>
  </section>
}

export default RepoFinder;