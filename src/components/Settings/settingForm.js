import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../News/NewSetFormValidators";
import {Textarea} from "../News/FormControl";

const minLength3 = minLength(3);
const maxLength30 = maxLength(30);

const SettingForm =(props) =>{

    // const {handleSubmit} = props

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newMessage'}  component={Textarea} placeholder={'add data'}
                                             validate={[required,minLength3,maxLength30]}/>
                <div>
                    <button>ADD</button>
                </div>
            </form>
        </div>

    )

}
const SettingFormContainer = reduxForm({
    form: 'setOne'
})(SettingForm)

export default SettingFormContainer