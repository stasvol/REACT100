import React from "react";
import {Field, reduxForm} from "redux-form";

const SettingForm =(props) =>{

    // const {handleSubmit} = props

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newMessage'}  component={'textarea'} placeholder={'add data'} />
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