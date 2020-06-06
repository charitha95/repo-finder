import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './style.module.scss';

const ListItem = ({ path, title, language }) => {
  return <li className={classes.item}>
    <NavLink to={`/username/${path}`} activeClassName={classes.activeLink}>
      <label>{title}</label>
      <span>Language: <i>{language}</i></span>
    </NavLink>
  </li>
}

export default ListItem;