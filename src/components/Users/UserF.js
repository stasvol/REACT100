import React, {Component} from 'react'
// import * as axios from "axios";
// import photo from "../../Photo/Images/user.png";
// import classes from "./user.module.css";
// import UserContainer from "./UserContainer";
// import {NavLink} from "react-router-dom";
// import {userApi} from "../../Api/api";
import Paginator from "../pagination/Paginator";
import User from "./user";

const UsersF = ({currentPage,onChangePage,totalUsersCount,pageSize,users,...props}) => {

// let addUsers = () => {
//     if (props.users.length === 0) {
//
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//
//             props.setUsers(response.data.items);
//         });
//     }
// }
//
// props.setUsers([
//         {
//             id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
//             followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
//         },
//         {
//             id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
//             followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
//         },
//         {
//             id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
//             followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
//         },
//         {
//             id: 4,
//             photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
//             followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
//         }
// ]);

    // let pageCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)
    // let  pages = [];
    // for (let i=1;  i <= pageCount; i++ ){
    //     pages.push(i);
    // }

    return (

        <div>
             <Paginator currentPage={currentPage} onChangePage={onChangePage}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {/*<button onClick={this.addUsers}>ADD USERS</button>*/}

            {
                    users.map((user,i) => <User key={i} user={user}
                                                disableButton={props.disableButton}
                                                unFollowThunkCreator={props.unFollowThunkCreator}
                                                FollowThunkCreator={props.FollowThunkCreator}/>
                                                )
                //         <div key={i}>
                //     <div>
                //         {/*<img src={user.photoUrl} className={classes.photo}/>*/}
                //
                //         <NavLink to={'/Profile/' + user.id}>
                //         <img src={user.photos.small != null ? user.photos.small : photo} alt={'image'} className={classes.photo}/>
                //         </NavLink>
                //
                //     </div>
                //     <div>
                //         {user.followed
                //             ? <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
                //
                //                 props.unFollowThunkCreator(user.id)
                //         //      props.disableButtonFol(true, user.id)
                //         // userApi.deleteUser(user.id).then(data => {
                //         //
                //         //                if (data.resultCode === 0) {
                //         //                     props.unfollow(user.id)
                //         //                 }
                //         //     props.disableButtonFol(false,user.id)
                //         //             });
                //
                //             }}>UnFollow</button>
                //
                //             : <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
                //
                //                 props.FollowThunkCreator(user.id)
                //            //      props.disableButtonFol(true, user.id)
                //            //
                //            // userApi.postUser(user.id).then(data => {
                //            //
                //            //         if (data.resultCode === 0) {
                //            //             props.follow(user.id)
                //            //         }
                //            //     props.disableButtonFol(false,user.id)
                //            //
                //            //      });
                //             }}>Follow</button>
                //         }
                //
                //     </div>
                //     <div>{user.name}</div>
                //     <div>{user.status}</div>
                //     <div>{"user.location.country"}</div>
                //     <div>{"user.location.city"}</div>
                //
                // </div>)
            }
        </div>
    )


}

export default UsersF