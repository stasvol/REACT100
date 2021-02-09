import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from "./Dialog.module.css";
import {Textarea} from "../common/FormControl/formComponent";
import {maxLength, minLength, required} from "../../Utility/ValidateForm/validator";

const maxLength30 =  maxLength(30);
const minLength2 =  minLength(2);

let DialogForm = (props) =>{
    const { handleSubmit } = props;
     return (
         <form onSubmit={handleSubmit}>
             <div >
                 {/*<label htmlFor="dialog">Add Message</label>*/}
             <Field name={'newMessageText'} component={Textarea} validate={[required,maxLength30,minLength2 ]}  placeholder={'add message'} />
             </div>
             <button  className={classes.btn}>Add Message</button>

         </form>

     )

}

  DialogForm = reduxForm ({
    form: 'dialogMessage'
})(DialogForm);

export default DialogForm