import React, {Component} from 'react';
import ProfInfo from './ProfilInfo/ProfilInfo'
import ProfAvatar from './ProfAvatar/ProfAvatar'
import MyPostContainer from "./MyPosts/MyPostContainer";
import {PostDataType, profileType} from "../../redux/prof_reducer";
import {rootReducersType} from "../../redux/reduxStore";

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

const Profile:React.FC<propsProfType> = (props) => {

    return (

        <div >
            <ProfInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                      isOwner={props.isOwner} savePhoto={props.savePhoto}
                      editProfile={props.editProfile}/>
            <ProfAvatar />
                                 {/*@ts-ignore*/}
            <MyPostContainer  PostData={props.state.PostData}  />

            {/*<MyPost PostData={props.state.PostData} newText={props.state.newText} dispatch={props.dispatch}*/}
            {/*        addPost={props.addPost}  addChangeText={props.addChangeText}*/}
            {/*        post={'MY POSTS'}/>*/}

        </div>
    )
}


export default Profile

// interface ProfileContainerType {
//     profile:profileType,
//     status:string,
//     updateStatus:(statusNew:string)=>void,
//     isOwner:boolean,
//     savePhoto:(file:File)=>void,
//     editProfile:(profile:profileType)=>Promise<profileType>,
//     PostData:Array<PostDataType>,
//     newText: string,
//     getUsers:(userId:string|undefined)=>void,
//     getStatus:(userId:string|undefined)=>void,
//     authorisedUserId:string|undefined
// }
// type RouteParams ={
//     userId:string|undefined
// }