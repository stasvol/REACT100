import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { required, maxLength30, minLength2 } from '../../utility/validateForm/validator';

import { createField, Textarea } from '../common/formControl/formComponent';
import { NewMessageTextType } from './dialog';

import classes from './dialog.module.css';

export type NewMessageTextTypeKeys = Extract<keyof NewMessageTextType, string>;
// type propsType = Record<string, never>;

const DialogForm: React.FC<
InjectedFormProps<NewMessageTextType, Record<string, never>> & Record<string, never>
> = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.textarea}>
        {createField<NewMessageTextTypeKeys>(
          'add message',
          'newMessageText',
          [required, maxLength30, minLength2],
          Textarea,
        )}
      </div>
      <button className={classes.btn}>Add Message</button>
    </form>
  );
};

const DialogReduxForm = reduxForm<NewMessageTextType, Record<string, never>>({
  form: 'dialogMessage',
})(DialogForm);

export default DialogReduxForm;
