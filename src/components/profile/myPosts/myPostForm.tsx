import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form';

import {required, maxLength30, minLength2} from "../../../utility/validateForm/validator";
import {createField, Textarea} from "../../common/formControl/formComponent";

import classes from "./myPost.module.css";

export type propsPostFormType = {
    newText:string
}

 type newTextTypeKeys = Extract< keyof propsPostFormType ,string >

let MyPostForm:React.FC<InjectedFormProps<propsPostFormType> > = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <div className={classes.block}>
            {createField<newTextTypeKeys>( 'add post', 'newText', [required,maxLength30,minLength2],  Textarea)}
        </div>
          <button  className={classes.btn}>Add post</button>
    </form>
    )

const MyPostReduxForm = reduxForm<propsPostFormType>({
    form: 'postMessage'
})(MyPostForm);

export default MyPostReduxForm