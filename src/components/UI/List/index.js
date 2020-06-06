import React from 'react';
import ListItem from './ListItem';
import classes from './style.module.scss';

const List = () => {
  const list = [
    { title: 'Project 1', id: '32fa24', language: 'JavaScript' },
    { title: 'Project 2', id: '42ea24', language: 'JavaScript' },
    { title: 'Project 3', id: '66f224', language: 'C#' },
    { title: 'Project 2', id: '42ea24', language: 'JavaScript' },
    { title: 'Project 3', id: '66f224', language: 'C#' },
    { title: 'Project 4', id: '121124', language: 'HTML' }
  ]
  return <ul className={classes.list}>
    {list.length !== 0 ? list.map(item => <ListItem
      key={item.id}
      path={item.id}
      title={item.title}
      language={item.language}
    />) : null}
  </ul>
}

export default List;