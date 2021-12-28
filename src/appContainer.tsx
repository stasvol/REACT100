import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import {rootReducersType} from "./redux/reduxStore";
import {initializeApp} from "./redux/app_reducer";
import App from './app'

export type mapStateType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state:rootReducersType) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
});

export  const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);