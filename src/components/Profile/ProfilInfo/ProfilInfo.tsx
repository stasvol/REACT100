import React from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"
import kot from "../../../Photo/Images/kot.png"
import ProfilStatusHook from "./ProfilStatusWithHook";
import {useState} from "react";
import ProfDataForm from "./ProfDataForm";
import {contactsType, PhotosType, profileType, responsePhotosType} from "../../../redux/prof_reducer";
import { ChangeEvent } from "react";
import {InjectedFormProps} from "redux-form";

export interface profInfoType {
    profile:profileType,
    status: string,
    updateStatus:(status:string)=>void,
    isOwner: boolean,
    savePhoto:(file: File)=> void,
    editProfile:(profile:profileType)=>Promise<profileType>
}


const ProfInfo:React.FC <profInfoType> = ({...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoChange = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData:profileType) => {
        props.editProfile(formData).then(
                  () =>{
                  setEditMode(false);
                }
        )

        // props.loginPost(formData.Email, formData.Password, formData.RememberMe)
        //  alert(formData.email,formData.password,formData.rememberMe)
        console.log(formData)
}

    return (
        <div>
            <div>
                <img className={classes.imgCont} alt={'image'}
                     src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdPHh_HCvn4mbGGwR26idiTv2qkRSczUbZQ&usqp=CAU'}/>
            </div>
           <div className={classes.contact}>
            <div>
                <ProfilStatusHook status={props.status} updateStatus={props.updateStatus}/>
                {/*<ProfilStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            </div>
            <div>
                  {/*@ts-ignore*/}
                <img src={props.profile.photos.small || kot} className={classes.image} alt={'image'}/>

                {props.isOwner && <input type={"file"} onChange={onPhotoChange}/>}

            </div>


            {editMode
                ? <ProfDataForm {...props} onSubmit={onSubmit}  initialValues={props.profile}  />
                : <ProfData goToEditMode={()=>{setEditMode( true) }} profile={props.profile}   isOwner={props.isOwner}  />
            }

            {/*<div>*/}

            {/*    <div> <b>FullName</b> : {props.profile.fullName}</div>*/}
            {/*    <div> <b>About Me</b> : {props.profile.aboutMe}</div>*/}
            {/*    <div> <b>LookingForAJob</b> : {props.profile.lookingForAJob ? 'Yes' : 'No'}*/}
            {/*        <img className={classes.smail}  src={smail} alt={'image'}/>*/}
            {/*    </div>*/}
            {/*    {props.profile.lookingForAJob &&*/}
            {/*    <div> <b>My professional skills</b> : {props.profile.lookingForAJobDescription}</div>*/}
            {/*    }*/}
            {/*    <h4><b>Contacts</b> : </h4> {Object.keys(props.profile.contacts).map(key =>{*/}
            {/*          return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />*/}
            {/*})}*/}

            {/*    /!*<div> Facebook : {props.profile.contacts.facebook}</div>*!/*/}
            {/*    /!*<div> VK : {props.profile.contacts.vk}</div>*!/*/}
            {/*    /!*<div> Twitter : {props.profile.contacts.twitter}</div>*!/*/}
            {/*    /!*<div> Instagram : {props.profile.contacts.instagram}</div>*!/*/}
            {/*    /!*<-div> Git Hub : {props.profile.contacts.github}</div>*!/*/}
            {/*    /!*<div> Youtube : {props.profile.contacts.Youtube}</div>*!/*/}
            {/*    /!*<div>MainLink : {props.profile.mainLink}</div>*!/*/}
            {/*    /!*<div> FullName : {props.profile.fullName}</div>*!/*/}
            {/*    /!*<div>Photos : {props.profile.photos} </div>*!/*/}
            {/*</div>*/}
           </div>
        </div>
    )

}

type propsContactType={
    contactTitle:string|null,
    contactValue:string|null
}

const Contact:React.FC<propsContactType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue} </div>
}

interface profDataType{
    isOwner: boolean,
    profile:profileType,
    goToEditMode:()=>void,
}

const ProfData:React.FC<profDataType> = ({profile,isOwner,goToEditMode}) => {

    return <div>
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
                 return profile.contacts && profile.contacts[key as keyof contactsType] && <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}/>
                })}

                          {/*<div> Facebook : {props.profile.contacts.facebook}</div>*/}
                          {/*<div> VK : {props.profile.contacts.vk}</div>*/}
                          {/*<div> Twitter : {props.profile.contacts.twitter}</div>*/}
                          {/*<div> Instagram : {props.profile.contacts.instagram}</div>*/}
                          {/*<div> Git Hub : {props.profile.contacts.github}</div>*/}
                          {/*<div> Youtube : {props.profile.contacts.Youtube}</div>*/}
                          {/*<div>MainLink : {props.profile.mainLink}</div>*/}
                          {/*<div> FullName : {props.profile.fullName}</div>*/}
                          {/*<div>Photos : {props.profile.photos} </div>*/}
    </div>
}
export default ProfInfo