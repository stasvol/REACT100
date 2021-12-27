import React,{useState, ChangeEvent } from "react";

import Preloader from "../../common/preloader/preloader";
import ProfilStatusHook from "./profilStatusWithHook";
import { profileType } from "../../../redux/prof_reducer";
import ProfDataForm from "./profDataForm";
import ProfData from "./profData";

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


const ProfInfo:React.FC <profInfoType> = ({...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) return <Preloader/>

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
            </div>
        </div>
    )
}

export default ProfInfo