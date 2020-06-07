import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classes from './style.module.scss';

export default function ListItem({ path, title, language, description }) {

  const param = useParams();

  return <li className={classes.item}>
    <NavLink to={`/${param.id}/${path}`} activeClassName={classes.activeLink}>
      <label>{title}</label>
      {language && <span> <strong> Language:</strong> {language}</span>}
      {description && <span> <strong>Description:</strong> {description}</span>}
    </NavLink>
  </li>
}