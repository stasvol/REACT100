import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Settings/Setting';
import DialogContainer from "./components/Dialogs/DialogContainer";



 const App = (props) => {

    return (
      <BrowserRouter>
        <div className="app-wrapper">
             <Header />
             <Navbar data={props.state.siteBar} dispatch={props.dispatch}  />

             <div className={'app-pages'}>
                 <Route path={'/Dialogs'} render={ () => <DialogContainer store={props.store} data={props.state.dialogPage}/>}/>
                     {/*// <Dialogs  data={props.state.dialogPage}*/}
                     {/*//                                               dispatch={props.dispatch} store={props.store}/>}/>*/}
                                                                   {/*// addMessage={props.addMessage}*/}
                                                                   {/*// addChangeNewMessage={props.addChangeNewMessage}/>}/>*/}
                 <Route path={'/Profile'} render={ () => <Profile  data={props.state.postPage} dispatch={props.dispatch}/>}/>
                                                                   {/*// addPost={props.addPost}*/}
                                                                   {/*// addChangeText={props.addChangeText} />}/>*/}
                 <Route path={'/Music'}  component={ Music }/>
                 <Route path={'/News'}  component={ News }/>
                 <Route path={'/Setting'}  component={ Setting }/>
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
