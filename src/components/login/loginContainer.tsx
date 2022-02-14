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
// eslint-disable-next-line @typescript-eslint/no-shadow
const LoginContainer: React.FC<PropsType> = ({ loginPost, isAuth, captchaUrl }) => {
  // eslint-disable-next-line no-debugger
  // debugger;
  const onSubmit = (formData: FormDataType) => {
    loginPost(formData.email, formData.password, formData.rememberMe, formData.captcha);
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
const mapStateToProps = (state: {
  auth: { isAuth: boolean; captchaUrl: string };
}): MapStateType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { loginPost })(LoginContainer);
