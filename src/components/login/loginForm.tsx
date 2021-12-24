import  React  from 'react';
import {Field,  reduxForm, InjectedFormProps } from 'redux-form'

import {required} from "../../utility/validateForm/validator";
import {maxLength30, minLength2} from '../../utility/validateForm/validateForm'
import {Input} from "../common/formControl/formComponent";
import {formDataType} from "./loginContainer";

import classes from './login.module.css';

export type formDataOwnPropsType = {
    captchaUrl:string | null
}

const LoginForm:React.FC<InjectedFormProps<formDataType, formDataOwnPropsType> & formDataOwnPropsType > = ({handleSubmit, captchaUrl , error})=>{

    return (
        <form onSubmit={handleSubmit} className={classes.formClass}>
            <div>
                <label htmlFor="Email">Email</label>
                <Field  name="Email" component={Input} type="email" placeholder={"email"}
                       validate={[required, maxLength30, minLength2]}/>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="Password" component={Input} type="password" placeholder={"Password"}
                       validate={[required, maxLength30, minLength2]}/>
            </div>
            <div>
                <label htmlFor="Checkbox">Remember me</label>
                <Field name="RememberMe" component={Input} type="checkbox" validate={[required]} />
            </div>

            {captchaUrl && <img src={captchaUrl} alt={'error'}/>}
            {captchaUrl && <Field name="captcha" component={Input}
                                  placeholder={'Symbol from image'} validate={[required]}/>}

            {error
                ? <div className={classes.formError}>
                    {error}
                </div>
                : ''
            }
            <button type="submit">LOGIN</button>
        </form>
    )
}

const  LoginReduxForm =  reduxForm <formDataType, formDataOwnPropsType> ({
    form: 'login'
}
) (LoginForm)

export default LoginReduxForm




