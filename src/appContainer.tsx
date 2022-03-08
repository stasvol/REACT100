import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { initializeApp } from './redux/app_reducer';
import App from './app';

export type MapStateType = ReturnType<typeof mapStateToProps>;
type StateType = { auth: { isAuth: boolean }; isAuth: boolean; initialized: boolean };
type StateParamType = { auth: { isAuth: boolean }; app: { initialized: boolean } };

const mapStateToProps = (state: StateParamType): StateType => ({
  auth: state.auth,
  isAuth: state.auth.isAuth,
  initialized: state.app.initialized,
});

export const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);
