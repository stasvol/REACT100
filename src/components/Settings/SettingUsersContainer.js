import React from 'react'
import {connect} from "react-redux";
import SettingUsers from "./SettingUsers";
import {followAcCr, settingUserAcCr, unfollowAcCr} from "./Set_reducers/setUserReducer";


 const mapStateToProps = (state) =>{
    return {
        users: state.users
    }
 }
 const mapDispatchToProps = (dispatch) =>{
   return {
           setFollow: (userId) =>{
           dispatch(followAcCr(userId))
       },
           setUnFollow: (userId) =>{
          dispatch (unfollowAcCr(userId))
       },
       settingAddUser: (users) => {
           dispatch(settingUserAcCr(users))
          }

   }

 }

export default connect(mapStateToProps,mapDispatchToProps) (SettingUsers)