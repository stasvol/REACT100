// import React from 'react';
// import {connect, Provider, useSelector} from 'react-redux';
// import {
//     disableButtonFol,
//     disableButtonType, filterType,
//     follow,
//     FollowThunkCreator,
//     getUsersThunkCreator,
//     setCurrentPage,
//     setTotalUsersCount,
//     setUsers,
//     togglePreloader,
//     unfollow,
//     unFollowThunkCreator,
//     usersType,
// } from "../../redux/user_reducer";
// import * as axios from 'axios';
// import UsersF from './UserF';
// import Preloader from "../common/preloader/preloader";
// import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
// import {compose} from "redux";
// import {
//     currentPageSelector, disableButtonSector,
//     getUsersSelector, isLoadingSelector,
//     pageNumberSizesSelector,
//     pageSizeSelector,
//     setFilterSelector,
//     totalUsersCountSelector,
// } from "../../redux/users_selectors";
// import { rootReducersType } from '../../redux/reduxStore';
//
//
// // interface PropsType {
// //     getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
// //     currentPage:number,
// //     pageSize: number,
// //     isLoading: boolean,
// //     totalUsersCount:number,
// //     users:Array<usersType>,
// //     follow:()=>void,
// //     unfollow:()=>void,
// //     disableButtonFol:()=>void,
// //     disableButton:()=>void,
// //     unFollowThunkCreator:()=>void,
// //     FollowThunkCreator:()=>void
// // }
// type mapStatePropsType = {
//     users: Array<usersType>,
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isLoading: boolean,
//     disableButton: Array<disableButtonType>
//     pageNumberSizes: number,
//     filter:filterType
// }
// type matDispatchPropsType = {
//     follow:(userId:number)=>void,
//     unfollow:(userId:number)=>void,
//     setUsers:(users: usersType)=>void,
//     setCurrentPage:(currentPage:number)=>void,
//     setTotalUsersCount:(totalCount:number)=>void,
//     togglePreloader:(isLoading:boolean)=>void,
//     disableButtonFol:(disableButton:boolean, userId:number)=>void,
//     getUsersThunkCreator:(pageNumber:number, pageSize:number, filter:filterType)=>void,
//     FollowThunkCreator:()=>void,
//     unFollowThunkCreator:()=>void
// }
// type ownPropsType ={
//   title:string
// }
// export type PropsTypeUserContainer = mapStatePropsType & matDispatchPropsType & ownPropsType
//
// // type UsersPageType={
// //
// // }
// // const UsersPage:React.FC <UsersPageType>=(props)=>{
// //     return (
// //         <>
// //             {/*<h2>{this.props.title}</h2>*/}
// //             {this.props.isLoading ? <Preloader/> : null}
// //
// //             <UsersF onChangePage={onChangePage} currentPage={props.currentPage}
// //                     totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
// //                     users={props.users} follow={props.follow} unfollow={props.unfollow}
// //                     disableButtonFol={this.props.disableButtonFol} disableButton={props.disableButton}
// //                     FollowThunkCreator={this.props.FollowThunkCreator} pageNumberSizes={props.pageNumberSizes}
// //                     unFollowThunkCreator={this.props.unFollowThunkCreator}
// //                     getUsersThunkCreator={this.props.getUsersThunkCreator} isLoading={props.isLoading}
// //                     setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={props.setTotalUsersCount}
// //                     setUsers={this.props.setUsers} title={this.props.title} togglePreloader={this.props.togglePreloader}
// //                     onFilterChange={this.onFilterChange} filter={this.props.filter}/>
// //         </>
// //     )
// //
// // }
// class UsersContainer extends React.Component <PropsTypeUserContainer> {
//
//     componentDidMount() {
//
//         this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize,this.props.filter )
//         // this.props.togglePreloader(true);
//         //
//         // userApi.getUserPage(this.props.currentPage, this.props.pageSize).then(data => {
//         //
//         //         this.props.togglePreloader(false);
//         //         this.props.setUsers(data.items);
//         //         this.props.setTotalUsersCount(data.totalCount);
//         //     });
//     }
//
//     onChangePage = (pageNumber:number) => {
//          const {pageSize,filter}= this.props
//         this.props.getUsersThunkCreator(pageNumber, pageSize,filter)
//         // this.props.setCurrentPage(pageNumber);
//         // this.props.togglePreloader(true);
//         //
//         //
//         // userApi.getUserPage (pageNumber,this.props.pageSize).then(data => {
//         //
//         //         this.props.togglePreloader(false);
//         //         this.props.setUsers(data.items);
//         //
//         //     });
//     }
//
//     onFilterChange =(filter:filterType)=>{
//         const {pageSize,currentPage}= this.props
//         this.props.getUsersThunkCreator(1, pageSize,filter)
//
//     }
//
//
//     render() {
//
//         return (
//             <>
//                 {/*<h2>{this.props.title}</h2>*/}
//                 {this.props.isLoading ? <Preloader/> : null}
//
//                 <UsersF onChangePage={this.onChangePage} currentPage={this.props.currentPage}
//                         totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
//                         users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
//                         disableButtonFol={this.props.disableButtonFol} disableButton={this.props.disableButton}
//                         FollowThunkCreator={this.props.FollowThunkCreator} pageNumberSizes={this.props.pageNumberSizes}
//                         unFollowThunkCreator={this.props.unFollowThunkCreator}
//                         getUsersThunkCreator={this.props.getUsersThunkCreator} isLoading={this.props.isLoading}
//                         setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
//                         setUsers={this.props.setUsers} title={this.props.title} togglePreloader={this.props.togglePreloader}
//                         onFilterChange={this.onFilterChange} filter={this.props.filter}/>
//             </>
//         )
//
//     }
// }
// const mapStateToProps = (state:rootReducersType):mapStatePropsType => {
//
//     return {
//         users: getUsersSelector(state),
//         pageSize: pageSizeSelector(state),
//         totalUsersCount: totalUsersCountSelector(state),
//         currentPage: currentPageSelector(state),
//         isLoading: isLoadingSelector(state),
//         disableButton: disableButtonSector(state),
//         pageNumberSizes: pageNumberSizesSelector(state),
//         filter: setFilterSelector(state)
//
//     }
// }
// // const mapStateToProps = (state) => {
// //     return {
// //         users: state.usersPage.users,
// //         pageSize: state.usersPage.pageSize,
// //         totalUsersCount: state.usersPage.totalUsersCount,
// //         currentPage: state.usersPage.currentPage,
// //         isLoading: state.usersPage.isLoading,
// //         disableButton: state.usersPage.disableButton
// //     }
// // }
// // const mapDispatchToProps = (dispatch) =>{
// //     return {
// //       follow:(userId) => {
// //          dispatch(followAC(userId));
// //       },
// //       unfollow:(userId) => {
// //           dispatch(unfollowAC(userId));
// //       },
// //         setUsers:(users) => {
// //           dispatch(setUsersAC(users));
// //         },
// //         setCurrentPage:(pageNumber) => {
// //           dispatch(setCurrentPageAC(pageNumber));
// //         },
// //         setTotalUsersCount:(totalCount) => {
// //           dispatch(setTotalUsersCountAC(totalCount));
// //         },
// //         togglePreloader: (isLoading) => {
// //           dispatch(togglePreloaderAC(isLoading))
// //         }
// //
// //     }
// // }
// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         getUsers: (currentPage, pageSize) => {
// //             dispatch(getUsersThunkCreator(currentPage, pageSize))
// //         }
// //     }
// // }
// // const UserContainer = withAuthRedirect( connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
// //     setTotalUsersCount, togglePreloader,disableButtonFol,
// //     getUsersThunkCreator, FollowThunkCreator, unFollowThunkCreator  })) (UsersApiContainer);
// // export default UserContainer
//
// export default compose<React.ComponentType>(
//     // withAuthRedirect,
//     connect        (mapStateToProps, {follow, unfollow, setUsers,
//                       setCurrentPage, setTotalUsersCount, togglePreloader,disableButtonFol,
//                       getUsersThunkCreator, FollowThunkCreator, unFollowThunkCreator  }))
// (UsersContainer);


import React from 'react';
import {connect, Provider, useSelector} from 'react-redux';
import {
    disableButtonFol,
    disableButtonType, filterType,
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
// import {propsType, UsersF} from './UserF';
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, isLoadingSelector,
    pageNumberSizesSelector,
    pageSizeSelector,
    setFilterSelector,
    totalUsersCountSelector,
} from "../../redux/users_selectors";
import {rootReducersType} from '../../redux/reduxStore';
import User from "./user";
import {UsersF} from "./UserF";


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
// type mapStatePropsType = {
//     users: Array<usersType>,
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isLoading: boolean,
//     disableButton: Array<disableButtonType>
//     pageNumberSizes: number,
//     filter:filterType
// }
// type matDispatchPropsType = {
//     follow:(userId:number)=>void,
//     unfollow:(userId:number)=>void,
//     setUsers:(users: usersType)=>void,
//     setCurrentPage:(currentPage:number)=>void,
//     setTotalUsersCount:(totalCount:number)=>void,
//     togglePreloader:(isLoading:boolean)=>void,
//     disableButtonFol:(disableButton:boolean, userId:number)=>void,
//     getUsersThunkCreator:(pageNumber:number, pageSize:number, filter:filterType)=>void,
//     FollowThunkCreator:()=>void,
//     unFollowThunkCreator:()=>void
// }
// type ownPropsType ={
//   title:string
// }
// export type PropsTypeUserContainer = mapStatePropsType & matDispatchPropsType & ownPropsType
type propsType = {
    isLoading: boolean
}

const UsersContainer: React.FC<propsType> = (props) => {

    const isLoading = useSelector(isLoadingSelector)
    return (
        <>
            {/*<h2>{this.props.title}</h2>*/}
            {isLoading ? <Preloader/> : null}

            <UsersF/>
            {/*onChangePage={onChangePage} currentPage={props.currentPage}*/}
            {/*totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}*/}
            {/*users={props.users} follow={props.follow} unfollow={props.unfollow}*/}
            {/*disableButtonFol={props.disableButtonFol} disableButton={props.disableButton}*/}
            {/*FollowThunkCreator={props.FollowThunkCreator} pageNumberSizes={props.pageNumberSizes}*/}
            {/*unFollowThunkCreator={props.unFollowThunkCreator}*/}
            {/*getUsersThunkCreator={props.getUsersThunkCreator} isLoading={props.isLoading}*/}
            {/*setCurrentPage={props.setCurrentPage} setTotalUsersCount={props.setTotalUsersCount}*/}
            {/*setUsers={props.setUsers} title={this.props.title} togglePreloader={props.togglePreloader}*/}
            {/*onFilterChange={onFilterChange} filter={props.filter}*/}
        </>
    )

}
export default React.memo(UsersContainer)