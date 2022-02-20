import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createField, GetStringKeys } from '../../common/formControl/formComponent';
import { ProfileType } from '../../../redux/prof_reducer';
import { Input } from '../../common/formControl/Input';
import { Textarea } from '../../common/formControl/Textarea';

import classes from './profilInfo.module.css';

interface ProfDataFormType {
  profile: ProfileType;
}

export type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfDataForm: React.FC<
InjectedFormProps<ProfileType, ProfDataFormType> & ProfDataFormType
> = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Save</button>

      {error ? <div className={classes.formError}>{error}</div> : ''}

      <div>
        <b>FullName</b> : {createField<ProfileTypeKeys>('FullName', 'fullName', [], Input)}
      </div>

      <div>
        <b>LookingForAJob</b> :{' '}
        {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>

      <div>
        <b>My professional skills</b> :{' '}
        {createField<ProfileTypeKeys>(
          'My professional skills',
          'lookingForAJobDescription',
          [],
          Textarea,
        )}
      </div>

      <div>
        <b>About Me</b> : {createField<ProfileTypeKeys>('About Me', 'aboutMe', [], Textarea)}
      </div>
      <div>
        <h4>
          <b>Contacts</b> :{' '}
        </h4>
        {profile?.contacts &&
          Object.keys(profile.contacts).map(key => {
            return (
              <div key={key}>
                <i>{key} : </i>
                {createField(key, `contacts.${key}`, [], Input)}
              </div>
            );
          })}
      </div>
    </form>
  );
};
const ProfDataFormReduxForm = reduxForm<ProfileType, ProfDataFormType>({ form: 'editProfile' })(
  ProfDataForm,
);

export default ProfDataFormReduxForm;
