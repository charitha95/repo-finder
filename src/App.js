import React from 'react';
import Layout from './containers/Layout';
import RepoFinder from './containers/RepoFinder';
import Repositories from './containers/Repositories';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={RepoFinder} />
        <Route path='/:id' component={Repositories} />
      </Switch>
    </Layout>
  );
}

export default App;
