import React from 'react';
import Layout from './containers/Layout';
import RepoFinder from './containers/RepoFinder';
import Repositories from './containers/Repositories';
import RepositoryDetails from './containers/RepositoryDetails';

function App() {
  return (
    <Layout>
      <RepoFinder />
      <Repositories />
      <RepositoryDetails />
    </Layout>
  );
}

export default App;
