import React, {FormEventHandler} from 'react';
import {Field, FormProps, reduxForm, SubmitHandler} from 'redux-form'
import classes from './login.module.css';
import {Input} from "../common/formControl/formComponent";
import {maxLength, minLength, required} from "../../utility/validateForm/validator";
import { InjectedFormProps,} from 'redux-form';
import { formDataType} from "./login2";


const maxLength20 =  maxLength(20);
const minLength2 =  minLength(2);

// interface propsType {
//     handleSubmit: SubmitHandler
//         // FormEventHandler<HTMLFormElement>,
//     captchaUrl: any
//     error: any
// }
// <propsType & InjectedFormProps<{}, propsType>>

type formDataOwnPropsType={
    captchaUrl:string | null
}

const LoginForm:React.FC<InjectedFormProps & formDataOwnPropsType & formDataType >  = ({handleSubmit,captchaUrl ,error})=> {

    // const {handleSubmit} = props
    return (

        <form onSubmit={handleSubmit} className={classes.formClass}>
            <div>
                <label htmlFor="Email">Email</label>
                <Field name="Email" component={Input} type="email" placeholder={"email"} validate={[required,maxLength20,minLength2 ]}/>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="Password" component={Input} type="password" placeholder={"Password"} validate={[required,maxLength20,minLength2 ]}/>
            </div>
            {/* <div>*/}
            {/* <label htmlFor="email">Email</label>*/}
            {/* <Field name="Email" component="input" type="email" placeholder={'email'} />*/}
            {/*</div>*/}
            <div>
                <label htmlFor="Checkbox">Remember me</label>
                <Field name="RememberMe" component={Input} type="checkbox" validate={[required ]}/>
            </div>

            { captchaUrl && <img src={captchaUrl} alt={'error'} />}
            { captchaUrl && <Field name="captcha" component={Input} placeholder={'Symbol from image'} validate={[required ]}/>}

            { error
                ?  <div className={classes.formError}>
                    {error}
                </div>
                :  ''
            }
            <button type="submit" >LOGIN</button>
        </form>
    )

}

const  LoginReduxForm =  reduxForm({
// a unique name for the form
    form: 'login'
// @ts-ignore
}) (LoginForm)


export default LoginReduxForm