import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import classes from "./Dialog.module.css";
import {createField, Input, Textarea} from "../common/FormControl/formComponent";
import {maxLength, minLength, required} from "../../Utility/ValidateForm/validator";
import {formDataType} from "../Login/login";
import {formDataOwnPropsType} from "../Login/LoginForm";
import { newMessageTextType } from './Dialog';

const maxLength30 =  maxLength(30);
const minLength2 =  minLength(2);

export type newMessageTextTypeKeys = Extract< keyof newMessageTextType ,string >
type propsType = {}

let DialogForm:React.FC<InjectedFormProps<newMessageTextType, propsType> & propsType > = (props) =>{
    const { handleSubmit } = props;
     return (
         <form onSubmit={handleSubmit}>
             <div>
                 {/*<label htmlFor="dialog">Add Message</label>*/}
                 {createField<newMessageTextTypeKeys>( 'add message', 'newMessageText', [required,maxLength30,minLength2],  Textarea)}
             {/*<Field name={'newMessageText'} component={Textarea} validate={[required,maxLength30,minLength2 ]}  placeholder={'add message'} />*/}
             </div>
             <button  className={classes.btn}>Add Message</button>

         </form>

     )

}

 const DialogReduxForm = reduxForm<newMessageTextType, propsType> ({
    form: 'dialogMessage'
})(DialogForm);

export default DialogReduxForm