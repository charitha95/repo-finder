import React, { useContext, useEffect } from 'react';
import getReadme from '../../store/actions/readme.action';
import ReactMarkdown from 'react-markdown';
import classNames from './style.module.scss';
import { Context } from '../../store/Provider';

const RepositoryDetails = ({ match }) => {

  const { contextState, dispatch } = useContext(Context);

  const { fetching, data } = contextState.readme;

  console.log(fetching, data);

  useEffect(() => {
    getReadme(match.url, dispatch)
  }, [match.url, dispatch]);

  return <section className={classNames.markdown}>
    {!fetching &&
      <ReactMarkdown
        source={data}
        escapeHtml={false}
      // renderers={{ code: CodeBlock }}
      />
    }
  </section>
}

export default RepositoryDetails;