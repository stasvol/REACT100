import React from 'react'
import {connect} from "react-redux";

import {
    countUsersSetAcCr,
    currentPageSetAcCr,
    followAcCr,
    settingUserAcCr,
    unfollowAcCr
} from "./Set_reducers/setUserReducer";
import SettingUsers from "./SettingUsers";


 const mapStateToProps = (state) =>{

    return {
        users: state.users,
        countUsersSet: state.users.countUsersSet ,
        pageSizeSet: state.users.pageSizeSet ,
        currentPageSet: state.users.currentPageSet
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
          },
       curPageSet: (currentPageSet) => {
           dispatch(currentPageSetAcCr(currentPageSet)) ;
       },
       // countUsersSet:(countUsersSet) => {
       //         dispatch(countUsersSetAcCr(countUsersSet))
       // }

   }

 }

export default connect(mapStateToProps,mapDispatchToProps) (SettingUsers)