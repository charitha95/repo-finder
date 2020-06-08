import React, { useContext, useEffect } from "react";
import classNames from "./style.module.scss";
import backIcon from "../../assets/icons/back.png";
import RepositoryDetails from "../RepositoryDetails";
import getRepositories from "../../store/actions/repository.action";
import { Context } from "../../store/Provider";
import { Card, List } from "../../components/UI";
import { Route, Link } from "react-router-dom";
import { Fetching, Error } from "../../components/UI/States";

/**
 * Function represents repositories of the git user
 * @param {Object} props Component Props 
 */
export default function Repositories({ match }) {

  const { contextState, dispatch } = useContext(Context);

  const { fetching, data, error } = contextState.repos;

  useEffect(() => {
    getRepositories(match.params.id, dispatch);
  }, [match.params.id, dispatch]);

  return (
    <section className={classNames.repositories}>
      <section className={classNames.header}>
        <h3>Repositories of <strong>{match.params.id}</strong> User</h3>
      </section>

      <section className={classNames.goBack}>
        <Link to="/">
          <figure>
            <img src={backIcon} alt="back" />
          </figure>
          <label>Go back</label>
        </Link>
      </section>

      <Card customClass={classNames.repoListContainer}>
        <section className={classNames.repoList}>
          {fetching ?
            <Fetching /> :
            error ? <Error /> :
              <>
                <List userRepos={data} />
                {data && data.length !== 0 ? <span className={classNames.result}>{data.length} repositories found </span> : null}
              </>
          }
        </section>

        <section className={classNames.readme}>
          <Route path={`${match.path}/:id`} component={RepositoryDetails} />
        </section>
      </Card>
    </section>
  );
};