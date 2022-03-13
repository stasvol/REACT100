import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

import { ValidatorType } from '../../../utility/validateForm/validator';

import classes from './FormControl.module.css';

export const FormComponent: React.FC<WrappedFieldProps> = ({
  meta: { touched, error },
  children,
}): React.ReactElement => {
  const hasError = touched && error;
  return (
    <div className={hasError ? classes.error : ''}>
      <div>{children}</div>
      {touched && error && <span className={classes.span}>{error}</span>}
    </div>
  );
};

export type GetStringKeys<T> = Extract<keyof T, string>;
// type CreateFieldType = {
//   placeholder: string,
//   name: <FormKeysType extends string>,
//   validators: Array<ValidatorType>,
//   component: React.FC | React.Component | React.FC<WrappedFieldProps>,
//   props: Record<string, unknown>,
//   text:string,
// };
export const createField = <FormKeysType extends string>(
  placeholder: string,
  name: FormKeysType,
  validators: Array<ValidatorType>,
  component: React.FC | React.Component | React.FC<WrappedFieldProps>,
  props = {},
  text = '',
): React.ReactElement => {
  return (
    <div>
      <Field
        {...props}
        component={component}
        name={name}
        placeholder={placeholder}
        validate={validators}
      />{' '}
      {text}
    </div>
  );
};
