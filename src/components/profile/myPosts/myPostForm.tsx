import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import classes from "./myPost.module.css";
import {required, maxLength, minLength} from "../../../utility/validateForm/validator";
import {createField, Textarea} from "../../common/formControl/formComponent";
import {newMessageTextTypeKeys} from "../../dialogs/dialog.Form";
import {newMessageTextType} from "../../dialogs/dialog";

const maxLength20 =  maxLength(20);
const minLength2 =  minLength(2);

export type propsPostFormType = {
    newText:string
}

 type newTextTypeKeys = Extract< keyof propsPostFormType ,string >

let MyPostForm:React.FC<InjectedFormProps<propsPostFormType> > = (props) => {
    const { handleSubmit } = props;
    return(
    <form onSubmit={handleSubmit}>
        <div className={classes.block}>
            {/*<label htmlFor="post">post</label>*/}
            {createField<newTextTypeKeys>( 'add post', 'newText', [required,maxLength20,minLength2],  Textarea)}
            {/*<Field name={'newText'} component={Textarea} placeholder={'add post'} validate={[required,maxLength20,minLength2 ]}/>*/}
        </div>
          <button  className={classes.btn}>Add post</button>
    </form>
    )
}

const MyPostReduxForm = reduxForm<propsPostFormType>({
    form: 'postMessage'
})(MyPostForm);

export default MyPostReduxForm