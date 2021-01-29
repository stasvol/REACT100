import React from "react";
import {connect} from "react-redux";
import Users from "./User";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/user_reducer";

const mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage:(pageNumber) => {
          dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalCount:(totalCount) => {
          dispatch(setTotalCountAC(totalCount));
        }

    }
}


const UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UserContainer