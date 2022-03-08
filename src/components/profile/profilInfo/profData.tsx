import React from 'react';
import { ContactsType, ProfileType } from '../../../redux/prof_reducer';

import Contact from './contact';

import smail from '../../../photo/images/smail.png';
import classes from './profilInfo.module.css';

interface ProfDataType {
  isOwner: boolean;
  profile: ProfileType;
  goToEditMode: () => void;
}
const ProfData: React.FC<ProfDataType> = ({
  profile,
  isOwner,
  goToEditMode,
}): React.ReactElement => (
  <div>
    {isOwner && <button onClick={goToEditMode}>Edit</button>}

    <div>
      <b>FullName</b> : {profile?.fullName}
    </div>
    <div>
      <b>About Me</b> : {profile?.aboutMe}{' '}
    </div>
    <div>
      <b>LookingForAJob</b> : {profile?.lookingForAJob ? 'Yes' : 'No'}
      <img alt="" className={classes.smail} src={smail} />
    </div>
    {profile?.lookingForAJob && (
      <div>
        <b>My professional skills</b> : {profile?.lookingForAJobDescription}
      </div>
    )}
    <h4>
      <b>Contacts</b> :{' '}
    </h4>
    {profile?.contacts &&
      Object.keys(profile.contacts).map(key => {
        return (
          profile.contacts &&
          profile.contacts[key as keyof ContactsType] && (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          )
        );
      })}
  </div>
);

export default ProfData;
