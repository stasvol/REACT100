import React, {Component} from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfInfo from  './ProfilInfo/ProfilInfo'
import ProfAvatar from './ProfAvatar/ProfAvatar'

const Profile = (props) => {

    // console.log(props.data)

    return (
        <div className={''}>
            <ProfInfo />
            <ProfAvatar />
            <MyPost PostData={props.data.PostData} newText={props.data.newText} dispatch={props.dispatch}
                    // addPost={props.addPost}  addChangeText={props.addChangeText}
                    post={'MY POSTS'}/>

        </div>
    )
}
export default Profile