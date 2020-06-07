import React from "react";
import classes from "./style.module.scss";
import backIcon from "../../assets/icons/back.svg";
import { Card, List } from "../../components/UI";
import { Route, Link } from "react-router-dom";
import RepositoryDetails from "../RepositoryDetails";

const Repositories = ({ username, match }) => {
  return (
    <section className={classes.repositories}>
      <section className={classes.header}>
        <h3>Repositories in {username} User</h3>
      </section>

      <section className={classes.goBack}>
        <Link to="/">
          <img src={backIcon} alt="back" />
          <label>Go back</label>
        </Link>
      </section>

      <Card customClass={classes.repoListContainer}>
        <section className={classes.repoList}>
          <List />
        </section>

        <section className={classes.readme}>
          <p>select a repo to load</p>
          <Route path={`${match.path}/:id`} component={RepositoryDetails} />
        </section>
      </Card>
    </section>
  );
};

export default Repositories;
