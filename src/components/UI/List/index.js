import React from 'react';
import ListItem from './ListItem';
import classes from './style.module.scss';

const List = ({ userRepos }) => {
  return <ul className={classes.list}>
    {(userRepos && userRepos.length !== 0) ? userRepos.map(item => <ListItem
      key={item.id}
      path={item.id}
      title={item.name}
      language={item.language}
    />) : null}
  </ul>
}

export default List;