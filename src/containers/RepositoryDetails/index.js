import React, { useContext, useEffect } from 'react';
import getReadme from '../../store/actions/readme.action';
import { Context } from '../../store/Provider';

const RepositoryDetails = ({ match }) => {

  const { contextState, dispatch } = useContext(Context);

  const { fetching, data } = contextState.readme;

  console.log(fetching, data);

  useEffect(() => {
    getReadme(match.url, dispatch)
  }, [match.url, dispatch]);

  return <section>
    <h2>Welcome to project 1's  Reade me file</h2>
    <h4>A super cool project by Someone</h4>
    <p>
      mark down content
    </p>
  </section>
}

export default RepositoryDetails;