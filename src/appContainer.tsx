import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import { RootReducersType } from './redux/reduxStore';
import { initializeApp } from './redux/app_reducer';
import App from './app';

export type MapStateType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: {
  auth: { isAuth: boolean };
  app: { initialized: boolean };
}): { isAuth: boolean; auth: { isAuth: boolean }; initialized: boolean } => ({
  auth: state.auth,
  isAuth: state.auth.isAuth,
  initialized: state.app.initialized,
});

export const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);
