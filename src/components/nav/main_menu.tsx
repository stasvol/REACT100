import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import { menuData } from '../../constants/ menu_data';

import classes from '../../app.module.css';

// interface MainMenuType {
//   id:number,
//   patch: string,
//   title: string
// }
const MainMenu = () => {
  menuData.map(({ id, path, title }) => {
    return (
      <div key={id}>
        <Breadcrumb.Item key={id}>
          <NavLink activeClassName={classes.active} to={path}>
            {title}
          </NavLink>
        </Breadcrumb.Item>
      </div>
    );
  });
};
export default MainMenu;
