import React, { useCallback, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hock/withAuthRedirect';
import {
  getStatus,
  profileThunkCreator,
  savePhoto,
  setUsersProfile,
  updateStatus,
  editProfile,
  ProfileType,
  PostDataType,
} from '../../redux/prof_reducer';
import Profile from './profile';

type MapStatePropsTYpe = ReturnType<typeof mapStateToProps>;

type DispatchPropsTYpe = {
  profile: ProfileType;
  setUsersProfile: (profile: ProfileType) => void;
  getUsers: (userId: number | string | undefined) => void;
  getStatus: (userId: number | string | undefined) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  editProfile: (profile: ProfileType) => Promise<ProfileType>;
  newText: string;
  PostData: Array<PostDataType>;
};

type RouteParams = {
  userId: string | undefined;
};

type PrevPropsType = MapStatePropsTYpe & DispatchPropsTYpe & RouteComponentProps<RouteParams>;

const ProfileContainer: React.FC<PrevPropsType> =
  // MapStatePropsTYpe &
  // DispatchPropsTYpe &
  // RouteComponentProps<RouteParams>
  ({ match, authorisedUserId, profile, status, getUsers, history, ...props }) => {
    // eslint-disable-next-line no-debugger
    // debugger;
    const userUpdateProfile = useCallback(() => {
      let { userId } = match.params;

      if (!userId) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        userId = authorisedUserId;

        if (!userId) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          userId = +history.push('/login');
        }
      }
      if (userId) getUsers(userId);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore+++
      getStatus(userId);
      // } else {
      //   throw new Error('Error');
      // }
    }, [authorisedUserId, getUsers, match.params, history]);

    // useEffect(() => userUpdateProfile(), [getUsers, authorisedUserId, userUpdateProfile]);

    useEffect(() => {
      if (match.params.userId) userUpdateProfile();
    }, [match.params.userId, userUpdateProfile]);

    return (
      <div>
        <Profile
          {...props}
          isOwner={!match.params.userId}
          profile={profile}
          savePhoto={savePhoto}
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    );
  };

const mapStateToProps = (state: {
  profPage: { profile: ProfileType; status: string };
  auth: { id: number | undefined | string; isAuth: boolean };
}): {
  authorisedUserId: number | string | undefined;
  isAuth: boolean;
  profile: ProfileType;
  state: { profile: ProfileType; status: string };
  status: string;
} => ({
  state: state.profPage,
  profile: state.profPage.profile,
  status: state.profPage.status,
  authorisedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUsersProfile,
    getUsers: profileThunkCreator,
    getStatus,
    updateStatus,
    savePhoto,
    editProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
