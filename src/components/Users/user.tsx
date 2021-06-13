import React from 'react'
import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";
import {NavLink} from "react-router-dom";
import {disableButtonType, usersType} from '../../redux/user_reducer';


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

                                disabled={disableButton.some((id)  => id === user.id)}
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

                                disabled={disableButton.some((id )=> id === user.id)}
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