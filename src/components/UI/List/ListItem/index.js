import React from 'react';
import classNames from './style.module.scss';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

ListItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string
}

/**
 * Function represents repo a single repository component
 * @param {Object} props Component Props 
 */
export default function ListItem({ path, title, language, description }) {

  const param = useParams();

  return <li className={classNames.item}>
    <NavLink to={`/${param.id}/${path}`} activeClassName={classNames.activeLink}>
      <label>{title}</label>
      {language && <span> <strong> Language:</strong> {language}</span>}
      {description && <span> <strong>Description:</strong> {description}</span>}
    </NavLink>
  </li>
}