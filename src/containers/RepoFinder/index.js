import React from 'react';
import Input from '../../components/UI/Input';

const RepoFinder = () => {
  return <section>
    <label>GitHub Username</label>
    <Input type='text' placeholder='Enter Git user name' />
  </section>
}

export default RepoFinder;