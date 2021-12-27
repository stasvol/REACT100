import {contactsType, profileType} from "../../../redux/prof_reducer";
import React from "react";

import Contact from "./contact";

import smail from "../../../photo/images/smail.png";
import classes from "./profilInfo.module.css";

interface profDataType{
    isOwner: boolean,
    profile:profileType,
    goToEditMode:()=>void,
}

const ProfData:React.FC<profDataType> = ({profile,isOwner,goToEditMode}) => (

     <div>
        {isOwner  &&  <button onClick={goToEditMode}>Edit</button>}

        <div><b>FullName</b> : {profile.fullName}</div>
        <div><b>About Me</b> : {profile.aboutMe} </div>
        <div><b>LookingForAJob</b> : {profile.lookingForAJob ? 'Yes' : 'No'}
            <img className={classes.smail} src={smail} alt={'image'}/>
        </div>
        {profile.lookingForAJob &&
            <div><b>My professional skills</b> : {profile.lookingForAJobDescription}</div>
        }
        <h4><b>Contacts</b> : </h4>
        {profile.contacts && Object
            .keys(profile.contacts)
            .map((key) => {
                return profile.contacts && profile.contacts[key as keyof contactsType] &&
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}/>
            })}

    </div>
)

export default ProfData