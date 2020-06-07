import React, { useContext, useEffect } from "react";
import classes from "./style.module.scss";
import backIcon from "../../assets/icons/back.svg";
import RepositoryDetails from "../RepositoryDetails";
import getRepositories from "../../store/actions/repository.action";
import { Context } from "../../store/Provider";
import { Card, List } from "../../components/UI";
import { Route, Link } from "react-router-dom";
import { Fetching, Error } from "../../components/UI/States";

const Repositories = ({ match }) => {

  const { contextState, dispatch } = useContext(Context);

  const { fetching, data, error } = contextState.repos;

  useEffect(() => {
    getRepositories(match.params.id, dispatch);
  }, [match.params.id, dispatch]);

  return (
    <section className={classes.repositories}>
      <section className={classes.header}>
        <h3>Repositories of {match.params.id} User</h3>
      </section>

      <section className={classes.goBack}>
        <Link to="/">
          <img src={backIcon} alt="back" />
          <label>Go back</label>
        </Link>
      </section>

      <Card customClass={classes.repoListContainer}>
        <section className={classes.repoList}>
          {fetching ?
            <Fetching /> :
            error ? <Error /> :
              <>
                <List userRepos={data} />
                {data && data.length !== 0 ? <span className={classes.result}>{data.length} repositories found </span> : null}
              </>
          }
        </section>

        <section className={classes.readme}>
          <Route path={`${match.path}/:id`} component={RepositoryDetails} />
        </section>
      </Card>
    </section>
  );
};

export default Repositories;
