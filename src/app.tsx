import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import Music from './components/music/music';
import Login from './components/login/loginContainer';
import Preloader from './components/common/preloader/preloader';
import UsersContainer from './components/users/usersContainer';
import MyHeader from './components/header/header';
import Error from './error/error';
import { MapStateType } from './appContainer';

import classes from './app.module.css';
import './app.css';

const DialogContainer = React.lazy(() => import('./components/dialogs/dialogContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));
const ChatPage = React.lazy(() => import('./chatPages/chatPage'));

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

// type mapStateType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void;
};

const App: React.FC<MapStateType & DispatchPropsType> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!initialized) return <Preloader />;

  return (
    <BrowserRouter>
      <Layout>
        <MyHeader />
        <Content className={classes.content}>
          <Breadcrumb className={classes.breadcrumb}>
            <Breadcrumb.Item>
              <NavLink activeClassName={classes.active} to="/profile">
                MY PROFILE
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink activeClassName={classes.active} to="/User">
                DEVELOPERS
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink activeClassName={classes.active} to="/chat">
                CHAT
              </NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Layout className={classes.layout}>
            <Sider className={classes.sider}>
              <Menu className={classes.menu} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="MY PROFILE">
                  <Menu.Item key="1">
                    <NavLink activeClassName={classes.active} to="/profile">
                      Profile
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink activeClassName={classes.active} to="/dialogs">
                      Dialogs
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="DEVELOPERS">
                  <Menu.Item key="5">
                    <NavLink activeClassName={classes.active} to="/User">
                      Users
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <NavLink activeClassName={classes.active} to="/music">
                      Music Users
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="CHAT">
                  <Menu.Item key="11">
                    <NavLink activeClassName={classes.active} to="/chat">
                      Chat
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <NavLink activeClassName={classes.active} to="/news">
                      News
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <NavLink activeClassName={classes.active} to="/Setting">
                      Settings
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <NavLink className={classes.header} to="/Friend">
                      Friend
                    </NavLink>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className={classes.contents}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/profile" />} />
                  <Route path="/dialogs" render={() => <DialogContainer />} />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                  <Route path="/User" render={() => <UsersContainer />} />
                  <Route path="/music/vk" render={() => <div>vk</div>} />
                  <Route exact path="/music" render={() => <Music />} />
                  <Route path="/login" render={() => <Login />} />
                  <Route path="/chat" render={() => <ChatPage />} />

                  <Route path="*" render={() => <Error />} />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Content>
        <Footer className={classes.footer}>App ©2021 Created by Artur</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
