import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";

import {createField, GetStringKeys, Input, Textarea} from "../../common/formControl/formComponent";
import {profileType} from "../../../redux/prof_reducer";

import classes from "./profilInfo.module.css";

interface profDataFormType {
    profile: profileType,
}

type profileTypeKeys = GetStringKeys<profileType>

const ProfDataForm: React.FC<InjectedFormProps<profileType, profDataFormType> & profDataFormType> =
    ({handleSubmit, error, profile}) => (

        <form onSubmit={handleSubmit}>

            <button type={"submit"}>Save</button>

            {error
                ? <div className={classes.formError}>
                    {error}
                </div>
                : ''
            }

            <div><b>FullName</b> : {createField<profileTypeKeys>("FullName",
                "fullName", [], Input)}
            </div>

            <div><b>LookingForAJob</b> : {createField<profileTypeKeys>("", "lookingForAJob",
                [], Input, {type: "checkbox"})}
            </div>

            <div><b>My professional
                skills</b> : {createField<profileTypeKeys>("My professional skills", "lookingForAJobDescription",
                [], Textarea)}
            </div>

            <div><b>About Me</b> : {createField<profileTypeKeys>("About Me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <h4><b>Contacts</b> : </h4>
                {profile.contacts && Object
                    .keys(profile.contacts)
                    .map(key => {
                        return <div key={key}>
                            <i>{key} : </i>
                            {createField(key, "contacts." + key, [], Input)}
                        </div>
                    })}

            </div>

        </form>

    )

const ProfDataFormReduxForm = reduxForm<profileType, profDataFormType>({form: 'editProfile'})(ProfDataForm)

export default ProfDataFormReduxForm