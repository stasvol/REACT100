import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// import Music from './components/music/music';
// import Login from './components/login/loginContainer';
import Preloader from './components/common/preloader/preloader';
// import UsersContainer from './components/users/usersContainer';
import MyHeader from './components/header/header';
// import Error from './error/error';
import { MapStateType } from './appContainer';
import { LoadingComponent } from './pagesPath/pages_loading';
import { RedirectComponent } from './pagesPath/pages_redirect';
// import { DialogComponent } from './pagesPath/papes_dialog';
// import { ProfileComponent } from './pagesPath/pages_profile';
// import { ChatComponent } from './pagesPath/pages_chat';
import { UsersComponent } from './pagesPath/pages_users';
import { VkMusicComponent } from './pagesPath/pages_vk_music';
import { MusicComponent } from './pagesPath/pages_music';
import { LoginComponent } from './pagesPath/pages_login';
import { ErrorComponent } from './pagesPath/pages_error';

import classes from './app.module.css';
import './app.css';
import { menuData } from './constants/ menu_data';
import { dataSubMenu } from './constants/data_sub_menu';

const DialogComponent = React.lazy(() => import('./pagesPath/papes_dialog'));
const ProfileComponent = React.lazy(() => import('./pagesPath/pages_profile'));
const ChatComponent = React.lazy(() => import('./pagesPath/pages_chat'));

// const DialogContainer = React.lazy(() => import('./components/dialogs/dialogContainer'));
// const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));
// const ChatPage = React.lazy(() => import('./chatPages/chatPage'));

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
            {menuData.map(({ id, path, title }) => (
              <Breadcrumb.Item key={id}>
                <NavLink activeClassName={classes.active} to={path}>
                  {title}
                </NavLink>
              </Breadcrumb.Item>
            ))}
            {/* <Breadcrumb.Item> */}
            {/*  <NavLink activeClassName={classes.active} to="/profile"> */}
            {/*    MY PROFILE */}
            {/*  </NavLink> */}
            {/* </Breadcrumb.Item> */}
            {/* <Breadcrumb.Item> */}
            {/*  <NavLink activeClassName={classes.active} to="/User"> */}
            {/*    DEVELOPERS */}
            {/*  </NavLink> */}
            {/* </Breadcrumb.Item> */}
            {/* <Breadcrumb.Item> */}
            {/*  <NavLink activeClassName={classes.active} to="/chat"> */}
            {/*    CHAT */}
            {/*  </NavLink> */}
            {/* </Breadcrumb.Item> */}
          </Breadcrumb>
          <Layout className={classes.layout}>
            <Sider className={classes.sider}>
              <Menu className={classes.menu} mode="inline">
                {dataSubMenu.map(item => (
                  <SubMenu key={item.idSub} icon={item.image} title={item.text}>
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
                ))}
                {/* <SubMenu key="sub1" icon={<UserOutlined />} title="MY PROFILE"> */}
                {/*  <Menu.Item key="1"> */}
                {/*    <NavLink activeClassName={classes.active} to="/profile"> */}
                {/*      Profile */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="2"> */}
                {/*    <NavLink activeClassName={classes.active} to="/dialogs"> */}
                {/*      Dialogs */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="3">option3</Menu.Item> */}
                {/*  <Menu.Item key="4">option4</Menu.Item> */}
                {/* </SubMenu> */}
                {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="DEVELOPERS"> */}
                {/*  <Menu.Item key="5"> */}
                {/*    <NavLink activeClassName={classes.active} to="/User"> */}
                {/*      Users */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="6"> */}
                {/*    <NavLink activeClassName={classes.active} to="/music"> */}
                {/*      Music Users */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="7">option7</Menu.Item> */}
                {/*  <Menu.Item key="8">option8</Menu.Item> */}
                {/* </SubMenu> */}
                {/* <SubMenu key="sub3" icon={<NotificationOutlined />} title="CHAT"> */}
                {/*  <Menu.Item key="9"> /}
                {/*    <NavLink activeClassName={classes.active} to="/chat"> */}
                {/*      Chat */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="10"> */}
                {/*    <NavLink activeClassName={classes.active} to="/news"> */}
                {/*      News */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="11"> */}
                {/*    <NavLink activeClassName={classes.active} to="/Setting"> */}
                {/*      Settings */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/*  <Menu.Item key="12"> */}
                {/*    <NavLink className={classes.header} to="/Friend"> */}
                {/*      Friend */}
                {/*    </NavLink> */}
                {/*  </Menu.Item> */}
                {/* </SubMenu> */}
              </Menu>
            </Sider>
            <Content className={classes.contents}>
              <Suspense fallback={LoadingComponent}>
                <Switch>
                  <Route exact path="/" render={RedirectComponent} />
                  <Route path="/dialogs" render={DialogComponent} />
                  <Route path="/profile/:userId?" render={ProfileComponent} />
                  <Route path="/User" render={UsersComponent} />
                  <Route path="/music/vk" render={VkMusicComponent} />
                  <Route exact path="/music" render={MusicComponent} />
                  <Route path="/login" render={LoginComponent} />
                  <Route path="/chat" render={ChatComponent} />

                  <Route path="*" render={ErrorComponent} />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Content>
        <Footer className={classes.footer}>App &copy;2021 Created by Artur</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
