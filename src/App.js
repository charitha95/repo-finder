import React from 'react';
import Layout from './containers/Layout';
import RepoFinder from './containers/RepoFinder';
import Repositories from './containers/Repositories';

function App() {
  return (
    <Layout>
      <RepoFinder />
      <Repositories />
    </Layout>
  );
}

export default App;
