import React from 'react';
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginPost} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom"


const Login = (props) => {




    const onSubmit = (formData) => {
        props.loginPost(formData.Email, formData.Password, formData.RememberMe, formData.captcha )
        // alert(formData.email,formData.password,formData.rememberMe)
        // console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )


}
const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

});


export default connect(mapStateToProps, {loginPost})(Login)