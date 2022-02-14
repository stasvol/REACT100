import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedComponent } from 'react-redux';

type MapStateType = {
  isAuth: boolean;
};
const mapStateToPropsRedirect = (state: { auth: { isAuth: boolean } }): boolean =>
  state.auth.isAuth;
export const withAuthRedirect = (
  Component: React.ComponentType,
): ConnectedComponent<FC<MapStateType>, Omit<MapStateType, never>> => {
  const AuthRedirectComponent: React.FC<MapStateType> = (props, isAuth: boolean) => {
    if (!isAuth) return <Redirect to="/profile" />;
    return <Component {...props} />;
  };
  return connect(mapStateToPropsRedirect)(AuthRedirectComponent);
};
