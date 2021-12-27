import React from 'react';

import ProfInfo from './profilInfo/profilInfo'
import ProfAvatar from './profAvatar/profAvatar'
import MyPostContainer from "./myPosts/myPostContainer";
import {PostDataType, profileType} from "../../redux/prof_reducer";


export type propsProfType={
    profile:profileType,
    status:string,
    updateStatus:(statusNew:string)=>void,
    isOwner:boolean,
    savePhoto:(file:File)=>void,
    editProfile:(profile:profileType)=>Promise<profileType>,
    PostData:Array<PostDataType>,
    newText: string,

}

const Profile:React.FC<propsProfType> =
    ({profile,status,updateStatus,isOwner,savePhoto,editProfile, ...props}) => {

        return (
            <div>
                <ProfInfo profile={profile} status={status} updateStatus={updateStatus}
                          isOwner={isOwner} savePhoto={savePhoto}
                          editProfile={editProfile}/>
                <ProfAvatar/>
                {/*@ts-ignore*/}
                <MyPostContainer PostData={props.state.PostData}/>

            </div>
        )
    }

export default Profile
