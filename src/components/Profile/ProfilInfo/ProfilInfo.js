import React from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"
import ProfilStatus from "./ProfilStatus";
import ProfilStatusWithHook from "./ProfilStatusWithHook";
import kot from "../../../Photo/Images/kot.png"
import ProfilStatusHook from "./ProfilStatusWithHook";
import {useState} from "react";
import ProfDataForm from "./ProfDataForm";


const ProfInfo = ({...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.editProfile(formData)
        // setEditMode(false);
        // props.loginPost(formData.Email, formData.Password, formData.RememberMe)
        //  alert(formData.email,formData.password,formData.rememberMe)
        console.log(formData)
}

    return (
        <div className={classes.contact}>
            {/*<div>*/}
            {/*    <img className={classes.imgCont} alt={'image'}*/}
            {/*         src={'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'}/>*/}
            {/*</div>*/}

            <div>
                <ProfilStatusHook status={props.status} updateStatus={props.updateStatus}/>
                {/*<ProfilStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            </div>
            <div>
                <img src={props.profile.photos.small || kot} className={classes.image} alt={'image'}/>

                {props.isOwner && <input type={"file"} onChange={onPhotoChange}/>}

            </div>


            {editMode
                ? <ProfDataForm {...props} onSubmit={onSubmit}  initialValues={props.profile} profile={props.profile} />
                : <ProfData goToEditMode={()=>{setEditMode( true) }}  {...props}  isOwner={props.isOwner}  />
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
            {/*    /!*<div> Git Hub : {props.profile.contacts.github}</div>*!/*/}
            {/*    /!*<div> Youtube : {props.profile.contacts.Youtube}</div>*!/*/}
            {/*    /!*<div>MainLink : {props.profile.mainLink}</div>*!/*/}
            {/*    /!*<div> FullName : {props.profile.fullName}</div>*!/*/}
            {/*    /!*<div>Photos : {props.profile.photos} </div>*!/*/}
            {/*</div>*/}
        </div>
    )

}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue} </div>
}

const ProfData = ({...props}) => {

    return <div>
                  {props.isOwner  &&  <button onClick={props.goToEditMode}>Edit</button>}

                    <div><b>FullName</b> : {props.profile.fullName}</div>
                    <div><b>About Me</b> :  </div>
                    <div><b>LookingForAJob</b> : {props.profile.lookingForAJob ? 'Yes' : 'No'}
                        <img className={classes.smail} src={smail} alt={'image'}/>
                    </div>
                 {props.profile.lookingForAJob &&
                 <div><b>My professional skills</b> : {props.profile.lookingForAJobDescription}</div>
                 }
                 <h4><b>Contacts</b> : </h4> {Object.keys(props.profile.contacts).map(key => {
                 return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
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