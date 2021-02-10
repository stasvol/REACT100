import React from 'react';
import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css';
import {Input} from "../common/FormControl/formComponent";
import {maxLength, minLength, required} from "../../Utility/ValidateForm/validator";


const maxLength20 =  maxLength(20);
const minLength2 =  minLength(2);


const LoginForm = (props)=> {

   // const {handleSubmit} = props
    return (

        <form onSubmit={props.handleSubmit} className={classes.formClass}>
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
            { props.error
                ?  <div className={classes.formError}>
                {props.error}
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
}) (LoginForm)


export default LoginReduxForm