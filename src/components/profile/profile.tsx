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
  PostData: PostDataType[];
  newText: string;
};

const Profile: React.FC<PropsProfType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  editProfile,
}): React.ReactElement => {
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
      <MyPostContainer />
    </div>
  );
};

export default Profile;
