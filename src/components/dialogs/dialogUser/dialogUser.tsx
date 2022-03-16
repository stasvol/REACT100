import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './dialogUser.module.css';

type PropsType = {
  id: number;
  img: string;
  name: string;
};

const DialogUser: React.FC<PropsType> = ({ id, img, name }): React.ReactElement => {
  const path = `/dialogs/1${id}`;
  return (
    <>
      <img alt={name} className={classes.imgAvatar} src={img} />
      <ul className={classes.dialogUser}>
        <li className={`${classes.user} `}>
          <NavLink activeClassName={classes.active} to={path}>
            {name}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DialogUser;
