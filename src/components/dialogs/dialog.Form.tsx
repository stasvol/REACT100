import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form';

import { required} from "../../utility/validateForm/validator";
import {maxLength30,minLength2} from '../../utility/validateForm/validateForm'
import {createField, Textarea} from "../common/formControl/formComponent";
import { newMessageTextType } from './dialog';

import classes from "./dialog.module.css";

export type newMessageTextTypeKeys = Extract< keyof newMessageTextType ,string >
type propsType = {}

let DialogForm:React.FC<InjectedFormProps<newMessageTextType, propsType> & propsType > = (props) =>{
    const { handleSubmit } = props;
     return (
         <form onSubmit={handleSubmit}>
             <div className={classes.textarea}>
                 {createField<newMessageTextTypeKeys>( 'add message', 'newMessageText', [required,maxLength30,minLength2],  Textarea)}
             </div>
             <button  className={classes.btn}>Add Message</button>
         </form>
     )
}

 const DialogReduxForm = reduxForm<newMessageTextType, propsType> ({
    form: 'dialogMessage'
})(DialogForm);

export default DialogReduxForm