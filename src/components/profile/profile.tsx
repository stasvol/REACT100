import React from 'react';

import ProfInfo from './profilInfo/profilInfo';
import ProfAvatar from './profAvatar/profAvatar';
import MyPostContainer from './myPosts/myPostContainer';
import { PostDataType, ProfileType } from '../../redux/prof_reducer';

export type PropsProfType = {
  profile: ProfileType;
  status: string;
  updateStatus: (statusNew: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  editProfile: (profile: ProfileType) => Promise<ProfileType>;
  PostData: Array<PostDataType>;
  newText: string;
};

const Profile: React.FC<PropsProfType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  editProfile,
  PostData,
}) => {
  // eslint-disable-next-line no-debugger
  // debugger;
  return (
    <div>
      <ProfInfo
        editProfile={editProfile}
        isOwner={isOwner}
        profile={profile}
        savePhoto={savePhoto}
        status={status}
        updateStatus={updateStatus}
      />
      <ProfAvatar />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore  */}
      <MyPostContainer PostData={PostData} />
    </div>
  );
};

export default Profile;
