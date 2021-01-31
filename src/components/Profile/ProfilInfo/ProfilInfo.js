import React from "react";
import classes from './ProfilInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import smail from "../../../Photo/Images/smail.png"

const ProfInfo = (props) => {

       if (!props.profile){
           return <Preloader />
       }
    return (
        <div>
            <div>
                <img className={classes.imgCont} alt={'image'}
                     src={'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'}/>
            </div>
            <div>
                  <img src={props.profile.photos.small} alt={'image'} />
            </div>
            <div>
                <div>About Me : {props.profile.aboutMe}</div>
                  <h4>Contacts : </h4>
                <div> Facebook : {props.profile.contacts.facebook}</div>
                <div> VK : {props.profile.contacts.vk}</div>
                <div> Twitter : {props.profile.contacts.twitter}</div>
                <div> Instagram : {props.profile.contacts.instagram}</div>
                <div> Git Hub : {props.profile.contacts.github}</div>
                <div> LookingForAJob : {props.profile.lookingForAJob} <img className={classes.smail}  src={smail} alt={'image'}/></div>
                <div> LookingForAJobDescription : {props.profile.lookingForAJobDescription}</div>
                <div> FullName : {props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfInfo