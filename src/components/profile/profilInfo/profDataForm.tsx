import React, {useState} from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import classes from "./profilInfo.module.css";
import smail from "../../../photo/images/smail.png";
import {createField, GetStringKeys, Input, Textarea} from "../../common/formControl/formComponent";
import {profileType} from "../../../redux/prof_reducer";
import {formDataType} from "../../login/login";
import {formDataOwnPropsType} from "../../login/loginForm";
import {profInfoType} from "./profilInfo";

interface profDataFormType{
    profile:profileType,
}
type profileTypeKeys= GetStringKeys<profileType>

const ProfDataForm:React.FC<InjectedFormProps<profileType, profDataFormType> & profDataFormType > = ({...props}) => {

        const { handleSubmit } = props;



        return  <form  onSubmit={handleSubmit}>

            <button type={"submit"}>Save</button>


            {props.error
                ?  <div className={classes.formError}>
            {props.error}
                </div>
                :  ''
            }

                <div><b>FullName</b> : {createField<profileTypeKeys>( "FullName",
                "fullName", [],  Input)}</div>
            {/*{props.profile.fullName}</div>*/}

                <div><b>LookingForAJob</b> : {createField<profileTypeKeys>( "", "lookingForAJob",
                [],  Input,{type:"checkbox"})}
            {/*        {props.profile.lookingForAJob ? 'Yes' : 'No'}*/}
            {/*        <img className={classes.smail} src={smail} alt={'image'}/>*/}
                </div>
            {/*    {props.profile.lookingForAJob &&*/}
                <div><b>My professional skills</b> : {createField<profileTypeKeys>( "My professional skills", "lookingForAJobDescription",
                [],  Textarea)}
            {/*        {props.profile.lookingForAJobDescription}</div>{/*    }*/}
                </div>
                <div><b>About Me</b> : {createField<profileTypeKeys>( "About Me", "aboutMe", [],  Textarea)}
            {/*        {props.profile.aboutMe}</div>*/}
                </div>
                <div>
                <h4><b>Contacts</b> : </h4>
            {props.profile.contacts && Object
                .keys(props.profile.contacts)
                .map(key => {
                return <div key={key}>
                <i>{key} : </i>
            {createField(key,"contacts."+ key, [],  Input)}
                </div>
            })}
            {/*return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>})}*/}

                </div>

        </form>


    }

     const ProfDataFormReduxForm = reduxForm<profileType, profDataFormType>({form: 'editProfile'})(ProfDataForm)

export default ProfDataFormReduxForm