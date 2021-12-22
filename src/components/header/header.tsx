import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar, Button, Col, Image, Layout, Menu, Row} from "antd";

import {useMyHeader} from "../../hock/useMyHeader";

import classes from './header.module.css';


const MyHeader: React.FC = () => {

    const {isAuth,login,logOutUser} = useMyHeader()
    const {Header} = Layout;

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><NavLink to={'/profile'} activeClassName={classes.active}>MY
                            PROFILE</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to={'/User'}
                                                    activeClassName={classes.active}>DEVELOPERS</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to={'/chat'}
                                                    activeClassName={classes.active}>CHAT</NavLink></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <>
                        <Col span={1}>
                            <Avatar
                                src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}/>
                        </Col>
                        <Col span={1} className={classes.span} >
                            {login}
                        </Col>
                        <Col span={1}>
                            <Button className={classes.button} onClick={logOutUser}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={1}>
                        <Button className={classes.button}><NavLink  to={'/login'}>Login</NavLink></Button>
                    </Col>
                }
            </Row>
        </Header>
    )
}

export default MyHeader