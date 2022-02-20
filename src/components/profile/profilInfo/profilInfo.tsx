import React from 'react';

import Preloader from '../../common/preloader/preloader';
import { useProfInfo } from '../../../hock/useProfInfo';
import { ProfileType } from '../../../redux/prof_reducer';
import ProfDataForm from './profDataForm';
import ProfData from './profData';
import StatusContainer from './statusContainer';

import kot from '../../../photo/images/kot.png';
import classes from './profilInfo.module.css';

export interface ProfInfoType {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  editProfile: (profile: ProfileType) => Promise<ProfileType>;
}

const ProfInfo: React.FC<ProfInfoType> = ({
  savePhoto,
  editProfile,
  status,
  updateStatus,
  isOwner,
  profile,
  ...props
}) => {
  const { editMode, setEditMode, onPhotoChange, onSubmit } = useProfInfo(savePhoto, editProfile);
  if (!profile) return <Preloader />;
  return (
    <div>
      <div>
        <img
          alt=""
          className={classes.imgCont}
          src="https://encrypted-tbn0.gstatic.com/
             images?q=tbn:ANd9GcSzdPHh_HCvn4mbGGwR26idiTv2qkRSczUbZQ&usqp=CAU"
        />
      </div>
      <div className={classes.contact}>
        <div>
          <StatusContainer status={status} updateStatus={updateStatus} />
        </div>
        <div>
          <img alt="" className={classes.image} src={profile?.photos?.small || kot} />

          {isOwner && <input onChange={onPhotoChange} type="file" />}
        </div>

        {editMode ? (
          <ProfDataForm {...props} onSubmit={onSubmit} profile={profile} />
        ) : (
          <ProfData
            goToEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
            profile={profile}
          />
        )}
      </div>
    </div>
  );
};
// Readonly<DecoratedFormProps<ProfileType, ProfDataFormType, string>>
export default ProfInfo;
