import React  from 'react';
import LoginReduxForm from "./loginForm";
import {connect} from "react-redux";
import {loginPost} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom"
import {rootReducersType} from "../../redux/reduxStore";


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
export type formLoginTypeKeys = Extract< keyof formDataType ,string >

// COSMPAEM BCE BMECTE
// import * as actions from 'action-creators';
// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// type ActionTypes = ReturnType<InferValueTypes<typeof actions>;

// export type formDataOwnPropsType={
//     captchaUrl:string
// }
const Login:React.FC<propsType> = (props) => {

    const onSubmit  = (formData:formDataType ) => {
        props.loginPost(formData.email, formData.password, formData.rememberMe, formData.captcha )
        // alert(formData.email,formData.password,formData.rememberMe)
        // console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )


}
const mapStateToProps = (state:rootReducersType):mapStateType => ({

    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

});


export default connect(mapStateToProps, {loginPost})(Login)










// import React from 'react';
// import { Field, reduxForm } from 'redux-form'
// import classes from './login.module.css';
// import {Input} from "../common/formControl/formComponent";
// import {maxLength, minLength, required} from "../../utility/validateForm/validator";
//
//
// const maxLength20 =  maxLength(20);
// const minLength2 =  minLength(2);
//
//
// const LoginForm = (props)=> {
//
//     // const {handleSubmit} = props
//     return (
//
//         <form onSubmit={props.handleSubmit} className={classes.formClass}>
//             <div>
//                 <label htmlFor="Email">Email</label>
//                 <Field name="Email" component={Input} type="email" placeholder={"email"} validate={[required,maxLength20,minLength2 ]}/>
//             </div>
//             <div>
//                 <label htmlFor="Password">Password</label>
//                 <Field name="Password" component={Input} type="password" placeholder={"Password"} validate={[required,maxLength20,minLength2 ]}/>
//             </div>
//             {/* <div>*/}
//             {/* <label htmlFor="email">Email</label>*/}
//             {/* <Field name="Email" component="input" type="email" placeholder={'email'} />*/}
//             {/*</div>*/}
//             <div>
//                 <label htmlFor="Checkbox">Remember me</label>
//                 <Field name="RememberMe" component={Input} type="checkbox" validate={[required ]}/>
//             </div>
//
//             { props.captchaUrl && <img src={props.captchaUrl} alt={'error'} />}
//             { props.captchaUrl && <Field name="captcha" component={Input} placeholder={'Symbol from image'} validate={[required ]}/>}
//
//             { props.error
//                 ?  <div className={classes.formError}>
//                     {props.error}
//                 </div>
//                 :  ''
//             }
//             <button type="submit" >LOGIN</button>
//         </form>
//     )
//
// }
// const  LoginReduxForm =  reduxForm({
// // a unique name for the form
//     form: 'login'
// }) (LoginForm)
//
//
// export default LoginReduxForm