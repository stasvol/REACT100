// import React, {Component} from 'react'
// import * as axios from "axios";
// import photo from "../../photo/images/user.png";
// import classes from "./user.module.css";
// import users from "./User";
// import UsersF from "./UserF";
//
//
// class UsersApiContainer extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items);
//             this.props.setTotalUsersCount(response.data.totalCount);
//         });
//     }
//
//     onChangePage = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items);
//         });
//
//     }
//
//
//     render() {
//
//         return (
//
//             <UsersF onChangePage={this.onChangePage}  currentPage={this.props.currentPage}
//                     totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
//                     users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
//
//         )
//
//     }
// }
//
//
// export default UsersApiContainer