import React, {Component} from 'react';
import ProfInfo from './ProfilInfo/ProfilInfo'
import ProfAvatar from './ProfAvatar/ProfAvatar'
import MyPostContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {

    return (

        <div >
            <ProfInfo profile={props.profile} />
            <ProfAvatar />
            <MyPostContainer  PostData={props.state.PostData} newText={props.state.newText}  post={'MY POSTS'} />

            {/*<MyPost PostData={props.state.PostData} newText={props.state.newText} dispatch={props.dispatch}*/}
            {/*        addPost={props.addPost}  addChangeText={props.addChangeText}*/}
            {/*        post={'MY POSTS'}/>*/}

        </div>
    )
}


export default Profile