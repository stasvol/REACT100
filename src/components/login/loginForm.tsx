import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { required, maxLength30, minLength2 } from '../../utility/validateForm/validator';
import { Input } from '../common/formControl/Input';
import { FormDataType } from './loginContainer';

import classes from './login.module.css';

export type FormDataOwnPropsType = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
InjectedFormProps<FormDataType, FormDataOwnPropsType> & FormDataOwnPropsType
> = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form className={classes.formClass} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          component={Input}
          id="email"
          name="Email"
          placeholder="email"
          type="email"
          validate={[required, maxLength30, minLength2]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          id="password"
          name="Password"
          placeholder="Password"
          type="password"
          validate={[required, maxLength30, minLength2]}
        />
      </div>
      <div>
        <label htmlFor="checkbox">Remember me</label>
        <Field
          component={Input}
          id="checkbox"
          name="RememberMe"
          type="checkbox"
          validate={[required]}
        />
      </div>

      {captchaUrl && <img alt="error" src={captchaUrl} />}
      {captchaUrl && (
        <Field
          component={Input}
          name="captcha"
          placeholder="Symbol from image"
          validate={[required]}
        />
      )}

      {error ? <div className={classes.formError}>{error}</div> : ''}
      <button type="submit">LOGIN</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType, FormDataOwnPropsType>({
  form: 'login',
})(LoginForm);

export default LoginReduxForm;
