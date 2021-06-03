import React from 'react';
import LoginReduxForm from "./LoginForm2";
import {connect} from "react-redux";
import {loginPost} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom"
import {rootReducersType} from "../../redux/reduxStore";
import { FormSubmitHandler } from 'redux-form';

type mapStateType ={
    isAuth:boolean,
    captchaUrl: string | null
}
type mapDispatchType={
    loginPost:(email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type propsType = mapStateType & mapDispatchType & formDataType

export type formDataType={
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
// export type formDataOwnPropsType={
//     captchaUrl:string
// }
const Login:React.FC<propsType> = (props) => {

    const onSubmit = (formData:formDataType) => {
        props.loginPost(formData.email, formData.password, formData.rememberMe, formData.captcha )
        // alert(formData.email,formData.password,formData.rememberMe)
        // console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            {/*@ts-ignore */}
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )


}
const mapStateToProps = (state:rootReducersType):mapStateType => ({

    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

});


export default connect(mapStateToProps, {loginPost})(Login)