import React  from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import LoginReduxForm from "./loginForm";
import {loginPost} from "../../redux/auth_reducer";
import {rootReducersType} from "../../redux/reduxStore";

import classes from './login.module.css';

type mapStateType ={
    isAuth:boolean,
    captchaUrl: string | null
}
type mapDispatchType={
    loginPost:(email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
type propsType = mapStateType & mapDispatchType

export type formDataType={
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string|null,
    captchaUrl: string|null

}

const LoginContainer:React.FC<propsType> = ({loginPost,isAuth,captchaUrl}) => {
    const onSubmit  = (formData:formDataType ) => {
        loginPost(formData.email, formData.password, formData.rememberMe, formData.captcha )
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1 className={classes.head}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state:rootReducersType):mapStateType => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
});

export default connect(mapStateToProps, {loginPost})(LoginContainer)









