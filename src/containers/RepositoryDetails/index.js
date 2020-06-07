import React, { useContext, useEffect } from 'react';
import getReadme from '../../store/actions/readme.action';
import ReactMarkdown from 'react-markdown';
import classNames from './style.module.scss';
import CodeBlock from '../../components/UI/CodeBlock';
import ErrorBoundary from '../ErrorBoundary';
import { Context } from '../../store/Provider';

const RepositoryDetails = ({ match }) => {

  const { contextState, dispatch } = useContext(Context);

  const { fetching, data } = contextState.readme;

  useEffect(() => {
    getReadme(match.url, dispatch)
  }, [match.url, dispatch]);

  return <ErrorBoundary>
    <section className={classNames.markdown}>
      {!fetching &&
        <ReactMarkdown
          source={data}
          escapeHtml={false}
          renderers={{ code: CodeBlock }}
        />
      }
    </section>
  </ErrorBoundary>
}

export default RepositoryDetails;