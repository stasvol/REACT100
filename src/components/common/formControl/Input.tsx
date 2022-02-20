import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { FormComponent } from './formComponent';

export const Input: React.FC<WrappedFieldProps> = props => {
  const { input, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <input {...input} {...restProps} />{' '}
    </FormComponent>
  );
};
