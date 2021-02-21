import React from 'react'
import  {reduxForm} from "redux-form";
import classes from "./ProfilInfo.module.css";
import smail from "../../../Photo/Images/smail.png";
import {createField, Input, Textarea} from "../../common/FormControl/formComponent";



const ProfDataForm = ({handleSubmit,profile,...props}) => {

        // const { handleSubmit } = props;
        return  <form  onSubmit={handleSubmit}>
            <button type={"submit"}>Save</button>

            <div><b>FullName</b> : {createField( "FullName",
                "fullName", [],  Input)}</div>
                {/*{props.profile.fullName}</div>*/}

            <div><b>LookingForAJob</b> : {createField( "", "lookingForAJob",
                [],  Input,{type:"checkbox"})}
        {/*        {props.profile.lookingForAJob ? 'Yes' : 'No'}*/}
        {/*        <img className={classes.smail} src={smail} alt={'image'}/>*/}
            </div>
        {/*    {props.profile.lookingForAJob &&*/}
            <div><b>My professional skills</b> : {createField( "My professional skills", "lookingForAJobDescription",
                [],  Textarea)}
        {/*        {props.profile.lookingForAJobDescription}</div>*/}
        {/*    }*/}
            </div>
            <div><b>About Me</b> : {createField( "About Me", "About Me", [],  Textarea)}
                {/*        {props.profile.aboutMe}</div>*/}
            </div>
        {/*    <h4><b>Contacts</b> : </h4> {Object.keys(props.profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
        {/*})}*/}


        </form>


    }

     const ProfDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfDataForm)

export default ProfDataFormReduxForm