import React from 'react';
import ListItem from './ListItem';
import classNames from './style.module.scss';
import PropTypes from 'prop-types';
import { NotFound } from '../States';

List.propTypes = {
  userRepos: PropTypes.array
}

/**
 * Function represents repo list component
 * @param {Object} props Component Props 
 */
export default function List({ userRepos }) {

  return <>
    {(userRepos && userRepos.length !== 0) ?
      <ul className={classNames.list}>
        {
          userRepos.map(item => <ListItem
            key={item.id}
            path={item.name}
            title={item.name}
            description={item.description}
            language={item.language}
          />)
        }
      </ul>
      :
      <NotFound />
    }
  </>
}