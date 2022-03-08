import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { required, maxLength30, minLength2 } from '../../../utility/validateForm/validator';
import { createField } from '../../common/formControl/formComponent';
import { Textarea } from '../../common/formControl/textarea';

import classes from './myPost.module.css';

export type PropsPostFormType = {
  newText: string;
};

type NewTextTypeKeys = Extract<keyof PropsPostFormType, string>;

const MyPostForm: React.FC<InjectedFormProps<PropsPostFormType>> = ({
  handleSubmit,
}): React.ReactElement => (
  <form onSubmit={handleSubmit}>
    <div className={classes.block}>
      {createField<NewTextTypeKeys>(
        'add post',
        'newText',
        [required, maxLength30, minLength2],
        Textarea,
      )}
    </div>
    <button className={classes.btn}>Add post</button>
  </form>
);

const MyPostReduxForm = reduxForm<PropsPostFormType>({
  form: 'postMessage',
})(MyPostForm);

export default MyPostReduxForm;
