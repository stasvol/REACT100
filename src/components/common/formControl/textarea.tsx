import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { FormComponent } from './formComponent';

export const Textarea: React.FC<WrappedFieldProps> = (props): React.ReactElement => {
  const { input, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <textarea {...input} {...restProps} />{' '}
    </FormComponent>
  );
};
