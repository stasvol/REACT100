import React from 'react';
import { NavLink } from 'react-router-dom';

import SiteBar from './siteBar/siteBar';
import { InitialStateSBarType } from '../../redux/sitebar_reducer';

import classes from './nav.module.css';

const Navbar: React.FC<InitialStateSBarType> = ({ siteBarNav }) => (
  <nav className={classes.nav}>
    <ul>
      <li className={`${classes.item} ${classes.active}`}>
        <NavLink activeClassName={classes.active} to="/profile">
          Profile
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/dialogs">
          Dialogs
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/news">
          News
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/music">
          Music
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/User">
          Users
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/Setting">
          Settings
        </NavLink>
      </li>
      <li className={classes.item}>
        <h2 className={classes.header}>FRIEND</h2>
      </li>
    </ul>
    {siteBarNav.map(({ id, name, img }) => (
      <SiteBar key={id} id={id} img={img} name={name} />
    ))}
  </nav>
);

export default Navbar;
