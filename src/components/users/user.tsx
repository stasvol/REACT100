import React from 'react';
import { NavLink } from 'react-router-dom';

import photo from '../../photo/images/user.png';
import { DisableButtonType, UsersType } from '../../redux/user_reducer';

import classes from './user.module.css';

interface PropsType {
  user: UsersType;
  disableButton: DisableButtonType[];
  unFollowThunkCreator: (userId: number) => void;
  FollowThunkCreator: (userId: number) => void;
}

const User: React.FC<PropsType> = ({
  user: { id, photos, followed, name, status },
  disableButton,
  unFollowThunkCreator,
  FollowThunkCreator,
}) => {
  const disable = disableButton?.some(userId => userId === id);
  return (
    <div>
      <div>
        <div>
          <NavLink to={`/profile/${id}`}>
            <img
              alt=""
              className={classes.photo}
              src={photos && photos.small !== null ? photos.small : photo}
            />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              disabled={disable}
              onClick={() => {
                unFollowThunkCreator(id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={disable}
              onClick={() => {
                FollowThunkCreator(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div>{name}</div>
        <div>{status}</div>
      </div>
    </div>
  );
};

export default User;
