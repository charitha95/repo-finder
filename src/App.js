import React from "react";
import Layout from "./containers/Layout";
import RepoFinder from "./containers/RepoFinder";
import Repositories from "./containers/Repositories";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={RepoFinder} />
        <Route path="/:id" component={Repositories} />
      </Router>
    </Layout>
  );
}
