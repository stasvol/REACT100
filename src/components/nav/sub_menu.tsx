import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import { dataSubMenu } from '../../constants/data_sub_menu';

import classes from '../../app.module.css';

const { SubMenu } = Menu;

export const SubMenuComponent = () => {
  dataSubMenu.map(item => (
    <SubMenu key={item.idSub} icon={item.image} title={item.text}>
      \
      <Menu.Item key={item.addSubMenuOne?.id}>
        <NavLink activeClassName={classes.active} to={item.addSubMenuOne?.path}>
          {item.addSubMenuOne?.name}
        </NavLink>
      </Menu.Item>
      <Menu.Item key={item.addSubMenuTwo?.id}>
        <NavLink activeClassName={classes.active} to={item.addSubMenuTwo?.path}>
          {item.addSubMenuTwo?.name}
        </NavLink>
      </Menu.Item>
    </SubMenu>
  ));
};
