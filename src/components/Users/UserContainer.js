import React from 'react';
import {connect, Provider} from 'react-redux';
import {
    disableButtonFol,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togglePreloader,
    unfollow,
} from "../../redux/user_reducer";
import * as axios from 'axios';
import UsersF from './UserF';
import Preloader from "../common/preloader/preloader";
import {userApi} from "../../Api/api";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);

        userApi.getUserPage(this.props.currentPage, this.props.pageSize).then(data => {

                this.props.togglePreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);


        userApi.getUserPage (pageNumber,this.props.pageSize).then(data => {

                this.props.togglePreloader(false);
                this.props.setUsers(data.items);

            });

    }


    render() {

        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <UsersF onChangePage={this.onChangePage} currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                        users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                        disableButtonFol={this.props.disableButtonFol} disableButton={this.props.disableButton}
                         />
            </>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        disableButton: state.usersPage.disableButton
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//       follow:(userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow:(userId) => {
//           dispatch(unfollowAC(userId));
//       },
//         setUsers:(users) => {
//           dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(pageNumber) => {
//           dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount:(totalCount) => {
//           dispatch(setTotalUsersCountAC(totalCount));
//         },
//         togglePreloader: (isLoading) => {
//           dispatch(togglePreloaderAC(isLoading))
//         }
//
//     }
// }


const UserContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, togglePreloader,disableButtonFol})(UsersApiContainer)

export default UserContainer