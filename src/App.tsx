import React, {Component, Suspense} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Switch, Route, Redirect, NavLink} from "react-router-dom";
import Music from './components/Music/Music';
import NavContainer from "./components/Nav/NavContainer";

import Login from "./components/Login/login";
import {connect, Provider} from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/preloader/preloader";
import store, {rootReducersType} from "./redux/reduxStore";
import {withLazySuspense} from "./Hoc/withLazySuspense";
import Error from "./Error/error";
import   UserContainer from "./components/Users/UserContainer"
import {Avatar, Col, Image, Row} from 'antd';
import SiteBar from './components/Nav/SiteBar/SiteBar'



const DialogContainer = React.lazy(() => import ("./components/Dialogs/DialogContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const ChatPage = React.lazy(() => import ('./chatPages/chat/chat'));
// const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer").then(({ProfileContainer}) =>({default:ProfileContainer})));
// const ScreensProductList = lazy(() =>
//     import('./screens/Products/List')
//         .then(({ ScreensProductList }) => ({ default: ScreensProductList })),
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import classes from "./components/Nav/Nav.module.css";
import MyHeader from "./components/Header/Header";
// import  Chat  from './chatPages/chat/chat';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


type mapStateType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: ()=> void
}


class App extends Component <mapStateType & DispatchPropsType> {


    componentDidMount() {
        this.props.initializeApp()
        // this.props.authThunkCreator (this.props.id, this.props.email, this.props.login,this.props.isAuth)
        // userApi.loginUser().then(data => {
        //
        //           if (data.resultCode === 0){
        //               let {id, email, login} = data.data
        //            this.props.setAuthUserData(id, email, login);
        //        }
        // });
    }


    render() {

        if (!this.props.initialized) {
            // return <img src={'https://cdn.segodnya.ua/img/gallery/5975/59/615213_main.jpg'}/>
            return <Preloader/>
        }
        return (
    <BrowserRouter>
            <Layout>

                {/*<Header className="header">*/}
                {/*    <div className="logo" />*/}
                {/*    <Row>*/}
                {/*        <Col span={22}>*/}
                {/*            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>*/}
                {/*                <Menu.Item key="1"><NavLink to={'/Profile'} activeClassName={classes.active}>MY PROFILE</NavLink></Menu.Item>*/}
                {/*                <Menu.Item key="2"><NavLink to={'/User'} activeClassName={classes.active}>DEVELOPERS</NavLink></Menu.Item>*/}
                {/*                <Menu.Item key="3"><NavLink to={'/Dialogs'} activeClassName={classes.active}>DIALOGS</NavLink></Menu.Item>*/}
                {/*            </Menu>*/}
                {/*        </Col>*/}
                {/*        <Col span={2}>*/}
                {/*            <Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}/>*/}
                {/*        </Col>*/}

                {/*    </Row>*/}
                {/*</Header>*/}
                <MyHeader/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><NavLink to={'/Profile'} activeClassName={classes.active}>MY PROFILE</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to={'/User'} activeClassName={classes.active}>DEVELOPERS</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to={'/chat'} activeClassName={classes.active}>CHAT</NavLink></Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="MY PROFILE">
                                    <Menu.Item key="1"><NavLink to={'/Profile'} activeClassName={classes.active}>Profile</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to={'/Dialogs'} activeClassName={classes.active}>Dialogs</NavLink></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="DEVELOPERS">
                                    <Menu.Item key="5"><NavLink to={'/User'} activeClassName={classes.active}>Users</NavLink></Menu.Item>
                                    <Menu.Item key="6"><NavLink to={'/Music'} activeClassName={classes.active}>Music Users</NavLink></Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="CHAT">
                                    <Menu.Item key="11"><NavLink to={'/chat'} activeClassName={classes.active}>Chat</NavLink></Menu.Item>
                                    <Menu.Item key="9"><NavLink to={'/News'} activeClassName={classes.active}>News</NavLink></Menu.Item>
                                    <Menu.Item key="10"><NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></Menu.Item>
                                    <Menu.Item key="12"><NavLink to={'/Friend'} className={classes.header}>Friend</NavLink></Menu.Item>

                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Suspense fallback={<div>Loading...</div>}>
                                            <Switch>

                                                <Route exact path={'/'} render={() => <Redirect to={'/Profile'} />}/>
                                                <Route path={'/Dialogs'} render={() => <DialogContainer />}/>
                                                <Route path={'/Profile/:userId?'} render={() => <ProfileContainer />}/>
                                                <Route path={'/User'} render={() => <UserContainer />}/>
                                                <Route path={'/Music/vk'} render={() => <div>vk</div>}/>
                                                <Route exact path={'/Music'} render={() => <Music/>}/>
                                                <Route path={'/Login'} render={() => <Login/>}/>
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

            // <BrowserRouter>
            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //     <NavContainer/>
            //     {/*<Navbar state={props.state.siteBar} />*/}
            //     <div className={'app-chatPages'}>
            //
            //         <Suspense fallback={<div>Loading...</div>}>
            //             <Switch>
            //                 <Route exact path={'/'} render={() => <Redirect to={'/Profile'} />}/>
            //                 <Route path={'/Dialogs'} render={() => <DialogContainer />}/>
            //
            //                 <Route path={'/Profile/:userId?'} render={() => <ProfileContainer />}/>
            //
            //
            //
            //                 {/*// <Dialogs  data={props.state.dialogPage}*/}
            //                 {/*//                                               dispatch={props.dispatch} store={props.store}/>}/>*/}
            //                 {/*// addMessage={props.addMessage}*/}
            //                 {/*// addChangeNewMessage={props.addChangeNewMessage}/>}/>*/}
            //                 {/*dispatch={props.dispatch}/>}/>*/}
            //                 {/*// addPost={props.addPost}*/}
            //                 {/*// addChangeText={props.addChangeTe} />}/>*/}
            //
            //                 <Route path={'/User'} render={() => <UserContainer />}/>
            //
            //
            //                 <Route path={'/Music/vk'} render={() => <div>vk</div>}/>
            //                 <Route exact path={'/Music'} render={() => <Music/>}/>
            //
            //                 <Route path={'/Login'} render={() => <Login/>}/>
            //
            //                 {/*<Route  path={'/News/:userId?'} render={() => <NewsContainer/>}/>*/}
            //                 {/*<Route path={'/Setting'} render={() => <SettingContainer />}/>*/}
            //                                                                  {/*newMessage={Store.getState().newMessage}*/}
            //                                                                  {/*newPostMesText={Store.getState().newPostMesText}*/}
            //                      {/*addNewMessage={Store.addNewMessage.bind(Store)}*/}
            //                      {/*updateNewText={Store.updateNewText.bind(Store)}/>}/>*/}
            //                      {/*                                           dispatch={Store.dispatch.bind(Store)}/>}/>*/}
            //                 {/*<Route path={'/Film'} render={ () =>  {return <div>FILM</div>}}/>*/}
            //                 {/*<Dialogs />*/}
            //                 {/*<Profile />*/}
            //                 {/* <Music />*/}
            //                 {/* <News />*/}
            //                 {/* <Setting />*/}
            //                 <Route path={'*'} render={() => <Error/>}/>
            //             </Switch>
            //         </Suspense>
            //     </div>
            //
            // </div>
            // </BrowserRouter>
        )
    }
}

let mapStateToProps = (state:rootReducersType) => ({
     auth: state.auth,
     isAuth: state.auth.isAuth,
    initialized: state.app.initialized,


});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
// withRouter (connect ( mapStateToProps,{authThunkCreator}) (App));
// export default App;

let MyApp:React.FC = () => {
    return <React.StrictMode>
        {/*<HashRouter>*/}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                {/*<MyContext.Provider value={store}>*/}
                <AppContainer />
                {/*addChangeText={store.addChangeText.bind(store)}*/}
                {/*addMessage={store.addMessage.bind(store)} addChangeNewMessage={store.addChangeNewMessage.bind(store)}  */}
                {/*</MyContext.Provider>*/}
            </Provider>
        </BrowserRouter>
        {/*</HashRouter>*/}
    </React.StrictMode>
}
export default MyApp