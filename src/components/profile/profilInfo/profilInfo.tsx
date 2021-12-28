import React from "react";

import Preloader from "../../common/preloader/preloader";
import {useProfInfo} from "../../../hock/useProfInfo";
import { profileType } from "../../../redux/prof_reducer";
import ProfDataForm from "./profDataForm";
import ProfData from "./profData";
import StatusContainer from "./statusContainer";

import kot from "../../../photo/images/kot.png"
import classes from './profilInfo.module.css';

export interface profInfoType {
    profile:profileType,
    status: string,
    updateStatus:(status:string)=>void,
    isOwner: boolean,
    savePhoto:(file: File)=> void,
    editProfile:(profile:profileType)=>Promise<profileType>
}


const ProfInfo:React.FC <profInfoType> =
    ({savePhoto, editProfile, status, updateStatus, isOwner, ...props}) => {

        const {editMode, setEditMode, onPhotoChange, onSubmit} = useProfInfo(savePhoto,editProfile)
        if (!props.profile) return <Preloader/>


    return (
        <div>
            <div>
                <img className={classes.imgCont} alt={'image'}
                     src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdPHh_HCvn4mbGGwR26idiTv2qkRSczUbZQ&usqp=CAU'}/>
            </div>
            <div className={classes.contact}>
                <div>
                    <StatusContainer status={status} updateStatus={updateStatus}/>
                </div>
                <div>
                    {/*@ts-ignore*/}
                    <img src={props.profile.photos.small || kot} className={classes.image} alt={'image'}/>

                    {isOwner && <input type={"file"} onChange={onPhotoChange}/>}

                </div>


                {editMode

                    ? <ProfDataForm {...props} onSubmit={onSubmit}  initialValues={props.profile}  />
                    : <ProfData goToEditMode={()=>{setEditMode( true) }} profile={props.profile} isOwner={isOwner}  />
                }
            </div>
        </div>
    )
}

export default ProfInfo