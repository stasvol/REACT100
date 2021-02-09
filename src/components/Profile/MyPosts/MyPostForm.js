import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from "./MyPost.module.css";
import DialogForm from "../../Dialogs/Dialog.Form";
import {required, maxLength, minLength} from "../../../Utility/ValidateForm/validator";
import {Textarea} from "../../common/FormControl/formComponent";

const maxLength20 =  maxLength(20);
const minLength2 =  minLength(2);

let MyPostForm = (props) => {
    const { handleSubmit } = props;
    return(
    <form onSubmit={handleSubmit}>
        <div className={classes.block}>
            {/*<label htmlFor="Post">Post</label>*/}
            <Field name={'newText'} component={Textarea} placeholder={'add post'} validate={[required,maxLength20,minLength2 ]}/>
        </div>
          <button  className={classes.btn}>Add post</button>
    </form>
    )
}

MyPostForm = reduxForm({
    form: 'postMessage'
})(MyPostForm);

export default MyPostForm