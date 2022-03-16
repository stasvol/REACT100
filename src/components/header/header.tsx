import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Layout, Menu, Row } from 'antd';

import { dataHeader } from '../../constants/header_data';
import { useMyHeader } from '../../hook/useMyHeader';
import HeaderAuthComponent from './header_auth_component';
import HeaderLoginComponent from './header_login_component';

import classes from './header.module.css';

const MyHeader: React.FC = () => {
  const { isAuth } = useMyHeader();
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
        {
          isAuth ? <HeaderAuthComponent /> : <HeaderLoginComponent />
          // (
          //   <>
          //     <Col span={1}>
          //       <Avatar src={
          //         <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          //       }
          //       />
          //     </Col>
          //     <Col className={classes.span} span={1}>
          //       {login}
          //     </Col>
          //     <Col span={1}>
          //       <Button className={classes.button} onClick={logOutUser}>
          //         Log out
          //       </Button>
          //     </Col>
          //   </>
          // )
          // :
          // (
          //   <Col span={1}>
          //     <Button className={classes.button}>
          //       <NavLink to="/login">Login</NavLink>
          //     </Button>
          //   </Col>
          // )
          // eslint-disable-next-line react/jsx-curly-newline
        }
      </Row>
    </Header>
  );
};

export default MyHeader;
