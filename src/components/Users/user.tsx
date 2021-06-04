import React, {Component} from 'react'
import * as axios from "axios";
import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";
import UserContainer from "./UserContainer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../Api/api";
import Paginator from "../pagination/Paginator";
import {disableButtonType, usersType} from '../../redux/user_reducer';
import {PhotosType} from "../../redux/prof_reducer";

interface propsType{

    user: usersType,
    disableButton: Array <disableButtonType>,
    unFollowThunkCreator:(userId:number)=>void,
    FollowThunkCreator:(userId:number)=>void,
}

const User: React.FC<propsType> = ({user,disableButton,unFollowThunkCreator,FollowThunkCreator}) => {

    return (

        <div>
             <div>
                    <div>
                        {/*<img src={user.photoUrl} className={classes.photo}/>*/}

                        <NavLink to={'/Profile/' + user.id}>
                            {/*<img src={photo}/>*/}
                        <img src={ user.photos && user.photos.small !== null ? user.photos.small : photo } alt={'image'} className={classes.photo}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button
                                   // @ts-ignore
                                // disabled={disableButton.some((id)  => id === user.id)}
                                      onClick={() => {
                                          unFollowThunkCreator(user.id)
                        //      props.disableButtonFol(true, user.id)
                        // userApi.deleteUser(user.id).then(data => {
                        //
                        //                if (data.resultCode === 0) {
                        //                     props.unfollow(user.id)
                        //                 }
                        //     props.disableButtonFol(false,user.id)
                        //             });
                                      }}>UnFollow</button>

                            : <button
                                // @ts-ignore
                                // disabled={disableButton.some((id )=> id === user.id)}
                                onClick={() => {
                                    FollowThunkCreator(user.id)
                           //      props.disableButtonFol(true, user.id)
                           //
                           // userApi.postUser(user.id).then(data => {
                           //
                           //         if (data.resultCode === 0) {
                           //             props.follow(user.id)
                           //         }
                           //     props.disableButtonFol(false,user.id)
                           //
                           //      });
                            }}>Follow</button>
                        }

                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    {/*<div>{"user.location.country"}</div>*/}
                    {/*<div>{"user.location.city"}</div>*/}

                </div>
                 {/*)*/}

        </div>
    )


}

export default User