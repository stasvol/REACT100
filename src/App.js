import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Settings/Setting';
import DialogContainer from "./components/Dialogs/DialogContainer";
import UserContainer from "./components/Users/UserContainer";
import NavContainer from "./components/Nav/NavContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                {/*<Navbar state={props.state.siteBar} />*/}

                <div className={'app-pages'}>
                    <Route path={'/Dialogs'} render={() => <DialogContainer/>}/>
                    {/*// <Dialogs  data={props.state.dialogPage}*/}
                    {/*//                                               dispatch={props.dispatch} store={props.store}/>}/>*/}
                    {/*// addMessage={props.addMessage}*/}
                    {/*// addChangeNewMessage={props.addChangeNewMessage}/>}/>*/}
                    <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>
                    {/*dispatch={props.dispatch}/>}/>*/}
                    {/*// addPost={props.addPost}*/}
                    {/*// addChangeText={props.addChangeTe} />}/>*/}
                    <Route path={'/User'} render={() => <UserContainer/>}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>
                    {/*<Route path={'/Film'} render={ () =>  {return <div>FILM</div>}}/>*/}
                    {/*<Dialogs />*/}
                    {/*<Profile />*/}
                    {/* <Music />*/}
                    {/* <News />*/}
                    {/* <Setting />*/}

                </div>

            </div>
        </BrowserRouter>
    );

}


export default App;
