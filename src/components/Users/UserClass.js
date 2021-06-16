// import React, {Component} from 'react'
// import * as axios from "axios";
// import photo from "../../Photo/Images/user.png";
// import classes from "./user.module.css";
//
//
// class Users extends React.Component {
//
// //     constructor(props) {
// //         super(props);
// //         // if (this.props.users.length === 0) {
// //         //
// //         //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// //         //
// //         //         this.props.setUsers(response.data.items);
// //         //     });
// //         // }
// //     }
// //
// //     //   addUsers = () => {
// //     //     if (this.props.users.length === 0) {
// //     //
// //     //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// //     //
// //     //             this.props.setUsers(response.data.items);
// //     //         });
// //     //     }
// //     // }
// //
// // // props.setUsers([
// // //         {
// // //             id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
// // //             followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
// // //         },
// // //         {
// // //             id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
// // //             followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
// // //         },
// // //         {
// // //             id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
// // //             followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
// // //         },
// // //         {
// // //             id: 4,
// // //             photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
// // //             followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
// // //         }
// // // ]);
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
//          let pageCount = Math.ceil((this.props.totalUsersCount/this.props.pageSize)/200)
//          let  chatPages = [];
//          for (let i=1;  i <= pageCount; i++ ){
//                  chatPages.push(i);
//          }
//
//         return (
//
//             <div>
//                 <div className={classes.pagesNum}>
//                     { chatPages.map(p => {
//
//                       return  <span className={ this.props.currentPage === p  && classes.pagin}
//                       onClick={(e) =>{this.onChangePage(p)}}> {p} </span>}) }
//
//                 </div>
//                   {/*<button onClick={this.addUsers}>ADD USERS</button>*/}
//                 {
//                     this.props.users.map(user => <div key={user.id}>
//                         <div>
//                             {/*<img src={user.photoUrl} className={classes.photo}/>*/}
//                             <img src={user.photos.small != null ? user.photos.small : photo} className={classes.photo}/>
//                         </div>
//                         <div>
//                             {user.followed
//                                 ? <button onClick={() => {
//                                     this.props.unfollow(user.id)
//                                 }}>UnFollow</button>
//                                 : <button onClick={() => {
//                                     this.props.follow(user.id)
//                                 }}>Follow</button>
//                             }
//                         </div>
//                         <div>{user.name}</div>
//                         <div>{user.status}</div>
//                         <div>{"user.location.country"}</div>
//                         <div>{"user.location.city"}</div>
//
//                     </div>)
//                 }
//             </div>
//         )
//
//     }
// }
//
//
// export default Users