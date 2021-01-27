import React from "react";
import {connect} from "react-redux";
import Users from "./user";
import {followAC, setUsersAC, unfollowAC} from "../../redux/user_reducer";

const mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      follow:(userId) => {
         dispatch(followAC(userId));
      },
      unfollow:(userId) => {
          dispatch(unfollowAC(userId));
      },
        setUsers:(users) => {
          dispatch(setUsersAC(users));
        }

    }
}


const UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UserContainer