import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col } from 'antd';

import classes from './header.module.css';

const HeaderLoginComponent = () => (
  <Col span={1}>
    <Button className={classes.button}>
      <NavLink to="/login">Login</NavLink>
    </Button>
  </Col>
);
export default HeaderLoginComponent;
