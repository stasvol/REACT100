import React from 'react';
import { ProfileType } from '../../../redux/prof_reducer';

import Contact from './contact';

import smail from '../../../static/images/smail.png';
import classes from './profilInfo.module.css';

interface ProfDataType {
  isOwner: boolean;
  profile: ProfileType;
  goToEditMode: () => void;
}
const ProfData: React.FC<ProfDataType> = ({
  profile: { contacts, fullName, lookingForAJob, lookingForAJobDescription, aboutMe },
  isOwner,
  goToEditMode,
}): React.ReactElement => (
  <div>
    {isOwner && <button onClick={goToEditMode}>Edit</button>}
    <div>
      <b>FullName</b> : {fullName}
    </div>
    <div>
      <b>About Me</b> : {aboutMe}{' '}
    </div>
    <div>
      <b>LookingForAJob</b> : {lookingForAJob ? 'Yes' : 'No'}
      <img alt="" className={classes.smail} src={smail} />
    </div>
    {lookingForAJob && (
      <div>
        <b>My professional skills</b> : {lookingForAJobDescription}
      </div>
    )}
    <h4>
      <b>Contacts</b> :{' '}
    </h4>
    {contacts &&
      Object.keys(contacts).map(key => (
        <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
      ))}
  </div>
);

export default ProfData;
