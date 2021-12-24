import React from 'react';
import {NavLink} from "react-router-dom";

import photo from "../../photo/images/user.png";
import {disableButtonType, usersType} from '../../redux/user_reducer';

import classes from "./user.module.css";

interface propsType {
    user: usersType,
    disableButton: Array<disableButtonType>,
    unFollowThunkCreator: (userId: number) => void,
    FollowThunkCreator: (userId: number) => void,
}

const User: React.FC<propsType> = ({user, disableButton, unFollowThunkCreator, FollowThunkCreator}) => {
  const disable = disableButton.some((id) => id === user.id)
  return  (

        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos && user.photos.small !== null ? user.photos.small : photo} alt={'image'}
                             className={classes.photo}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={disable}
                            onClick={() => {
                                unFollowThunkCreator(user.id)
                            }}>UnFollow</button>

                        : <button
                            disabled={disable}
                            onClick={() => {
                                FollowThunkCreator(user.id)
                            }}>Follow</button>
                    }
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
    )
}

export default User