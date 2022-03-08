import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginReduxForm from './loginForm';
import { loginPost } from '../../redux/auth_reducer';

import classes from './login.module.css';

type MapStateType = {
  isAuth: boolean;
  captchaUrl: string | null;
};
type MapStateParamsType = { auth: { isAuth: boolean; captchaUrl: string } };
type MapDispatchType = {
  loginPost: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
};
type PropsType = MapStateType & MapDispatchType;

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
  captchaUrl: string | null;
};
const LoginContainer: React.FC<PropsType> = ({ isAuth, captchaUrl }): React.ReactElement => {
  const onSubmit = (formData: FormDataType) => {
    const { email, password, rememberMe, captcha } = formData;
    loginPost(email, password, rememberMe, captcha);
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1 className={classes.head}>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state: MapStateParamsType): MapStateType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { loginPost })(LoginContainer);
