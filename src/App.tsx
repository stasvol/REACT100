import React, {Component, Suspense} from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Settings/Setting';
import NavContainer from "./components/Nav/NavContainer";
// import { Switch } from "react-router"
// import UserContainer from "./components/Users/UserContainer";
// import DialogContainer from "./components/Dialogs/DialogContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {withAuthRedirect} from "./Hoc/withAuthRedirect";
import {connect, Provider} from "react-redux";
import {authThunkCreator, loginOut, setAuthUserData} from "./redux/auth_reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/preloader/preloader";
import store, {rootReducersType} from "./redux/reduxStore";
import {withLazySuspense} from "./Hoc/withLazySuspense";
import Error from "./Error/error";
// import state from './components/Settings/State'
// import {addNewMessage,addNewText,updateNewText} from "./components/Settings/State"
import Store from './components/Settings/State'
import SettingContainer from "./components/Settings/SettingContainer";
import NewsContainer from "./components/News/NewsContainer";

const DialogContainer = React.lazy(() => import ("./components/Dialogs/DialogContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const UserContainer = React.lazy(() => import ("./components/Users/UserContainer"));

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

            // <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                {/*<Navbar state={props.state.siteBar} />*/}
                <div className={'app-pages'}>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/Profile'} />}/>
                            <Route path={'/Dialogs'} render={() => <DialogContainer />}/>
                            <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>



                            {/*// <Dialogs  data={props.state.dialogPage}*/}
                            {/*//                                               dispatch={props.dispatch} store={props.store}/>}/>*/}
                            {/*// addMessage={props.addMessage}*/}
                            {/*// addChangeNewMessage={props.addChangeNewMessage}/>}/>*/}
                            {/*dispatch={props.dispatch}/>}/>*/}
                            {/*// addPost={props.addPost}*/}
                            {/*// addChangeText={props.addChangeTe} />}/>*/}

                            <Route path={'/User'} render={withLazySuspense(() => <UserContainer />)}/>


                            <Route path={'/Music/vk'} render={() => <div>vk</div>}/>
                            <Route exact path={'/Music'} render={() => <Music/>}/>

                            <Route path={'/Login'} render={() => <Login/>}/>

                            {/*<Route  path={'/News/:userId?'} render={() => <NewsContainer/>}/>*/}
                            {/*<Route path={'/Setting'} render={() => <SettingContainer />}/>*/}
                                                                             {/*newMessage={Store.getState().newMessage}*/}
                                                                             {/*newPostMesText={Store.getState().newPostMesText}*/}
                                 {/*addNewMessage={Store.addNewMessage.bind(Store)}*/}
                                 {/*updateNewText={Store.updateNewText.bind(Store)}/>}/>*/}
                                 {/*                                           dispatch={Store.dispatch.bind(Store)}/>}/>*/}
                            {/*<Route path={'/Film'} render={ () =>  {return <div>FILM</div>}}/>*/}
                            {/*<Dialogs />*/}
                            {/*<Profile />*/}
                            {/* <Music />*/}
                            {/* <News />*/}
                            {/* <Setting />*/}
                            <Route path={'*'} render={() => <Error/>}/>
                        </Switch>
                    </Suspense>
                </div>

            </div>
            // </BrowserRouter>
        );
    }
}

let mapStateToProps = (state:rootReducersType) => ({
    // auth: state.auth,
    // isAuth: state.auth.isAuth,
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