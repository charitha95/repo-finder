import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classes from './style.module.scss';

const ListItem = ({ path, title, language }) => {

  const param = useParams();

  return <li className={classes.item}>
    <NavLink to={`/${param.id}/${path}`} activeClassName={classes.activeLink}>
      <label>{title}</label>
      <span>Language: <i>{language}</i></span>
    </NavLink>
  </li>
}

export default ListItem;