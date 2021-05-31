import React from 'react';
import {connect, Provider} from 'react-redux';
import {
    disableButtonFol,
    disableButtonType,
    follow,
    FollowThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togglePreloader,
    unfollow,
    unFollowThunkCreator,
    usersType,
} from "../../redux/user_reducer";
import * as axios from 'axios';
import UsersF from './UserF';
import Preloader from "../common/preloader/preloader";
import {userApi} from "../../Api/api";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, isLoadingSelector,
    pageSizeSelector,
    totalUsersCountSelector,
} from "../../redux/users_selectors";
import { rootReducersType } from '../../redux/reduxStore';


// interface PropsType {
//     getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
//     currentPage:number,
//     pageSize: number,
//     isLoading: boolean,
//     totalUsersCount:number,
//     users:Array<usersType>,
//     follow:()=>void,
//     unfollow:()=>void,
//     disableButtonFol:()=>void,
//     disableButton:()=>void,
//     unFollowThunkCreator:()=>void,
//     FollowThunkCreator:()=>void
// }
type mapStatePropsType = {
    users: Array<usersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isLoading: boolean,
    disableButton: Array<disableButtonType>
}
type matDispatchPropsType = {
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users: usersType)=>void,
    setCurrentPage:(currentPage:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void,
    togglePreloader:(isLoading:boolean)=>void,
    disableButtonFol:(disableButton:boolean, userId:number)=>void,
    getUsersThunkCreator:(pageNumber:number, pageSize:number)=>void,
    FollowThunkCreator:()=>void,
    unFollowThunkCreator:()=>void
}
type ownPropsType ={
  title:string
}
type PropsType = mapStatePropsType & matDispatchPropsType & ownPropsType

class UsersApiContainer extends React.Component <PropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.togglePreloader(true);
        //
        // userApi.getUserPage(this.props.currentPage, this.props.pageSize).then(data => {
        //
        //         this.props.togglePreloader(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onChangePage = (pageNumber:number) => {
         const {pageSize}= this.props
        this.props.getUsersThunkCreator(pageNumber, pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.togglePreloader(true);
        //
        //
        // userApi.getUserPage (pageNumber,this.props.pageSize).then(data => {
        //
        //         this.props.togglePreloader(false);
        //         this.props.setUsers(data.items);
        //
        //     });
    }


    render() {

        return (
            <>
                <h2>{this.props.title}</h2>
                {this.props.isLoading ? <Preloader/> : null}
                <UsersF onChangePage={this.onChangePage} currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                        users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                        disableButtonFol={this.props.disableButtonFol} disableButton={this.props.disableButton}
                        FollowThunkCreator={this.props.FollowThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator} />
            </>
        )

    }
}
const mapStateToProps = (state:rootReducersType):mapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isLoading: isLoadingSelector(state),
        disableButton: disableButtonSector(state)
    }
}
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         disableButton: state.usersPage.disableButton
//     }
// }
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers: (currentPage, pageSize) => {
//             dispatch(getUsersThunkCreator(currentPage, pageSize))
//         }
//     }
// }
// const UserContainer = withAuthRedirect( connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
//     setTotalUsersCount, togglePreloader,disableButtonFol,
//     getUsersThunkCreator, FollowThunkCreator, unFollowThunkCreator  })) (UsersApiContainer);
// export default UserContainer

export default compose(
    withAuthRedirect,
    connect        (mapStateToProps, {follow, unfollow, setUsers,
                      setCurrentPage, setTotalUsersCount, togglePreloader,disableButtonFol,
                      getUsersThunkCreator, FollowThunkCreator, unFollowThunkCreator  }))
(UsersApiContainer);