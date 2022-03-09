import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedComponent } from 'react-redux';

type MapStateType = {
  isAuth: boolean;
};
type MapStateParamsType = { auth: { isAuth: boolean } };

const mapStateToPropsRedirect = (state: MapStateParamsType): MapStateType => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (
  Component: React.ComponentType,
): ConnectedComponent<FC<MapStateType>, Omit<MapStateType, never>> => {
  const AuthRedirectComponent: React.FC<MapStateType> = (props, isAuth: boolean) => {
    if (!isAuth) return <Redirect to="/profile" />;
    return <Component {...props} />;
  };
  return connect(mapStateToPropsRedirect)(AuthRedirectComponent);
};
