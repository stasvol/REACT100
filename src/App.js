import React, {Component,Suspense} from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Settings/Setting';
import NavContainer from "./components/Nav/NavContainer";
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
import store from "./redux/reduxStore";
import {withLazySuspense} from "./Hoc/withLazySuspense";

const DialogContainer =  React.lazy( () => import("./components/Dialogs/DialogContainer"));
const ProfileContainer =  React.lazy(() => import("./components/Profile/ProfileContainer"));
const UserContainer    = React.lazy( () => import("./components/Users/UserContainer"));

class App extends Component {


    componentDidMount(props) {
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
                        <section>
                        <Route path={'/Dialogs'} render={ () => <DialogContainer/>}/>
                        <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>
                        </section>
                    </Suspense>
                    {/*// <Dialogs  data={props.state.dialogPage}*/}
                    {/*//                                               dispatch={props.dispatch} store={props.store}/>}/>*/}
                    {/*// addMessage={props.addMessage}*/}
                    {/*// addChangeNewMessage={props.addChangeNewMessage}/>}/>*/}
                    {/*dispatch={props.dispatch}/>}/>*/}
                    {/*// addPost={props.addPost}*/}
                    {/*// addChangeText={props.addChangeTe} />}/>*/}

                    <Route path={'/User'} render={withLazySuspense(() =><UserContainer/>)}/>


                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Login'} component={Login}/>
                    <Route path={'/Setting'} component={Setting}/>
                    {/*<Route path={'/Film'} render={ () =>  {return <div>FILM</div>}}/>*/}
                    {/*<Dialogs />*/}
                    {/*<Profile />*/}
                    {/* <Music />*/}
                    {/* <News />*/}
                    {/* <Setting />*/}

                </div>

            </div>
            // </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    // auth: state.auth,
    // isAuth: state.auth.isAuth,
    initialized: state.app.initialized,


});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
// withRouter (connect ( mapStateToProps,{authThunkCreator}) (App));
// export default App;

let  MyApp = (props) => {
    return <React.StrictMode>
        {/*<HashRouter>*/}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                {/*<MyContext.Provider value={store}>*/}
                <AppContainer state={store.getState()}/>
                {/*addChangeText={store.addChangeText.bind(store)}*/}
                {/*addMessage={store.addMessage.bind(store)} addChangeNewMessage={store.addChangeNewMessage.bind(store)}  */}
                {/*</MyContext.Provider>*/}
            </Provider>
        </BrowserRouter>
        {/*</HashRouter>*/}
    </React.StrictMode>
}
export default MyApp