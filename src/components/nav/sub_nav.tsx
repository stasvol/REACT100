import React from 'react';
import { NavLink } from 'react-router-dom';

import { navData } from '../../constants/nav_data';

import classes from './nav.module.css';

export const SubNav = () =>
  navData.map(({ id, path, name }) => (
    <ul key={id}>
      <li className={`${classes.item} ${classes.active}`}>
        <NavLink activeClassName={classes.active} to={path}>
          {name}
        </NavLink>
      </li>
    </ul>
  ));
