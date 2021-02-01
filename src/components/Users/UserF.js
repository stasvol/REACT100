import React, {Component} from 'react'
import * as axios from "axios";
import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";
import UserContainer from "./UserContainer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../Api/api";

const UsersF = (props) => {

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

    let pageCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)
    let  pages = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }

    return (

        <div>
            <div className={classes.pagesNum}>
                { pages.map(p => {

                    return  <span key={p.id} className={ props.currentPage === p  && classes.pagin}
                                  onClick={(e) =>{props.onChangePage(p)}}> {p} </span>}) }

            </div>
            {/*<button onClick={this.addUsers}>ADD USERS</button>*/}
            {
                    props.users.map(user => <div key={user.id}>
                    <div>
                        {/*<img src={user.photoUrl} className={classes.photo}/>*/}

                        <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : photo} alt={'image'} className={classes.photo}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {

                        userApi.deleteUser(user.id).then(data => {

                                       if (data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    });

                            }}>UnFollow</button>

                            : <button onClick={() => {

                           -userApi.postUser(user.id).then(data => {

                                   if (data.resultCode === 0) {
                                       props.follow(user.id)
                                   }
                                });
                            }}>Follow</button>
                        }

                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>

                </div>)
            }
        </div>
    )


}

export default UsersF