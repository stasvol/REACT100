import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Col, Image, Layout, Menu, Row } from 'antd';

import { useMyHeader } from '../../hook/useMyHeader';

import classes from './header.module.css';
import { dataHeader } from '../../constants/header_data';

const MyHeader: React.FC = () => {
  const { isAuth, login, logOutUser } = useMyHeader();
  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={20}>
          <Menu defaultSelectedKeys={['1']} mode="horizontal" theme="dark">
            {dataHeader.map(({ id, path, name }) => (
              <Menu.Item key={id}>
                <NavLink activeClassName={classes.active} to={path}>
                  {name}
                </NavLink>
              </Menu.Item>
            ))}
            {/* <Menu.Item key="1"> */}
            {/*  <NavLink activeClassName={classes.active} to="/profile"> */}
            {/*    MY PROFILE */}
            {/*  </NavLink> */}
            {/* </Menu.Item> */}
            {/* <Menu.Item key="2"> */}
            {/*  <NavLink activeClassName={classes.active} to="/User"> */}
            {/*    DEVELOPERS */}
            {/*  </NavLink> */}
            {/* </Menu.Item> */}
            {/* <Menu.Item key="3"> */}
            {/*  <NavLink activeClassName={classes.active} to="/chat"> */}
            {/*    CHAT */}
            {/*  </NavLink> */}
            {/* </Menu.Item> */}
          </Menu>
        </Col>
        {isAuth ? (
          <>
            <Col span={1}>
              <Avatar
                src={
                  <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
              />
            </Col>
            <Col className={classes.span} span={1}>
              {login}
            </Col>
            <Col span={1}>
              <Button className={classes.button} onClick={logOutUser}>
                Log out
              </Button>
            </Col>
          </>
        ) : (
          <Col span={1}>
            <Button className={classes.button}>
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
};

export default MyHeader;
