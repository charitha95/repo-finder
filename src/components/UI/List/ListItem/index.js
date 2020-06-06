import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';

const ListItem = ({ path, title, language}) => {
  return <li className={classes.item}>
    <Link to={`/username/${path}`}>
      <label>{title}</label>
      <span>Language: <i>{language}</i></span>
    </Link>
  </li>
}

export default ListItem;