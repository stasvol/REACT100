import React, { Suspense, useEffect} from 'react';
import {compose} from "redux";
import {BrowserRouter,withRouter, Switch, Route, Redirect, NavLink} from "react-router-dom";
import {connect, Provider} from "react-redux";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import {initializeApp} from "./redux/app_reducer";
import store, {rootReducersType} from "./redux/reduxStore";
import Music from './components/music/music';
import Login from "./components/login/loginContainer";
import Preloader from "./components/common/preloader/preloader";
import UsersContainer from "./components/users/usersContainer"
import MyHeader from "./components/header/header";
import Error from "./error/error";

import classes from "./components/nav/nav.module.css";
import './app.css';

const DialogContainer = React.lazy(() => import ("./components/dialogs/dialogContainer"));
const ProfileContainer = React.lazy(() => import ("./components/profile/profileContainer"));
const ChatPage = React.lazy(() => import ('./chatPages/chatPage'));

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;


type mapStateType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: ()=> void
}


const App:React.FC <mapStateType & DispatchPropsType>=(props)=> {


useEffect( ()=>{
    props.initializeApp()
},[initializeApp])

    if (!props.initialized) return <Preloader/>


        return (
            <BrowserRouter>
                <Layout>
                    <MyHeader/>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item><NavLink to={'/profile'} activeClassName={classes.active}>MY PROFILE</NavLink></Breadcrumb.Item>
                            <Breadcrumb.Item><NavLink to={'/User'} activeClassName={classes.active}>DEVELOPERS</NavLink></Breadcrumb.Item>
                            <Breadcrumb.Item><NavLink to={'/chat'} activeClassName={classes.active}>CHAT</NavLink></Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="MY PROFILE">
                                        <Menu.Item key="1"><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></Menu.Item>
                                        <Menu.Item key="2"><NavLink to={'/dialogs'} activeClassName={classes.active}>Dialogs</NavLink></Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="DEVELOPERS">
                                        <Menu.Item key="5"><NavLink to={'/User'} activeClassName={classes.active}>Users</NavLink></Menu.Item>
                                        <Menu.Item key="6"><NavLink to={'/music'} activeClassName={classes.active}>Music Users</NavLink></Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="CHAT">
                                        <Menu.Item key="11"><NavLink to={'/chat'} activeClassName={classes.active}>Chat</NavLink></Menu.Item>
                                        <Menu.Item key="9"><NavLink to={'/news'} activeClassName={classes.active}>News</NavLink></Menu.Item>
                                        <Menu.Item key="10"><NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></Menu.Item>
                                        <Menu.Item key="12"><NavLink to={'/Friend'} className={classes.header}>Friend</NavLink></Menu.Item>

                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Switch>

                                        <Route exact path={'/'} render={() => <Redirect to={'/profile'} />}/>
                                        <Route path={'/dialogs'} render={() => <DialogContainer />}/>
                                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                                        <Route path={'/User'} render={() => <UsersContainer />}/>
                                        <Route path={'/music/vk'} render={() => <div>vk</div>}/>
                                        <Route exact path={'/music'} render={() => <Music/>}/>
                                        <Route path={'/login'} render={() => <Login/>}/>
                                        <Route path={'/chat'} render={() => <ChatPage/>}/>

                                        <Route path={'*'} render={() => <Error/>}/>
                                    </Switch>
                                </Suspense>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>App ©2021 Created by Artur</Footer>
                </Layout>
            </BrowserRouter>
        )
}

let mapStateToProps = (state:rootReducersType) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,


});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let MyApp:React.FC = () => {
    return <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default MyApp