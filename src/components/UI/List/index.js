import React from 'react';
import ListItem from './ListItem';
import classes from './style.module.scss';
import NotFound from '../NotFound/NotFound';

const List = ({ userRepos }) => {
  console.log('repos', userRepos)
  return <>
    {(userRepos && userRepos.length !== 0) ?
      <ul className={classes.list}>
        {
          userRepos.map(item => <ListItem
            key={item.id}
            path={item.name}
            title={item.name}
            language={item.language}
          />)
        }
      </ul>
      :
      <NotFound />
    }
  </>

}

export default List;