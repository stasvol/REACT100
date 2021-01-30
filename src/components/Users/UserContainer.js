import React from 'react';
import {connect, Provider} from 'react-redux';
import Users from "./User";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, togglePreloaderAC, unfollowAC} from "../../redux/user_reducer";
import * as axios from 'axios';
import UsersF from './UserF';
import Preloader from "../common/preloader/preloader";




class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);

        });

    }


    render() {

        return (
            <>
                  { this.props.isLoading ? <Preloader /> : null }
            <UsersF onChangePage={this.onChangePage}  currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
            </>
        )

    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
        setTotalUsersCount:(totalCount) => {
          dispatch(setTotalUsersCountAC(totalCount));
        },
        togglePreloader: (isLoading) => {
          dispatch(togglePreloaderAC(isLoading))
        }

    }
}


const UserContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiContainer)

export default UserContainer